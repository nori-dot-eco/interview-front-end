import { QueryResolvers, MutationResolvers } from '@graphql-types@';
import csv from 'csvtojson';

import { allocateRemovalsToOrder } from './allocateRemovalsToOrder';
import { ResolverContext } from './apollo';

const Query: Required<QueryResolvers<ResolverContext>> = {
  async carbonRemovals(_parent, _args, _context, _info) {
    const jsonFromCsv = await csv().fromFile(
      process.cwd() + '/lib/removals.csv'
    );
    return jsonFromCsv;
  },
};

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  allocateRemovalsToOrder(_parent, { orderQuantity }, _context, _info) {
    return allocateRemovalsToOrder({ orderQuantity });
  },
};

export default { Query, Mutation };
