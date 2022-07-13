const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts')

router.get('/', posts.allPosts)
router.get('/:id', posts.showPosts)
router.post('/', posts.createPost)

module.exports = router;
