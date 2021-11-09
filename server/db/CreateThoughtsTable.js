//import aws-sdk package
const AWS = require('aws-sdk');

//AWS config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

//DynamoDB service object
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//creating params object
const params = {
    TableName: "Thoughts",
    KeySchema: [
        //keys indicate properties and values indicate the schema
        { AttributeName: "username", KeyType: "HASH" }, //partition key
        { AttributeName: "createdAt", KeyType: "RANGE" } //sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "username", AttributeType: "S" },
        { AttributeName: "createdAt", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};