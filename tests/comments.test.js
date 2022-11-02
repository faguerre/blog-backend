const comment_service = require("../services/comments_logic");
const repository = require("../repository/repository");
const CommentModel = require('../models/comment')
const mockingoose = require('mockingoose');

beforeAll(async () => await repository.initRepository());

describe('Comment Services', () => {
    describe("fetchComments", () => {
        it('should return a list of comments', async () => {
            const comments = await comment_service.get();
            // console.log(comments, "comments")
            expect(comments.message).toBe('OK');
        })
    })

    //exception
    // describe("fetchCommentsException", () => {
    //     it('should return an exception', async () => {
    //         await repository.closeDataBase();
    //         const comments = await comment_service.get();
    //         // const t = () => {
    //         //     throw new Error();
    //         // };
    //         expect(comments).toThrow(Error)
    //     })
    // })

    //mocking example
    describe('fetchComment', () => {
        it('should return a comment', async () => {
            mockingoose(CommentModel).toReturn(
                {
                    name: 'Comment1',
                    email: 'comment@gmail.com',
                    body: "This is a comment created for test",
                }, 'findOne');
            const result = await comment_service.getById(1);
            console.log(result)
            expect(result.data.name).toBe('Comment1');
        });
    });
})