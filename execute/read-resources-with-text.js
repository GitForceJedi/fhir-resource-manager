var axios = require('axios');
require('dotenv').config({ path: '.env' });

const profileLinkArray = process.env.FHIR_PROFILE.split(',');
console.log(profileLinkArray);

async function readResources(profileLink) {
  const requestedData = await axios.get(profileLink);

  const fetchedData = requestedData.data;
  //console.log(JSON.stringify(fetchedData));
  console.log('ID: ' + JSON.stringify(fetchedData.id));
  console.log('Resource Type: ' + JSON.stringify(fetchedData.resourceType));

  const theServerLink =
    process.env.FHIR_SERVER +
    '/' +
    fetchedData.resourceType +
    '/' +
    fetchedData.id;
  console.log('The PUT request will be sent here: ' + theServerLink);
}

profileLinkArray.forEach((profileLink) => readResources(profileLink));
