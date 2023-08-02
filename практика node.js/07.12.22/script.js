let div = document.querySelector("#div")

const draw = async () =>{
   let responce = await fetch('http://localhost:8080/')
   let data = await responce.json()
   console.log(responce)
//    div.innerHTML += `<h1>${data[0]}</h1>`
   
}
draw()