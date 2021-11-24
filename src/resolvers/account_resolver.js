const accountResolver = {
    Query: {
        accountByUsername: async (_, {username}, {dataSource}) => {
            return await dataSource.accountByUsername(username);
        }
    }
}