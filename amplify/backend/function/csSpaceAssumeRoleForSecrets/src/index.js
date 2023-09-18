

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');

exports.handler = async (event) => {
    // Create an STS (Security Token Service) client
    const sts = new AWS.STS();
    const headers = {
        "Access-Control-Allow-Origin": "*", // Replace with your allowed origins
        "Access-Control-Allow-Headers": "Content-Type,Authorization", // Add required headers
        "Access-Control-Allow-Methods": "GET, POST", // Specify allowed HTTP methods
    };

    try {
        // Specify the ARN of the role to assume
        const roleToAssumeArn = 'arn:aws:iam::077080245453:role/RoleToRetrieveSecretAtRuntime';

        // Define the parameters for assuming the role
        const params = {
            RoleArn: roleToAssumeArn,
            RoleSessionName: 'AssumedRoleSession', // Specify a session name
        };

        // Assume the role
        const assumedRole = await sts.assumeRole(params).promise();

        // Extract temporary credentials from the response
        const credentials = assumedRole.Credentials;

        // Return the temporary credentials in the response
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                AccessKeyId: credentials.AccessKeyId,
                SecretAccessKey: credentials.SecretAccessKey,
                SessionToken: credentials.SessionToken,
            }),
        };
    } catch (error) {
        console.error('Error assuming role:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Error assuming role'),
        };
    }
};
