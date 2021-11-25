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

    async createAccountRequest(account){
        return await this.post('/accounts'. account);
    }
}

module.exports = AccountAPI;