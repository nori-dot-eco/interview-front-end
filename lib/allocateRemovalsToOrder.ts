import csv from 'csvtojson';

type AllocatedRemoval = {
  id: string;
  quantity: number;
};

type CarbonRemoval = {
  id: string;
  quantity: number;
};

export const allocateRemovalsToOrder = async ({
  orderQuantity,
}: {
  orderQuantity: number;
}): Promise<AllocatedRemoval[]> => {
  const csvData = (await csv().fromFile(
    process.cwd() + '/lib/removals.csv'
  )) as CarbonRemoval[];
  console.log(csvData);
  let quantityToAllocate = orderQuantity;
  const result = csvData.reduce<AllocatedRemoval[]>(
    (allocatedRemovals, currentRemoval) => {
      if (quantityToAllocate === 0) {
        return allocatedRemovals;
      }
      const { quantity, id } = currentRemoval;
      const quantityAllocatedFromRemoval =
        currentRemoval.quantity >= quantityToAllocate
          ? quantityToAllocate
          : quantity;
      quantityToAllocate -= quantityAllocatedFromRemoval;
      return [
        ...allocatedRemovals,
        {
          id,
          quantity: quantityAllocatedFromRemoval,
        },
      ];
    },
    []
  );
  if (quantityToAllocate > 0) {
    throw new Error('NOT ENOUGH STOCK');
  }
  return result;
};
