

// assigns a variable to first p
//changes text to goodbye
const hello = document.querySelector('p')

hello.textContent = "Goodbye!"


console.log(hello.textContent)


//assigns variable to second p
//changes p text

const main = document.getElementsByTagName("main")[0]

const secondChild = main.children[1]

const p = secondChild.getElementsByTagName("p")[0]

p.textContent = "go away"

console.log(p.textContent)

//assigns variable to third p
//changes p text

const thirdChild = main.children[2]

const p3 = thirdChild.getElementsByTagName("p")[0]

p3.textContent = "hey now hello heloo"

console.log(p3.textContent)

//messing around 


function addImage(img_url){
    let img = document.querySelector('img')
    img.src = img_url
}

addImage ("https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")

const cat = document.getElementsByTagName("img")

console.log(cat)