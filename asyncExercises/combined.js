const urls = [
    'https://jsonplaceholder.typicode.com/user',
    'https://jsonplaceholder.typicode.com/todos'
]

const fetchUserTodos = async (endpoints) => {
   try{
        const data = []
        for (url of endpoints) {
            const response = fetch(url)
            if((await response).status === 200) {
                data.push(response)
            } else {
                console.log(`the link : ${url} seems to be broken somehow - status = ${(await response).status}`)
            }
        }
        const [userResults, todosResults] = await Promise.all(data)
        const users = await userResults.json();
        const todos = await todosResults.json();

        users.map(el => (el.todos = todos.filter(todo => todo.userId === el.id)))

        return users
   } catch(err) {
        console.log('unexpected error occured today')
   }
}


fetchUserTodos(urls)
    .then((val) => console.log(val))
