const usersResolvers = {
    Mutation: {
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        }
    }
}

module.exports = usersResolvers;