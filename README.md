This project is to be used to create & update FHIR Resources on a targeted FHIR Server.

It will fetch the JSON definition of the Resources and update/create the resource on the designated FHIR Server.

The poroject uses the .env file to designate the Resource Links & the Target FHIR Server the resources should be created/updated.

(This version removes the "text" element from the Resource)

Initial Set Up (from root):

- npm i
- edit The Environment Variables file (root/.env) according to your needs & targeted FHIR Server
- Include all target FHIR Resource Links within the FHIR_RESOURCES Environment Variable, separated by comma (with no additional spaces, see example contained).
- The code will execute for each link included in this environment variable.

Directions for use:

_npm run readResources_ to read all targeted FHIR resources in console.

_npm run putResources_ to update all targeted FHIR resources on the target FHIR Server. This will create the resources if they do not already exist on the server, by the Original ID. (PUT Request, does not maintain original Resource ID)

_npm run postResources_ to create all targeted FHIR resources on the target FHIR Server. (POST Request, does not maintain original Resource ID)

\*Note: If original Resource IDs must be carried over to the target server, use _npm run putResources_

\*Note: This was originally created with the creation of FHIR Profiles in mind. However, this can be used with/for any collection of FIHR resources. Since the projecct operates dynamically off of the Resource Type and ID, so long as the link provided returns a JSON definition of the targeted resource, the code will place that resource on the targeted server.

\*Note: To run with the text element included in the Resource. Run _npm run putResourcesWithText_ or _npm run postResourcesWithText_

\*\*XML Version upcoming in furture releases
