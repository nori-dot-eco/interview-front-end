import Link from 'next/link';
import { useState } from 'react';
import {
  CarbonRemovalsQuery,
  useCarbonRemovalsQuery,
  useAllocateRemovalsToOrderMutation,
  CarbonRemovalsDocument,
} from '../lib/carbon-removals.graphql';
import { initializeApollo } from '../lib/apollo';

const Index = () => {
  const { carbonRemovals } = useCarbonRemovalsQuery().data!;
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [allocatedCarbonRemovals, setAllocatedCarbonRemovals] = useState([]);
  const [allocateRemovalsToOrderMutation] =
    useAllocateRemovalsToOrderMutation();

  const onClickSubmit = async () => {
    const result = await allocateRemovalsToOrderMutation({
      variables: {
        orderQuantity,
      },
    });
    console.log(result);
  };

  return (
    <div>
      <h1>Front-end interview</h1>
      <input
        type="number"
        placeholder="Quantity for order..."
        onChange={(e) => setOrderQuantity(parseFloat(e.target.value))}
      />
      <button type="button" onClick={onClickSubmit}>
        Submit
      </button>
      <table>
        <tr>
          <th>ID</th>
          <th>Quantity</th>
        </tr>
        {carbonRemovals.map((carbonRemoval) => (
          <tr>
            <td>{carbonRemoval.id}</td>
            <td>{carbonRemoval.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CarbonRemovalsDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
