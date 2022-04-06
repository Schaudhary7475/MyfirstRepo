// let screen = document.getElementById('screen');
// divs = document.querySelectorAll('div');
// let screenValue = '';
// for (item of divs) {
//     item.addEventListener('click', (e) => {
//         divText = e.target.innerText;
//         console.log('div text is ', divText);
//         if (divText == 'X') {
//             divText = '*';
//             screenValue += divText;
//             screen.value = screenValue;
//         }
//         else if (divText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (divText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += divText;
//             screen.value = screenValue;
//         }

//     })
// }
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e)=>{
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'C':
                display.innerText= '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try { 
                    display.innerText = eval(display.innerText) ;
                    
                } catch{
                    alert("Error!")
                    display.innerText = '';
                }
                break;

            default:
                display.innerText += e.target.innerText;
                
            }
    })
});
// console.log(btn);

