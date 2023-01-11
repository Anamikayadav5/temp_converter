const converter = document.querySelector('#Convert');
const C = document.querySelector('.C');
const F = document.querySelector('.F');
const result  = document.querySelector('.res');
const convertbtn = document.querySelector('.Cnvrtbtn');
const resetbtn = document.querySelector('.resetbtn');
const changebtn = document.querySelector('chngbtn');


const chng = ()=>{
    if(C.innerHTML === '°C')
{
    C.innerHTML = '°F';
    F.innerHTML = '°C';
    converter.placeholder = 'Temperature in °F';
}
else{
    F.innerHTML = '°F';
    C.innerHTML = '°C';
    converter.placeholder = 'Temperature in °C';

}
}


const convert = () =>{
    if(/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)){
        result.style.color = 'Red';
    if(C.innerHTML === '°C'){
        let value = (converter.value * 1.8) +32;
        result.innerHTML = `${converter.value}°C is equal to ${value.toFixed(2)}°F`;

    }
    else{
        let value = (converter.value -32) /1.8;
        result.innerHTML =`${converter.value}°F is equal to ${value.toFixed(2)}°C`;
    }}
    else if(converter.value==''){
        result.style.color = 'blue';
        result.innerHTML = "Enter some number";
    }
    else{
        result.style.color = 'green';
        result.innerHTML = "Enter Only numbers!!";
    }
}
const reset = () =>{
    converter.value = '';
    result.innerHTML = '';
}

changebtn.addEventListener('click',chng);
resetbtn.addEventListener('click',reset);
convertbtn.addEventListener('click',convert);