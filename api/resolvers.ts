// @ts-ignore: No type information available yet https://github.com/waitandseeagency/graphql-type-datetime/issues/5
import GraphQLDateTime from 'graphql-type-datetime'
import { container } from 'tsyringe'
import _ from 'lodash'
import { Resolvers } from './graphql'
import { Resolvers as UserResolvers } from './user/resolvers'
import { Resolvers as DocumentResolvers } from './documents/resolvers'
import { Resolvers as GroupResolvers } from './groups/resolvers'

const userResolvers = container.resolve(UserResolvers)
const documentResolvers = container.resolve(DocumentResolvers)
const groupResolvers = container.resolve(GroupResolvers)

const resolvers: Resolvers = _.merge(
  userResolvers.resolvers(),
  documentResolvers.resolvers(),
  groupResolvers.resolvers(),
  {
    // Custom scalar types
    DateTime: GraphQLDateTime,
  }
)

export default resolvers
