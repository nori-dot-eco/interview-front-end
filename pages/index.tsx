import { Fragment, useState } from 'react';
import {
  useCarbonRemovalsQuery,
  useAllocateRemovalsToOrderMutation,
  CarbonRemovalsDocument,
} from './graphql/index.graphql';
import { initializeApollo } from 'lib/apollo';
import { Header } from 'components/header';

const Index = () => {
  const { carbonRemovals } = useCarbonRemovalsQuery().data!;
  console.log(carbonRemovals);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [allocateRemovalsToOrderMutation] =
    useAllocateRemovalsToOrderMutation();

  const handleSubmit = async () => {
    const result = await allocateRemovalsToOrderMutation({
      variables: {
        orderQuantity,
      },
    });
    console.log(result);
  };

  return (
    <Fragment>
      <Header />
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
    </Fragment>
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
