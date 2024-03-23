// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// //Use cors to allow external messsages
// const cors = require('cors');

// // Middleware to enable CORS
// // Fix cors issue by only including methods i used in my backend code!
// // app.use(cors(
// //   {
// //     origin: "https://jayceturambe.vercel.app",
// //     methods: ["POST", "PUT"],
// //     credentials: true
// //   }
// // ));


// // ***************************************************** 
// // *** main http request handler.  All requests will ***
// // *** start here, and get sent to a specific        ***
// // *** handler based on the http method              ***
// // ***************************************************** 

// function handle_req (req,res,body) {
//   try {
//     console.log(`handle_req ${req.method} request`);

//     // Add CORS headers.  I hate CORS
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // I added this to include the necessary headers

//     // Handle OPTIONS requests (preflight)
//     if (req.method === 'OPTIONS') {
//       res.writeHead(200);
//       res.end();
//       return;
//     }

//     if (req.method === "GET"   ) handle_get(req,res);
//     if (req.method === "POST"  ) handle_post(req,res,body);
//     if (req.method === "PUT"   ) handle_put(req,res,body);
//     if (req.method === "PATCH" ) handle_patch(req,res,body);
//     if (req.method === "DELETE") handle_delete(req,res);
//   }
//   catch (error) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.statusCode = 500;   //server error
//     res.write(error);
//   }
//   finally { res.end(); }
// }

// // Create a SMTP transporter
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'jturambe@gmail.com',
//         pass: 'zuwp ouzg lhzy trxd'
//     }
// });

// // Route to handle form submission
// app.post('/submit-form', (req, res) => {
//     const formData = req.body;

//     // Compose email message
//     const mailOptions = {
//         from: formData.email,
//         to: 'jturambe@gmail.com', // your email address
//         subject: `New Message from ${formData.name}`,
//         text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.json({ success: false });
//         } else {
//             console.log('Email sent:', info.response);
//             res.json({ success: true });
//         }
//     });
// });

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to handle CORS headers

// Create a SMTP transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'jturambe@gmail.com',
        pass: 'zuwp ouzg lhzy trxd'
    }
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Compose email message
    const mailOptions = {
        from: formData.email,
        to: 'jturambe@gmail.com', // your email address
        subject: `New Message from ${formData.name}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false }); // Set status code and return JSON response
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true }); // Return success response
        }
    });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


