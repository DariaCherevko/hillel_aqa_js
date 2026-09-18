import { faker } from '@faker-js/faker';

export const TOTAL_POSTS = 100;

export const POSTS_PER_USER = 10;

export const EXISTING_POST_ID = 1;

export const EXISTING_USER_ID = 1;

export const NEW_POST_ID = 101;

export const NEW_COMMENT_ID = 501;

export const buildNewPost = () => ({
	title: faker.lorem.sentence(),
	body: faker.lorem.paragraph(),
	userId: EXISTING_USER_ID,
});

export const buildNewComment = () => ({
	postId: EXISTING_POST_ID,
	name: faker.lorem.words(3),
	email: faker.internet.email(),
	body: faker.lorem.sentences(2),
});
