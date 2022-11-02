const commentService = require('../services/comments_logic')
const logger = require('../common/logger')

module.exports.getById = async function (req, res) {
    try {
        const comment_result = await commentService.getById(req.params.id)
        if (comment_result['data']) {
            res.json({ 'data': comment_result['data'], 'status': 'success', 'code': 200 })
        } else {
            res.status = 400
            res.json({ 'message': comment_result['message'], 'status': 'OK', 'code': 400 })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const comments = await commentService.get()
        res.json({ 'data': comments, 'status': 'success', 'code': 200 })
        logger.info({ 'data': comments, 'status': 'success', 'code': 200 })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.createComment = async function (req, res) {
    try {
        const comment = await commentService.add(req.body)
        res.json({ 'data': comment, 'status': 'success', 'code': 200 })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.deleteComment = async function (req, res) {
    try {
        let idcomment = req.params.id;
        const comment = await commentService.remove(idcomment)
        res.json({ 'data': comment, 'status': 'success', 'code': 200 })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
