var nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'https://mentally-ee47e.web.app/'}));

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({ original: original });
    // Send back a message that we've successfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');

    let appEmail = 'mentally.app.team@gmail.com';
    let emailPassword = 'PandaHacks2021';

    //let body = req.body;
    // const contactEmail = body.email;
    // const name = body.name;

    const contactEmail = req.query.email ? req.query.email : 'bconradt@wisc.edu';
    const name = req.query.name ? req.query.name : 'Bailey';

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: appEmail,
            pass: emailPassword
        }
    });

    var mailOptions = {
        from: appEmail,
        to: contactEmail,
        subject: 'Just checking in',
        text: 'Hey ' + name + ', \n\nJust checking in to see how you\'re doing. Feel free to email me back when you get a chance! <3'
    };

    function sendEmail() {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ result: 'Email sent: ' + info.response })
            }
        });
    }

    sendEmail();

});