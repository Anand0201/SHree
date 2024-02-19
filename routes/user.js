const { userschema } = require("../models/user");
const express = require("express");
const router = express.Router();
const { name } = require("ejs");
router.use(express.json());

router.get('/', (req, res) => {
    res.render("register");
});
   
router.get('/quiz' , (req, res) => {
   res.render("exam");
});



router.get('/admin', async (req, res) => {
  const data = await userschema.find();
  res.render( "admin",{ data } );
})

router.post("/register", async (req, res) => {

  const user = new userschema({
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

router.post("/score", async (req, res) => {
  const id = req.session.userid;
  const { score } = req.body;
  const examcore = score;
  const update = { $set: { examscore: examcore } };
  await userschema.findByIdAndUpdate(id, update)
  .then(updatedDocument => {
    console.log('Document updated successfully:', updatedDocument);
  })
  .catch(error => {
    console.error('Error updating document:', error);
  });
  console.log(examcore);
})
// router.use((req,res)=>{
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userschema.findOne({ email });

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