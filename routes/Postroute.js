const express = require('express');
const {  goGear,getGear } = require('../controllers/PostController');
const router = express.Router();

// router.route('/').post(verifyUser,upload.single('photo'),uploadPost).get(verifyUser,getPost).put(verifyUser,editPost).delete(verifyUser, deletePost)
// router.route('/all').get(viewPost)

router.route('/').post(goGear).get(getGear)

module.exports = router;