This project is to be used to create & update FHIR Profiles on a targeted FHIR Server.

It will fetch the JSON definition of the Profile and PUT the resource on the designated FHIR Server.

The poroject uses the .env file to designate the Profile link & the target Server the profile should be created/updated.

(It will create the Profile by the Profile's original id parameter)

(This version removes the "text" element from the Profile)

Directions:

- npm i
- adjust .env file according to your needs & target Server
- Multiple profiles can be updated/created simultaneously. They can be included in the .env variable FHIR_PROFILE separated by comma (with no additional spaces, see example contained). The code will execute for each link included in this environment variable.

Then Run:

node read-profile.js to read the targeted profile in console.

or Run:

node put-profile.js to create/update the FHIR Profile on the FHIR Server.

\*Note: This was originally created with the creation of FHIR Profiles in mind. However, this can be used with/for any collection of FIHR resources. Since the projecct operates dynamically off of the Resource Type and ID, so long as the link provided returns a JSON definition of the targeted resource, the code will place that resource on the targeted server.

\*Note: To run with the text element included in the Resource. Run the version of the files eding with "-with-text.js"

\*\*XML Version upcoming in furture releases
