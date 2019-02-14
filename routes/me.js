const express = require('express');
const router = express.Router();
const jwt = require('../model/jwt');
const cert = require('../controller/certification')().user;

router.get('/', async (req, res, next) => {
    try {
        const user_id = await cert(req);
        const [[user]] = await pool.query(`SELECT name, email, birthday, introduce, gender, points FROM users WHERE id = ?`,[user_id]);
        if (!user)
            throw { status: 404, message: 'User not found' }
        const filename = jwt.encode({
            user_id: Number(user_id),
            object: 'profile'
        });
        user.profile = fs.existsSync(`uploads/${filename}.jpg`)?`api.gamepicker.co.kr/uploads/${filename}.jpg`:null;
        res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
});

router.put('/', async (req, res, next) => {
    const { introduce } = req.body;
    try {
        const user_id = await cert(req);
        await pool.query(`UPDATE users SET introduce = ? WHERE id = ?`,[introduce, user_id]);
        res.status(204).json();
    } catch (err) {
        next(err);
    }
});

const upload = require('../controller/upload');
router.post('/profile', upload.single('profile'), async (req, res, next) => {
    if (!req.file)
        res.status(400).send('File not found');
    else
        res.status(204).json();
});

router.delete('/profile', async (req, res, next) => {
    try {
        const user_id = await cert(req);
        const filename = jwt.encode({
            user_id,
            object: 'profile'
        })
        fs.unlinkSync(`uploads/${filename}.jpg`);
        res.status(204).json();
    } catch (err) {
        next(err);
    }
});

router.put('/password', async (req, res, next) => {
    const { password } = req.body;
    const encrypt = require('../controller/encrypt');
    try {
        const user_id = await cert(req);
        const {salt, hash} = await encrypt(password);
        await pool.query('UPDATE users SET salt = ?, password = ? WHERE user_id = ?', [hash, salt, user_id]);
        res.status(204).json();
    } catch (err) {
        next(err);
    }
});

module.exports = router;