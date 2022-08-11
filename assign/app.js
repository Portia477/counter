
// let count = 0
// count = count + 1
// console.log(count)
const p = document.querySelector('p');
const Increase = document.querySelector('.Increase')
const Reset = document.querySelector('.Reset')
const Decrease = document.querySelector('.Decrease')

let value = 0;

function Increment(){
    value += 1; 
    p.textContent= value;
    p.style.color = 'black';
}
Increase.addEventListener('click',Increment);

function Decrement(){
    value -= 1;
    p.textContent = value;
    p.style.color = 'red';
}
Decrease.addEventListener('click',Decrement);

function Restart(){
    value = 0;
    p.textContent = value;
    p.style.color = 'blue';
}
Reset.addEventListener('click',Restart);
