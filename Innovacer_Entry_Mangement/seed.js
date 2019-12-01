//Seed data for Hosts
// ==========================================================
var mongoose=require("mongoose");
var Host=require("./models/host");
var data=[
  { name:"Abhinav Shukla",
    email:"abhinavshukla1177@gmail.com",
    phone:9680848822,
    address:"Bh3 lnmiit",
    hostId:"AAA"
    },
];



function seedDB(){
   //Remove all hosts
   Host.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Hosts!");
         //add a few Hosts
        data.forEach(function(seed){
            Host.create(seed, function(err, Host){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a Host");
                }
            });
        });
    }); 
}
	module.exports= seedDB;