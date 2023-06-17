var axios = require('axios');
require('dotenv').config({ path: __dirname + '/.env' });

async function theData() {
  const theLink = process.env.FHIR_PROFILE;
  console.log(theLink);
  const theData = await axios.get(theLink);

  const key = 'text';
  const logData = theData.data;
  delete logData[key];
  console.log(JSON.stringify(logData));
  console.log(JSON.stringify(logData.id));
  console.log(JSON.stringify(logData.resourceType));
  console.log(
    JSON.stringify(server + '/' + logData.id + '/' + logData.resourceType)
  );

  const theServer =
    process.env.FHIR_SERVER + '/' + logData.resourceType + '/' + logData.id;
  console.log(theServer);
  const theProfilePost = await axios.put(theLink, logData);
  console.log(theProfilePost.data);
}

theData();
