const express = require('express');
const app = express();
const admin = require('firebase-admin');
let FieldValue = require('firebase-admin').firestore.FieldValue;


// open port 5000
app.listen(5000, () => console.log('service run in port 5000'))

// initialize firestore
let serviceAccount = require('./saproject-a5c49-firebase-adminsdk-ihvjg-2ad01e812e.json');
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
let db = admin.firestore();

// app.get('/test', (req, res) => {
//     const user = [ 
//         {id: 1, name: "kitpavin", lastname: "chaiwong"},
//         {id: 2, name: "kitpavin", lastname: "chaiwong"}
//     ];
//     res.json(user);
// });

const data = 
{  
    first: 'test1',
    last: 'test1',
    born: 1234
}


const datas = [
    {
        first: 'test1',
        last: 'test1',
        born: 1111,
        timestamp: FieldValue.serverTimestamp()
    },
    {
        first: 'test2',
        last: 'test2',
        born: 2222,
        timestamp: FieldValue.serverTimestamp()
    },
    {
        first: 'test3',
        last: 'test',
        born: 3333,
        // startTime : new admin.Timestamp(42, 0),
        timestamp: FieldValue.serverTimestamp(),
    },
]
// let setAda = db.collection('test').add(data);

app.get('/addDatabase', (res, req) => {
    datas.map(data => {
        db.collection('test').add(data)
    })
    
    
})



