var axios = require('axios');
require('dotenv').config({ path: __dirname + '/.env' });

const profileLinkArray = process.env.FHIR_PROFILE.split(',');
console.log(profileLinkArray);

async function theData(profileLink) {
  const theData = await axios.get(profileLink);

  const key = 'text';
  const logData = theData.data;
  delete logData[key];
  //console.log(JSON.stringify(logData));
  console.log('ID: ' + JSON.stringify(logData.id));
  console.log('Resource Type: ' + JSON.stringify(logData.resourceType));

  const theServerLink =
    process.env.FHIR_SERVER + '/' + logData.resourceType + '/' + logData.id;
  console.log('The PUT request will be sent here: ' + theServerLink);
}

profileLinkArray.forEach((profileLink) => theData(profileLink));
