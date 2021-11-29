const accountResolver = {
    Query: {
        accountByUsername: async (_, {username}, {dataSources}) => {
            if(username == usernameToken){
                return await dataSources.accountAPI.accountByUsername(username);
            }else{
                return null
            }
        }
    }
}

module.exports = accountResolver