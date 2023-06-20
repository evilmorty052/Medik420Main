// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import users from './users'
import agents from './agents'
import pricing from './pricing'
import videos from './videos'
import store from './store'
import executives from './executives'
import chatrooms from './chatrooms'
import members from './members'
import syndicates from './syndicates'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import stocks from './stocks'
import digitalFarms from './digitalFarms'
import applicants from "./applicants"
import jobs from "./jobs"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ users,agents,pricing,videos, store, executives, chatrooms, members , syndicates, stocks, digitalFarms, jobs, applicants]),
})
