const postService = require('../services/post_logic')

const logger = require('../common/logger')

module.exports.getById = async function (req, res) {
    try {
        const post_result = await postService.getById(req.params.id)
        if (post_result['data']) {
            res.json({ 'data': post_result.data, 'status': 'success', 'code': post_result.code })
        } else {
            res.status = 400
            res.json({ 'message': post_result['message'], 'status': 'OK', 'code': 400 })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const posts_result = await postService.get()
        res.json({ 'data': posts_result.data, 'status': 'success', 'code': posts_result.code })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.createPost = async function (req, res) {
    try {
        const post_result = await postService.add(req.body)
        res.json({ 'data': post_result.data, 'status': 'success', 'code': post_result.code })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.addComment = async function (req, res) {
    try {
        let post_id = req.params.id
        const comment_result = await postService.addComment(req.body, post_id)
        if (comment_result['message'] != '') {
            res.json({ 'data': comment_result.data, 'status': 'success', 'code': comment_result.code })
        } else {
            res.json({ 'message': comment_result.message, 'status': 'error', 'code': comment_result.code })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
