const inputs = document.getElementsByClassName('formulario__input');
const submit = document.getElementById('submit')
const form = document.getElementById('my-form')
const error = document.getElementById('validate')
let validateForm = false;

for (let i= 0; i< inputs.length; i++){

inputs[i].addEventListener('keyup', function(){


    if(this.value.length>=1){
        inputs[i].nextElementSibling.classList.add('fijar')
    } else {
        inputs[i].nextElementSibling.classList.remove('fijar')
    }


});
}

submit.addEventListener("click", function(){
 
    for(let i= 0; i< inputs.length; i++){

        let sum = [];

        sum.push(inputs[i].value.length);

        if(sum.includes(0)){
            validateForm = false;
            
            }else {
          
                validateForm = true;
            }
            
             
    }
    

    if(validateForm === false){
        error.classList.add('validate-visible')

    } else{
        error.classList.remove('validate-visible')
    }
    

})

form.onsubmit = function () {
    return validateForm;
}
