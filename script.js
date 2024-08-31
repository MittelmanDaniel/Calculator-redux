function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}


function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b
}



function operator(a,b,operate){
    a = Number(a)

    b = Number(b)
    
    console.log(a)
    console.log(b)
    if(operate === '+'){
        return add(a,b)
    }
    if(operate === '-'){
        return subtract(a,b)
    }
    if(operate === '*'){
        return multiply(a,b)
    }
    if(operate === '/'){
        return divide(a,b)
    }
}


const display = document.querySelector('#display')

let calc_buffer = []

let ready_overwrite_display = true

function is_op(){

    return calc_buffer.length == 2  && ['+','-','/','*'].includes(calc_buffer[1])
}

function numPress(event){
    let newChar = event.target.innerText

    console.log(newChar)

    if(ready_overwrite_display){
        display.innerText = newChar
        ready_overwrite_display = false
    }
    else{
        display.innerText += newChar
    }
}

function do_calc(){
    if(calc_buffer.length >=3){
        let val = operator(calc_buffer[0], calc_buffer[2], calc_buffer[1])

        calc_buffer.splice(0,3,val)
    }
    
}

function get_last_num(){

    if(calc_buffer.length>2){
        return calc_buffer[2]
    }
    else{
        return calc_buffer[0]
    }
    
}




function opPress(event){
    
    op = event.target.innerText


    
    console.log(op)

    calc_buffer.push(display.innerText, op)


    do_calc()

    display.innerText = get_last_num()

    ready_overwrite_display = true
    
}

function eqPress(event){
    calc_buffer.push(display.innerText)
    
    do_calc()

    display.innerText = get_last_num()

    ready_overwrite_display = true
}



function clear(event){
    calc_buffer = []
    display.innerText = '0'

}


const buttonContainer = document.querySelector('#buttonContainer')
for(let i = 0;i<=9;i++){
    const button = document.createElement('button');
    
    // Set the button's text content to the current number
    button.textContent = i;
    button.addEventListener('click', numPress)
    // Append the button to the div
    buttonContainer.appendChild(button);
}

const op_buttons = document.querySelectorAll('.op')

op_buttons.forEach(button => {
    button.addEventListener("click", opPress);
});


const eq_butt = document.querySelector('#eq');

eq_butt.addEventListener('click', eqPress)

const clear_butt = document.querySelector('#clear')

clear_butt.addEventListener('click', clear)

