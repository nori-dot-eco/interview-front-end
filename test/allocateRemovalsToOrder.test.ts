import { allocateRemovalsToOrder } from '../lib/allocateRemovalsToOrder';

describe('allocateRemovalsToOrder', () => {
  it('should be tested', async () => {
    const result = await allocateRemovalsToOrder({
      orderQuantity: 1,
    });
    console.log(result);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          quantity: 1,
        }),
      ])
    );
  });
});
