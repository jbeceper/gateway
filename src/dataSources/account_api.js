const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AccountAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.account_api_url;
    }

}