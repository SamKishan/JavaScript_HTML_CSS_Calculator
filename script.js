var oneBtn=document.getElementById("calc-one");
var twoBtn=document.getElementById("calc-two");
var threeBtn=document.getElementById("calc-three");
var fourBtn=document.getElementById("calc-four");
var fiveBtn=document.getElementById("calc-five");
var sixBtn=document.getElementById("calc-six");
var sevenBtn=document.getElementById("calc-seven");
var eightBtn=document.getElementById("calc-eight");
var nineBtn=document.getElementById("calc-nine");
var zeroBtn=document.getElementById("calc-zero");
var decimalBtn=document.getElementById("calc-decimal");
var clearBtn=document.getElementById("calc-clear");
var backspaceBtn=document.getElementById("calc-backspace");
var displayValElement=document.getElementById("calc-display-val");


var calcNumBtns=document.getElementsByClassName("calc-num");
var calcOperatorBtns=document.getElementsByClassName("calc-operator");

var displayVal = '0';
var pendingVal;

var evalStringArray = []; // "5+4=" to be passed into eval function 
var check=0;

var updateDisplayVal = (clickObj) => {
    // if(check==1){
    //     displayVal='0';
    //     displayValElement.innerText=displayVal;
    //     // break;
    // }
    var btnText = clickObj.target.innerText;
    if(displayVal==='0'){
        displayVal='';     
    }
    displayVal+=btnText;
    displayValElement.innerText=displayVal;

}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;
    displayValElement.innerText+=operator;
    console.log('In here');
    switch(operator) {
        case '+': 
                console.log("Addition");
                pendingVal=displayVal;
                displayVal='0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('+');
                break;

        case '-':
                console.log("Subtraction");
                pendingVal=displayVal;
                displayVal='0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('-');
                break;
        case 'x':
                console.log("Multiplication");
                pendingVal=displayVal;
                displayVal='0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('*');
                break;
        case '÷':
                console.log("Division");
                pendingVal=displayVal;
                displayVal='0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('/');
                break;
        case "=":
                
                console.log("equals")
                console.log("displayVal= " + displayVal);
                evalStringArray.push(displayVal.substring(0,displayVal.length));
                console.log(evalStringArray);
                var evaluation = eval(evalStringArray.join(' '));  
                console.log(evaluation);
                displayVal=evaluation +'';
                displayVal= displayVal.substring(0,displayVal.length);
                console.log('Here');
                console.log(displayVal);
                displayValElement.innerText='0';
                displayValElement.innerText=displayVal;
                evalStringArray=[];
                check=1;
                break;


    }
}

for (let i =0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click',updateDisplayVal,false);
}

for (let i =0; i <calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click',performOperation, false);
}

var clearScreen = (clickObj) => {
    displayVal='0';
    pendingVal= undefined;
    evalStringArray=[];
    displayValElement.innerText=displayVal;
}

var backSpaceFunc = (clickObj) => {
    if(displayVal.length>1){
        displayVal=displayVal.substring(0,displayVal.length-1);
        displayValElement.innerText=displayVal;
    }
    else if(displayVal!='0'){
        displayVal='0';
        displayValElement.innerText=displayVal;
    }
}


decimalBtn.onclick = (clickObj) => {
    var dec = clickObj.target.innerText;
    if(!displayVal.includes('.')){
        displayVal+= dec;
        displayValElement.innerText=displayVal;
    }
}
clearBtn.addEventListener('click', clearScreen,false);
backspaceBtn.addEventListener('click',backSpaceFunc,false);

