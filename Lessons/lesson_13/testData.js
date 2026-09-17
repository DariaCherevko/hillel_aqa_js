import { faker } from '@faker-js/faker';

export const EXISTING_USER_ID = 1;

export const DEFAULT_LIMIT = 10;

export const buildNewUser = () => ({
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	age: faker.number.int({ min: 18, max: 65 }),
	email: faker.internet.email(),
});
