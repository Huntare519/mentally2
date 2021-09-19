var nodemailer = require('nodemailer');
const functions = require('firebase-functions');

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

    let appEmail = 'mentally.app.team@gmail.com';
    let emailPassword = 'PandaHacks2021';

    //const message = req.query.text;

    // const passwordResult = await admin.firestore.collection('superSecretPassword').onSnapshot((snapshot) => {
    //     const password = snapshot.docs.sort().map((doc) => ({
    //         id: doc.id,
    //         ...doc.data()
    //     }));
    //     emailPassword = password[0].password;
    // })

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: appEmail,
            pass: emailPassword
        }
    });

    var mailOptions = {
        from: appEmail,
        to: 'bconradt@wisc.edu',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
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