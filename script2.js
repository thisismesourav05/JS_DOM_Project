

let div = null;



//1. Create/call onload handaler
window.onload = () => {
    main();
}

function main() {
    //3. collect all nacessary referances
    const root = document.getElementById('root');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy');

    //4.1 handel the Button click event
    button.addEventListener('click', function () {
        var changeRGB = hexCodeGenerate();
        root.style.backgroundColor = changeRGB;
        output.value = changeRGB;
    })

    //4.2 handel the Copy click event
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        if (div !== null) {
            div.remove()
            div = null;
        }
        generateToastMsg(`Hurrah! you have successfully copied color code ${output.value}`);
    })
}

//2. random Hex color generator function
function hexCodeGenerate() {
    let hex = "0123456789ABCDEF";
    let count ='#'

    for (let i = 0; i < 6; i++) {
        count += hex[Math.floor(Math.random()*16)];
    }
    
    return count;
}

//5. code to show the toast message
function generateToastMsg(msg) {
    div = document.createElement('div');
    div.innerHTML = msg;
    div.className ='toast-msg toast-msg-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-msg-slide-in');
        div.classList.add('toast-msg-slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        })  
    })


    document.body.appendChild(div);
}