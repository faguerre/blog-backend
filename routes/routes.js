module.exports.Routes = async function () {
    const router = require('express').Router()
    const post_controller = require('../controllers/post_controller')
    const comment_controller = require('../controllers/comment_controller')
    const user_controller = require('../controllers/user_controller')

    //posts
    router.get('/posts', post_controller.getAll)
    router.post('/posts', post_controller.createPost) // add post
    router.get('/posts/:id', post_controller.getById) // get post
    router.post('/posts/:id/comments', post_controller.addComment) //add comment to post OK

    //comments
    router.get('/comments', comment_controller.getAll)
    router.post('/comments', comment_controller.createComment)
    router.get('/comments/:id', comment_controller.getById)
    router.delete('/comments/:id', comment_controller.deleteComment)


    //users
    router.get('/users', user_controller.getAll)
    router.post('/users', user_controller.createUser)
    router.get('/users/:id', user_controller.getById)
    router.post('/users/:id/post', user_controller.addPost) // add posts to a user


    return router;
}