import { getPosts, getPostById, createPost, createComment } from '../api/apiClient.js';
import {
	TOTAL_POSTS,
	POSTS_PER_USER,
	EXISTING_POST_ID,
	EXISTING_USER_ID,
	NEW_POST_ID,
	NEW_COMMENT_ID,
	buildNewPost,
	buildNewComment,
} from '../testData.js';

describe('JSONPlaceholder API', () => {
	test('GET /posts returns the full list of posts', async () => {
		const response = await getPosts();

		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(response.data).toHaveLength(TOTAL_POSTS);
		expect(response.data[0]).toHaveProperty('userId');
		expect(response.data[0]).toHaveProperty('id');
		expect(response.data[0]).toHaveProperty('title');
		expect(response.data[0]).toHaveProperty('body');
	});

	test('GET /posts/id returns the requested post', async () => {
		const response = await getPostById(EXISTING_POST_ID);

		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('id', EXISTING_POST_ID);
		expect(response.data).toHaveProperty('userId');
		expect(response.data).toHaveProperty('title');
		expect(response.data).toHaveProperty('body');
	});

	test('GET /posts?userId=id returns only the posts of that user', async () => {
		const response = await getPosts({ userId: EXISTING_USER_ID });

		expect(response.status).toBe(200);
		expect(response.data).toHaveLength(POSTS_PER_USER);
		expect(response.data.every((post) => post.userId === EXISTING_USER_ID)).toBe(true);
	});

	test('POST /posts creates a new post', async () => {
		const newPost = buildNewPost();

		const response = await createPost(newPost);

		expect(response.status).toBe(201);
		expect(response.data).toHaveProperty('id', NEW_POST_ID);
		expect(response.data).toHaveProperty('title', newPost.title);
		expect(response.data).toHaveProperty('body', newPost.body);
		expect(response.data).toHaveProperty('userId', newPost.userId);
	});

	test('POST /comments creates a new comment', async () => {
		const newComment = buildNewComment();

		const response = await createComment(newComment);

		expect(response.status).toBe(201);
		expect(response.data).toHaveProperty('id', NEW_COMMENT_ID);
		expect(response.data).toHaveProperty('postId', newComment.postId);
		expect(response.data).toHaveProperty('name', newComment.name);
		expect(response.data).toHaveProperty('email', newComment.email);
		expect(response.data).toHaveProperty('body', newComment.body);
	});
});
