const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AccountAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async accountByUsername(username){
        return await this.get(`/accounts/${username}`);
    }
}

module.exports = AccountAPI;