let carMonth = document.getElementsByTagName('input')[0];
let carPrice = document.getElementsByTagName('input')[1];
let  workers= document.getElementsByTagName('input')[2];
let  salary= document.getElementsByTagName('input')[3];
let  ownerSalary= document.getElementsByTagName('input')[4];
let  buhSalary= document.getElementsByTagName('input')[5];
let  period= document.getElementsByTagName('input')[6];
let  price= document.getElementsByTagName('input')[7];
let inputs = document.getElementsByTagName('input')




let calc = document.getElementsByClassName('calc')[0]
let newCalc = document.getElementsByClassName('newCalc')[0]
let car, spends, revenue, factoryCost;

let h1 = document.getElementsByTagName('h1')[0]

newCalc.onclick= function(){
    h1.innerHTML='Директор построит новый завод?'
    for(let i of inputs){
        i.value='';
    }    
}

calc.onclick = function(){

    // let input0A = parseInt(input0.value)
    // let input1A = parseInt(input1.value)
    // let input2A = parseInt(input2.value)
    // let input3A = parseInt(input3.value)
    // let input4A = parseInt(input4.value)
    // let input5A = parseInt(input5.value)

    car= carMonth.value*carPrice.value;
    spends = workers.value*salary.value+parseInt(ownerSalary.value)+parseInt(buhSalary.value);
    revenue = (car - spends)*period.value;
    if(revenue>price.value){
        h1.innerHTML = "Отлично! Нам построят новый завод";

    }
    else{
        h1.innerHTML = "К сожалению, придётся усерднее трудиться на старом!";

    }

}

