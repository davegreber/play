
    
//  cosnt hello =  document.querySelector('p'))

//  console.log(hello)


// assigns a variable to first p
//changes text to goodbye
const hello = document.querySelector('p')

hello.textContent = "Goodbye!"


//assigns variable to second p
//changes p text

const main = document.getElementsByTagName("main")[0]

const secondChild = main.children[1]

const p = secondChild.getElementsByTagName("p")[0]

p.textContent = "go away"

console.log(p)

//assigns variable to third p
//changes p text

const thirdChild = main.children[2]

const p3 = thirdChild.getElementsByTagName("p")[0]

p3.textContent = "I like you"

console.log(p3)

