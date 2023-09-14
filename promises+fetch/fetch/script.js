const getUsers = fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Junior",
    })
})

getUsers
    .then(res => {
       if(res.ok === true) {
              return res.json()
       } else {
                throw new Error('Something went wrong')
       }
    })
    .then(data => console.log(data))

