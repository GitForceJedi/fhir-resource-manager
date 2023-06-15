var axios = require('axios');

var server = 'https://theserver.com';

async function theData() {
  var theData = await axios.get(
    'http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/StructureDefinition-SDOHCC-Condition.json'
  );

  var key = 'text';
  var logData = theData.data;
  delete logData[key]; // Removes json.foo from the dictiona
  console.log(JSON.stringify(logData));
  console.log(JSON.stringify(logData.id));
  console.log(JSON.stringify(logData.resourceType));
  console.log(
    JSON.stringify(server + '/' + logData.id + '/' + logData.resourceType)
  );
}

theData();
