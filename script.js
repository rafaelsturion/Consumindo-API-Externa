// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app")

let posts = []

function nutriApp(){
    fetch ("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r)=> r.json()) 
    .then((json)=>{
        posts = json
        posts.map((item)=>{
            let li = document.createElement("li")
            let titleElement = document.createElement("strong")
            let imgElement = document.createElement("img")
            let descriptionElement = document.createElement("a")

            let titleText = document.createTextNode(item.titulo)
            titleElement.appendChild(titleText)
            li.appendChild(titleElement)
            imgElement.src = item.capa
            li.appendChild(imgElement)

            let descriptionText = document.createTextNode(item.subtitulo)

            descriptionElement.appendChild(descriptionText)

            li.appendChild(descriptionElement)

            listElement.appendChild(li)
        })
        console.log(posts)
    })
    //fetch é uma função que faz requisições http, e o que vem depois é a url
    
    .catch(()=>{
        console.log("Erro ao carregar os dados")
    }) //captura o erro
}

nutriApp()