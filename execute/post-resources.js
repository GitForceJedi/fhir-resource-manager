var axios = require('axios');
require('dotenv').config({ path: '.env' });

const resourceLinkArray = process.env.FHIR_PROFILE.split(',');
console.log(resourceLinkArray);

let resourceCount = 1;

async function postResources(resourceLink) {
  const requestedData = await axios.get(resourceLink);

  const key = 'text';
  const keyId = 'id';
  const fetchedData = requestedData.data;
  const keyIdValue = fetchedData.id;
  const resourceType = fetchedData.resourceType;

  delete fetchedData[key];
  delete fetchedData[keyId];
  //console.log(JSON.stringify(fetchedData));

  console.log('Resource Type: ' + resourceType);
  console.log('Original ID: ' + keyIdValue);

  const theServerLink = process.env.FHIR_SERVER + '/' + resourceType;
  console.log('The POST request will be sent here: ' + theServerLink);

  const theResourcePost = await axios.post(theServerLink, fetchedData);
  const resourceData = theResourcePost.data;
  console.log(
    'RESOURCE #' +
      resourceCount +
      ' ( ' +
      resourceType +
      '/' +
      keyIdValue +
      ' )' +
      ' , ( Status Code: ' +
      theResourcePost.status +
      ' )'
  );
  resourceCount++;
  if (theResourcePost.status == 201) {
    console.log(
      'This resource was successfully created. It can be found at ' +
        theServerLink +
        '/' +
        resourceData.resourceType +
        '/' +
        resourceData.id
    );
  } else if (theResourcePost.status == 200) {
    console.log('This resource was updated instead of created.');
  } else {
    console.log(
      'This resource was not created nor updated. An error of ' +
        theResourcePost.status +
        'was received.'
    );
  }
}

resourceLinkArray.forEach((resourceLink) => postResources(resourceLink));
