const express = require('express');
const router = express.Router();

const games = require('./games');
const users = require('./users');
const posts = require('./posts');
const platforms = require('./platforms');
const admin = require('./admin');
const me = require('./me');

router.use(async (req, res, next) => {
    const auth_token = req.headers['authorization'];
    try {
        if (!auth_token) {
            throw { status: 400, code: "AUTHENTICATION_REQUIRED", message: "Authentication token required" };
        }
        const [rows] = await pool.query(`SELECT 1 FROM authorization WHERE token = ?`, [auth_token]);
        if (rows.length === 0)
            throw { status: 401, code: "AUTHENTICATION_FAILED", message: 'Invalid authentication token'};
        next();
    } catch (err) {
        next(err);
    }
})

router.use('/games', games);
router.use('/users', users);
router.use('/posts', posts);
router.use('/platforms', platforms);
router.use('/admin', admin);
router.use('/me', me);

module.exports = router;

/**
 * @apiDefine HEADERS_AUTHENTICATION
 * @apiHeader {String} Authorization Authentication token
 * @apiError AUTHENTICATION_FAILED Invalid authentication token
 * @apiError AUTHENTICATION_REQUIRED Authentication token is required
 * @apiErrorExample AUTHENTICATION_FAILED:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "code": "AUTHENTICATION_FAILED",
 *          "message": "Invalid authentication token"
 *      }
 * @apiErrorExample AUTHENTICATION_REQUIRED:
 *      HTTP/1.1 400 Bad Request
 *      {
 *          "code": "AUTHENTICATION_REQUIRED",
 *          "message": "Authentication token is required"
 *      }
 */

/**
 * @apiDefine HEADERS_AUTHORIZATION
 * @apiHeader {String} x-access-token Authorization token
 * @apiError AUTHORIZATION_FAILED Invalid authorization token
 * @apiError AUTHORIZATION_REQUIRED Authorization token is required
 * @apiErrorExample AUTHORIZATION_FAILED:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "code": "AUTHORIZATION_FAILED",
 *          "message": "Not enough or too many segments"
 *      }
 * @apiErrorExample AUTHORIZATION_REQUIRED:
 *      HTTP/1.1 400 Bad Request
 *      {
 *          "code": "AUTHORIZATION_REQUIRED",
 *          "message": "Authorization token is required"
 *      }
 */

/**
 * @apiDefine SUCCESS_GAME
 * @apiSuccess {Object} game
 * @apiSuccess {Number} game.id The ID of this game
 * @apiSuccess {String} game.title Title of this game
 * @apiSuccess {String} game.developer Developer of this game
 * @apiSuccess {String} game.publisher Publisher of this game
 * @apiSuccessExample Success-response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 13,
 *          "title": "maple story"
 *      }
 */

/**
 * @apiDefine ERROR_USER_NOT_FOUND
 * @apiError USER_NOT_FOUND The ID of the User was not found
 * @apiErrorExample Error-response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message": "User not found"
 *      }
 */

/**
 * @apiDefine ERROR_GAME_NOT_FOUND
 * @apiError GAME_NOT_FOUND The ID of the Game was not found
 * @apiErrorExample Error-response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message": "Game not found"
 *      }
 */

/**
 * @apiDefine ERROR_COMMENT_NOT_FOUND
 * @apiError ERROR_COMMENT_NOT_FOUND The ID of the Comment was not found
 * @apiErrorExample Error-response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message": "Comment not found"
 *      }
 */

/**
 * @apiDefine ERROR_POST_NOT_FOUND
 * @apiError POST_NOT_FOUND The ID of the Post was not found
 * @apiErrorExample Error-response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message": "Post not found"
 *      }
 */

 /**
  * @apiDefine SUCCESS_EMPTY
  * @apiSuccessExample SUCCESS:
 *      HTTP/1.1 204 No Content
 *      {
 *          
 *      }
  */

/**
 * @apiDefine QUERY_LIMIT
 * @apiParam {Number} query.limit Limit the number of items returned
 */

/**
 * @apiDefine QUERY_OFFSET
 * @apiParam {Number} query.offset Decide the start index of items returned
 */

/**
 * @apiDefine SUCCESS_GAME_COMMENTS_SIMPLE
 * @apiSuccess {Json[]} comments
 * @apiSuccess {Json} comment
 * @apiSuccess {Number} comment.id The ID of the comment
 * @apiSuccess {String} comment.value Content of the comment
 * @apiSuccessExample Success:
 *      HTTP/1.1 200 OK
 *      {
            "comments": [
                {
                    "id": 81,
                    "game_id": 43
                    "value": "This game is awesome!"
                }
            ]
        }
 */

/**
 * @apiDefine SUCCESS_POST_COMMENTS_SIMPLE
 * @apiSuccess {Json[]} comments
 * @apiSuccess {Json} comment
 * @apiSuccess {Number} comment.id The ID of the comment
 * @apiSuccess {String} comment.value Content of the comment
 * @apiSuccessExample Success:
 *      HTTP/1.1 200 OK
 *      {
            "comments": [
                {
                    "id": 81,
                    "post_id": 23
                    "value": "I like this post"
                }
            ]
        }
 */