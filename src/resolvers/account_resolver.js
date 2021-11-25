const accountResolver = {
    Query: {
        accountByUsername: async (_, {username}, {dataSources}) => {
            return await dataSources.accountAPI.accountByUsername(username);
        }
    }
}

module.exports = accountResolver