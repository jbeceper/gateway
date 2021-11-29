const transactionResolver = {
    Query: {
        transactionByUsername: async(_, { username }, { dataSources }) => {
            return await dataSources.accountAPI.transactionByUsername(username);
        }
    },
    Mutation: {
        createTransaction:  async(_, { transaction }, { dataSources }) => {
            return await dataSources.accountAPI.createTransaction(transaction);
        }
    }
}

module.exports = transactionResolver;