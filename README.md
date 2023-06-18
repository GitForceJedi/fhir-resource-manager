This project is to be used to create & update FHIR Profiles on a targeted FHIR Server.

It will fetch the JSON definition of the Profile and PUT the resource on the designated FHIR Server.

The poroject uses the .env file to designate the Profile link & the target Server the profile should be created/updated.

(It will create the Profile by the Profile's original id parameter)

(This version removes the "text" element from the Profile)

Directions:

- npm i

Then Run:

node read-profile.js to read the targeted profile in console.

or

node put-profile.js to create/update the FHIR Profile on the FHIR Server.
