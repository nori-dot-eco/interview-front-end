# Readme.md

# Before the interview begins

Fork this repository and clone it to your environment of choice.

## Part 1

### The Problem

Our application matches orders for carbon removal with available supply to determine which carbon removals are used for an order.

To facilitate this order matching, we want to design an algorithm that, given an order and a list of available carbon removals, will give you a list of carbon removals to be used for that order.

Our list of available supply is an array that looks something like this:

```
// SHOW EXAMPLE CARBON REMOVALS HERE
```

Use the following function to implement a matching algorithm that returns a list of carbon removals that can be used to fulfill the order.

```typescript
export const allocateRemovalsToOrder = async ({
  orderQuantity,
}: {
  orderQuantity: number;
}): any => {}
```

To get started, you can use the starter code in `/lib/allocateRemovalsToOrder.ts` and the test located at `/test/allocateRemovalsToOrder.test.ts`. You can then run your tests using `yarn test-algorithm`, which will automatically rerun your tests as you make changes to your code.

### Extension 1

Our customers wish to filter carbon removals based on their location or year of removal. Extend your algorithm with this behavior using the following filters parameter.

```typescript
export const allocateRemovalsToOrder = async ({
  orderQuantity,
  filters,
}: {
  orderQuantity: number;
  filters?: {
    years?: number[];
    locations?: string[];
  };
}): any => {}
```

### Extension 2

We want to keep track of which carbon removals have been allocated so we don't assign the same carbon removal to multiple orders. Extend your algorithm so that allocations of carbon removals are tracked across multiple runs.

## Front-end

## Back-end

### Setup

For solving back-end problems, you have three different options.

1. Serverless functions with Next.js. Right basic funct

### 