let count = 0;

counter = document.getElementById('counter');

function inc(){
    if(count<10)
        count++;
    else 
        alert("Count can't be more than 10");
    counter.innerText = count;
}

function dec(){
    if(count>0)
        count--;
    else 
        alert("Count can't be negative");
    counter.innerText = count;
}

function getIncButtonElement() {
    const button = document.getElementById('increment');
    return button;
}

function getDecButtonElement() {
    const button = document.getElementById('decrement');
    return button;
}

getIncButtonElement().addEventListener('click', inc);
getDecButtonElement().addEventListener('click', dec);

console.log(count);