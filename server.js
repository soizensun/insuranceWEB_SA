const express = require('express');
const app = express();
const admin = require('firebase-admin');

// open port 5000
app.listen(5000, () => console.log('service run in port 5000'))

// initialize firestore
let serviceAccount = require('./saproject-a5c49-firebase-adminsdk-ihvjg-2ad01e812e.json');
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
let db = admin.firestore();

app.get('/test', (req, res) => {
    const user = [ 
        {id: 1, name: "kitpavin", lastname: "chaiwong"},
        {id: 2, name: "kitpavin", lastname: "chaiwong"}
    ];
    res.json(user);
    res.send(user);
});

const data = {  
    first: 'asdf',
    last: 'asdf',
    born: 1815
}
let setAda = db.collection('test').add(data);



