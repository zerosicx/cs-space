// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import { getCredentialsUrl } from "./config";
import { Auth } from 'aws-amplify';

export const getSecretAPIKey = async () => {
    const secret_name = "csspace/theMuseAPIKey";

    const credentials = await getCredentials()
        .then((result) => {
            return result;
        })
        .catch((error) => {
            // Handle errors here
            console.error("API Error:", error);
        });

    if (!credentials) {
        return "";
    }

    const client = new SecretsManagerClient({
        region: "us-east-1",
        credentials: {
            accessKeyId: credentials.AccessKeyId,
            secretAccessKey: credentials.SecretAccessKey,
            sessionToken: credentials.SessionToken
        }
    })
    

    const response = await client.send(
        new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        }))
    

    const value = response.SecretString ? JSON.parse(response.SecretString) : "";
    return value.theMuseAPIKey;
}

async function getCredentials() {

    try {
        const credentials = sendAuthenticatedGetRequest(getCredentialsUrl);

        return credentials;
    } catch (e) {
        console.log("Error:", e);
    }
}

async function getJWTToken() {
    // Inside an async function
    let token;
    try {
        const user = await Auth.currentAuthenticatedUser();
        const jwt = user.signInUserSession?.idToken?.jwtToken;
        token = jwt;
    } catch (error) {
        console.log("Error retrieving JWT Token:", error);
    }
    return token;
}

export async function sendAuthenticatedGetRequest(url: string){
    let token = await getJWTToken();
    const authorizationToken = "Bearer " + token;

    const data = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: authorizationToken ? authorizationToken : ""
            }
        })
            .then((response) => response.json())
            .then((data) => {
            return data;
        });
    return data;
}
