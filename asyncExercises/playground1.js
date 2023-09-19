const 
    container = document.getElementById('container'),
    button = document.getElementById('button');

button.addEventListener('click', () => {
    Promise.resolve().then(()=> console.log('A'))
    console.log('B')
})

container.addEventListener('click', ()=> console.log('C'))

button.click()