var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BAUA_kAe3rJBRq0JEO8gOLuy6VvHcWzE8LpMSQ3QTKp8wRot3emw9FufZnJpnhVzkS1sAiugMDUNlgTvB5xrY6Y",
    "privateKey" : "EvaQK8T54_ypSMWkYa__mT1JtJlhY7H1ujWWuAtpnc8"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint" : "https://fcm.googleapis.com/fcm/send/eZAh6PYGzaE:APA91bHTd2vkaQsL9V_tf6g6b0AS5xD5UP2bBebao7oJYjo1fyBHTCc60unGoN9KBrxGWOVnQtgR6VpMwDKUilaHYT3HauH7IjeDbv_CdKzthOgnOrbZ76kjsRGSKDeX6VUEoUCidfKG",
    "keys" : {
        "p256dh" : "BHHZYPJkWAWH5kPZw297HSIx8RYp+WB+/pnAnpsZ8VIQpNIoRvasdUHtUv6STw9kCtn7nPtJ7VwEzkacCOuhx3o=",
        "auth" : "dbsqmMXZxrXsDSyT3EPKGw=="
    }
};

var payload = 'Push Berhasil';
var options = {
    gcmAPIKey : '473576422517',
    TTL : 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);