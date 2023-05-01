const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql;

const dummyDate = [{id: "1", name: 'ahmad', gener: ''},
    {id: "2", name: 'mohammad', gener: ''},
    {id: "3", name: 'ail', gener: ''}
]
const BookType= new GraphQLObjectType({
    name:'Book',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        gener: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return dummyDate.find((item)=> item.id === args.id);
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})