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
  console.log('ID: ' + JSON.stringify(logData.id));
  console.log('Resource Type: ' + JSON.stringify(logData.resourceType));

  const theServer =
    process.env.FHIR_SERVER + '/' + logData.resourceType + '/' + logData.id;
  console.log('The PUT request will be sent here: ' + theServer);
}

theData();
