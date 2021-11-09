//import aws-sdk package
const AWS = require('aws-sdk');

//AWS config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

//DynamoDB service object
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

