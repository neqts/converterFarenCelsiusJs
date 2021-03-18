const conv = document.querySelector('.conv')
const reset = document.querySelector('.reset');
const zamien = document.querySelector('.change');
const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const one = document.querySelector('.one')
const two = document.querySelector('.two')


let farenhait
let celsius




const swap  = () => {
    if(one.innerHTML==="°C"){
        one.innerHTML="°F"
        two.innerHTML="°C"
    }else{
        one.innerHTML="°C"
        two.innerHTML="°F"
    }
}



const celsToFar = () =>{
farenhait = converter.value*1.8+32
result.innerHTML=`${converter.value} °C is ${farenhait.toFixed(1)} °F`


}



const FarToCels = () =>{
    farenhait = (converter.value-32) /1.8
    result.innerHTML=`${converter.value} °F is ${farenhait.toFixed(1)} °C`
    
    }


const test = () =>{
if(converter.value !== ""){
    if(one.innerHTML==="°C"){
        celsToFar()
    }else{
        
        FarToCels()
    }

}else{
    result.innerHTML= "Provide number"
}

}

const res = () => {
    result.innerHTML=""
    converter.value=""
}

reset.addEventListener('click',res)
conv.addEventListener('click', test)
zamien.addEventListener('click', swap)








