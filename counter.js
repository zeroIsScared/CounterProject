const minusButton= document.querySelector("#minus");
const plusBUtton= document.querySelector("#plus");
console.log(minus);
console.log(plus);

const counter=document.querySelector("label");
let counterValue= counter.innerText;

const counterIncrease= function (){

counterValue++;
counter.innerText= counterValue;

}

const counterDecrease= function(){

    if(counterValue > 0){
        counterValue--;
        counter.innerText = counterValue;
      }
        
}

minusButton.addEventListener("click", counterDecrease);
plusBUtton.addEventListener("click", counterIncrease);