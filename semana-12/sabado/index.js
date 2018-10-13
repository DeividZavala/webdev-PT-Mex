const p1 = User.findById(asdasdasd);
const p2 = Post.find({author: user._id})
const p3 = Comment.find({post: post._id})

User.findById(asdasdasd)
.then(user => {
    Post.find({author: user._id})
    .then(post => {
        Comment.find({post: post._id})
    })
})

const [user, post, comments] = Promise.all([p1,p2,p3]);