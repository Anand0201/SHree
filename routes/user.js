const { user1schema } = require("../models/user");
const express = require("express");
const router = express.Router();
const path = require('path');
const { PDFDocument, rgb } = require('pdf-lib');
const { name } = require("ejs");
const fs = require('fs');
router.use(express.json());

router.get('/', (req, res) => {
    res.render("register");
});
   
router.get('/quiz' , (req, res) => {
   res.render("exam2");
});

router.get('/admin', async (req, res) => {
  const data = await user1schema.find();
  res.render( "admin",{ data } );
})

router.post("/register", async (req, res) => {

  const user = new user1schema({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    institute: req.body.institute,
    interest: req.body.interest,
    hobby: req.body.hobby,
    grade: req.body.grade,
    });
    const new_user = await user.save()
    req.session.userid = new_user._id;
    res.redirect('/quiz');
    
});

// async function addNameToCertificate(name) {
 
//   // const outputFilename = `${name}-certificate.pdf`;
//   // const pdfPath123 = path.join(__dirname, `../public/images/${outputFilename}`);
//   // fs.writeFileSync(pdfPath123, pdfBytes);
// }

router.post("/score", async (req, res) => {
  const id = req.session.userid;
  const { score } = req.body;
  const examcore = score;
  const update = { $set: { examscore: examcore } };
  await user1schema.findByIdAndUpdate(id, update)
  .then(updatedDocument => {
    console.log('Document updated successfully:', updatedDocument);
  })
  .catch(error => {
    console.error('Error updating document:', error);
  });
  let name = '';

  try {
    const userinfo = await user1schema.findById(id);
    name = userinfo.name;
  } catch (error) {
    console.error('Error retrieving user name:', error);
    name = 'Unknown'; // Default to 'Unknown' if name retrieval fails
  }
  const pdfPath = path.join(__dirname, "../public/images/certificate.pdf");

  const existingPdfBytes = fs.readFileSync(pdfPath);
  console.log(existingPdfBytes); 

  // const existingPdfBytes = fs.readFileSync('images/certificate.pdf');
  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
  
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  
  firstPage.drawText(name, {
    x: 300, 
    y: 340, 
    size: 20,
    color: rgb(0, 0, 0),
  });
  
  const pdfBytes = await pdfDoc.save();
  res.writeHead(200, {
    'Content-Disposition': `attachment; filename="${name}-certificate.pdf"`,
    'Content-Type': 'application/pdf',
    'Content-Length': pdfBytes.length
  });

  res.end(pdfBytes);
  // const cerpath = path.join(__dirname, `../public/images/${userinfo.name}-certificate.pdf`);
  console.log(examcore);
})
// router.use((req,res)=>{
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await user1schema.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.redirect("/quiz");
    } else {
      res.status(400).send("password is wrong! ");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;