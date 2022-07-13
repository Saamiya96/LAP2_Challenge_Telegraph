// const express = require('express')
// const router = express.Router()

// const Post = require('../models/posts')

// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.all
//         res.status(200).json(posts)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ err })

//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id)
//         res.status(200).json(post)
//     } catch (err) {
//         res.status(404).json({ err })
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         const post = await Post.create(req.body.title, req.body.name, req.body.story, req.body.date)
//         res.status(201).json(post)
//     } catch (err) {
//         res.status(404).json({ err })
//     }
// })

// module.exports = router;


// const { Router } = require('express')
// const express = require('express')
const Post = require('../models/posts')

async function allPosts (req, res) {
    try {
        const posts = await Post.all
        res.status(200).json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}

async function createPost (req, res) {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.story, req.body.date)
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function showPosts (req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200),json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = { allPosts, createPost, showPosts }

