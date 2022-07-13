db = connect("mongodb://localhost:27017/telegraph")

db.post.drop()

db.post.insertMany([
    {
        id: 1,
        title: "hello",
        name: "taro",
        story: "if you go down to the woods today",
        date: "7 / 7 / 2012"
    },
    {
        id: 2,
        title: "goodbye",
        name: "saamiya",
        story: "nice to meet, you, please come again",
        date: "7 / 7 / 2012"
    },
    {
        id: 3,
        title: "welcome back",
        name: "nova",
        story: "my name is nova, short for supernova",
        date: "7 / 7 / 2012"
    }
]) 
