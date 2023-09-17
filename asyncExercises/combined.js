const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
]

const fetchUserTodos = async (endpoints) => {
    const result = [];
    for(const url of endpoints) {
        result.push(fetch(url))
    }
    const [prom1, prom2] = await Promise.all(result)
    const users = await prom1.json()
    console.log(users.length)
    // console.log(users)
    const todos = await prom2.json()
    // console.log(todos)
    // the todo has to be in the same user with matching id

    // for(const user of users) {
    //     console.log(user)
    // }
    // for(const todo of todos) {
    //     console.log(todo)
    // }

    let usersWithTodos = {};
    // iterate through the todos array and group them with id:

    todos.forEach(todo => {
        const userId = todo.userId;
        if(!usersWithTodos[userId]) {
            usersWithTodos = {
                todos: [],
                ...users.find(user => user.id === userId),
            }
        }
        usersWithTodos[userId].todos.push(todo.title)
    })
    console.log(usersWithTodos)
}

fetchUserTodos(urls)