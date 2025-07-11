const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
require('dotenv').config();
const {onDocumentCreated} = require('firebase-functions/firestore');
const {Resend} = require("resend")

// Resend Email API key
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

exports.sendEnquireEmail = onDocumentCreated("/enquire/{docId}", async(event)=>{
    // Getting Enquire data from firestore
    const data = event?.data?.data();
    
    try{
        const result = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "kphetla24.kp@gmail.com",
            subject: `New Enquiry from ${data.fullName}: ${data.subject}`,
            html:`<h2>New Enquiry Received</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Contact:</strong> ${data.contactNumber}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong>${data.message}</p>`
        });
        console.log("Enquiry sent:", result)
    } catch(error){
        console.error(error)
    }
})