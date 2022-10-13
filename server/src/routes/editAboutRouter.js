const express = require("express");
const router = express.Router();

const {
  editAbout,
  addBigPhoto,
  addNewPerson,
  delPerson,
  addContacts,
} = require("../controllers/editAboutControllers");


router
  .route("/")
  .put(editAbout)
  .post(addBigPhoto)

router
  .route("/addperson")
  .post(addNewPerson)

router
  .route("/delperson")
  .delete(delPerson)

router
  .route("/addcontacts")
  .post(addContacts)

module.exports = router;


