const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const setup = async () => {
  try {
    const res = await getSecrets();
    fs.mkdir(path.join(__dirname, "../configg"), (err) => {
      if (err) {
        return console.error(err);
      }

      fs.writeFileSync(path.join(__dirname, "../configg/a.json"), res, (err) => {
        if (err) {
          return console.log(`Error in  writeFileSync. Error: s${err}`);
        }
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          // console.log(fs.readFileSync("books.txt", "utf8"));
        }
      });
    });
    const file = await fs.writeFile("../configg/credebtials.json");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

const getSecrets = async () => {
  const secret_name = "node-app-1";

  const client = new SecretsManagerClient({
    region: "ap-south-1"
  });

  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    throw error;
  }

  const secret = response.SecretString;
  return secret;

  // Your code goes here
};

module.exports = {
  setup,
};
