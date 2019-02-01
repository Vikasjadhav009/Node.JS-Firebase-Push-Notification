
var FCM = require('fcm-node');

var fcmServerKey = 'YOUR_FCM_SERVER_KEY';

var fcm = new FCM(fcmServerKey);

var message = {
    to: 'DEVICE_TOKEN_OF_DEVICE_WHICH_RECIVE NOTIFICATION',
    
    notification: {
        title: 'Hello World',
        body: 'This is body of push notification!!',
    },

   //this is optional where you can share media option  
    data: {
        "image": "http://Image-Link/icon.jpeg",
        "message": "Firebase Push Message Using API",
        "AnotherActivity": "True"
    }
};

fcm.send(message, function (err, response) {
    if (err) {
        // error response
        console.log(err);
    } else {
        // sucess response 
        console.log("Successfully sent with response: ", response);
    }
});