const firstArea = document.querySelector('.first__box');
const secondArea = document.querySelector('.second__box');
const newContent = document.querySelector('.main__content')


let stack = [];

firstArea.addEventListener('click', e => {
    e.target.remove()
    stack.push(e.target)
    console.log(stack);

})

secondArea.addEventListener('click', e => {
    let i = stack.shift()
    newContent.appendChild(i)
})