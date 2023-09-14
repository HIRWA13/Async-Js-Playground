window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then((res) => res.json())
        .then((data) => {
            for(const el of data) {
                const div = document.createElement('div')
                const img = document.createElement('img')
                img.src = el.image
                img.height = "200"
                const h1 = document.createElement('h1')
                h1.textContent = el.name;
                div.appendChild(img)
                div.appendChild(h1)
                this.document.getElementById("root").appendChild(div)
            }
        })
})