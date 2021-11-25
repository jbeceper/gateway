const { gql } = require('apollo-server');

const authTypeDefs = gql`
    input LoginInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        password2: String!
        balance: Int!
    }


    type Token {
        key: String!
    } 

    type Mutation{
        logIn(credentials: LoginInput!): Token!
        signUp(signupData:SignUpInput!):Token!
    }

`;

module.exports=authTypeDefs;