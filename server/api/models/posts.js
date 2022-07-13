// const { resolve } = require('path')
const { init } = require('../dbConfig')
const { ObjectId } = require('mongodb')


class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.story = data.story
        this.date = data.date
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const postData = await db.collection('post').find().toArray()
                // console.log("*******************")
                // console.log(postData)
                // console.log("*******************")
                const posts = postData.map(p => new Post({...p, id: p._id}))
                // if (!posts.length) {throw new Error("No posts here")}
                resolve(posts)
            } catch (err) {
                reject(`Error retrieving posts`)
            }
        }) 
    };
    
    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('post').find({ _id: ObjectId(id) }).toArray()
                let post = new Dog({...postData[0], id: postData[0]._id});
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static async create(title, name, story, date) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                let postData = await db.collection('post').insertOne({ title, name, story, date})
                let newPost = new Post(postData.ops[0])
                resolve(newPost)
            } catch (err) {
                reject(`Error creating posts`)
            }
        })
    }
}

module.exports = Post
