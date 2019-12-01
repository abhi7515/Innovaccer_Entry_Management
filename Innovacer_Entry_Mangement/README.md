## Innovaccer Entry Management WebApp

### Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Routes Used](#routes)



### Overview
---
This app was developed as a part of SDE internship assignment at Innnovaccer, using NodeJS,MongoDB, ExpressJS, AWS SES for emails and AWS SNS for Mobile Messages,
according to the [specs](https://summergeeks.in/static/assignments/summergeeks%202020%20-%20SDE%20Assignment.pdf), this assumes the following,
There is a fixed table of Hosts/Employees and they are each mapped with a 3 letter unique String denoting their HostId/EmployeeId.

* Everytime a visitor comes to the center, they enter their details along with the HostID and then,
    * Visitor recieves confirmation and address to the host's office
    * Host recieves information about the Visitor
    * Database is updated with information to reflect changes
    

    
### Setup
---
Before proceeding please download and install [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center/community) because it is required.



1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,
    `sh setup.sh`
    
    
#### Note: This app uses AWS credentials for sending Email and SMS notifications, please setup the config.json file in the repository, else sending notifications won't be possible.
    
Now everything required should be installed, go ahead and run the following command whenever you want to run the app,
`node app.js`
##### The App would be Up and Running on localhost:3000
    

### Routes
---

| Route  | Description | Signature |
| ------------- | ------------- | ------------- |
| /checkIn |(post) Creates a new Guest Visit Entry in MongoDB | Body: { `hostID`, `guestName`, `guestPhone`, `guestEmail`, `desc`} |
| /checkOut |(post) Deletes the  Guest Visit Entry in MongoDB  | Body: { `name`, `address`} |

