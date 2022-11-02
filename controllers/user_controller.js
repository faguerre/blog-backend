const userService = require('../services/user_logic')
const logger = require('../common/logger')

module.exports.getById = async function (req, res) {
    try {
        const user_result = await userService.getById(req.params.id)
        if (user_result['data']) {
            res.json({ 'data': user_result.data, 'status': 'OK', 'code': user_result.code })
        } else {
            res.status = 400
            res.json({ 'message': user_result['message'], 'status': 'OK', 'code': user_result.code })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const users = await userService.get()
        res.json({ 'data': users, 'status': 'success', 'code': 200 })
        logger.info({ 'data': users, 'status': 'success', 'code': 200 })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.createUser = async function (req, res) {
    try {
        const user = await userService.add(req.body)
        res.json({ 'data': user, 'status': 'success', 'code': 200 })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports.addPost = async function (req, res) {
    try {
        let user_id = req.params.id
        const user_result = await userService.addPost(req.body, user_id)
        if (user_result['data']) {
            res.json({ 'data': user_result.data, 'status': 'success', 'code': user_result.code })
        } else {
            res.json({ 'message': user_result.message, 'status': 'error', 'code': user_result.code })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
