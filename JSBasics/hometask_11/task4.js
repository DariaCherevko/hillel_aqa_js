class UserApiClient {
    _baseURL = "https://jsonplaceholder.typicode.com";

    async getUserById(id) {
        const response = await fetch(`${this._baseURL}/users/${id}`);

        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.status}`);
        }

        return await response.json();
    }
}
class ToDoApiClient {
    _baseURL = "https://jsonplaceholder.typicode.com";

    async getToDoById(id) {
        const response = await fetch(`${this._baseURL}/todos/${id}`);

        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.status}`);
        }

        return await response.json();
    }
}

///

const toDoApiClient = new ToDoApiClient();
const userApiClient = new UserApiClient();

const toDo = await toDoApiClient.getToDoById(1);
const user = await userApiClient.getUserById(1);

console.log("Get ToDo by Id:", toDo);
console.log("Get User by Id:", user);