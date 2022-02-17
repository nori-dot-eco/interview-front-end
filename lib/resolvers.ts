import { QueryResolvers, MutationResolvers } from '@graphql-types@';
import csv from 'csvtojson';

import { allocateRemovalsToOrder } from './allocateRemovalsToOrder';
import { ResolverContext } from './apollo';

const Query: Required<QueryResolvers<ResolverContext>> = {
  carbonRemovals(_parent, _args, _context, _info) {
    return csv().fromFile(process.cwd() + '/lib/removals.csv');
  },
};

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  allocateRemovalsToOrder(_parent, { orderQuantity }, _context, _info) {
    return allocateRemovalsToOrder({ orderQuantity });
  },
};

export default { Query, Mutation };
