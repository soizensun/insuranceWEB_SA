const express = require('express');
const app = express();
const admin = require('firebase-admin');
let FieldValue = require('firebase-admin').firestore.FieldValue;


// open port 5000
app.listen(5000, () => console.log('---- welcome to post 5000 Main server ----'))

// initialize firestore
let serviceAccount = require('./saproject-a5c49-firebase-adminsdk-ihvjg-2ad01e812e.json');
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
let db = admin.firestore();

const datas = [
    {
        first: 'Kitpavin',
        last: 'chaiwong',
        born: 15101997,
        timestamp: FieldValue.serverTimestamp()
    },
    {
        first: 'firstName2',
        last: 'lastName2',
        born: 01112014,
        timestamp: FieldValue.serverTimestamp()
    },
    {
        first: 'firatNmame3',
        last: 'lastName3',
        born: 11051998,
        timestamp: FieldValue.serverTimestamp(),
    },
    {
        first: 'firatNmame4',
        last: 'lastName4',
        born: 11051998,
        timestamp: FieldValue.serverTimestamp(),
    },
    {
        first: 'firatNmame5',
        last: 'lastName5',
        born: 11051995,
        timestamp: FieldValue.serverTimestamp(),
    }
]
// let setAda = db.collection('test').add(data);

app.get('/addDatabase', (res, req) => {
    datas.map(data => {
        db.collection('test').add(data)
    })
    console.log("----------------- test database --------------");
    
})



