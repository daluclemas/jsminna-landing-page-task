let form=document.getElementById('form')
let inputcheck=document.querySelector("input.input4");
let butn=document.querySelector('.btn');
let passwordValidate=document.getElementById('password');
let emailValidate=document.getElementById('email');
let spanText=document.querySelector('.password-err');
let emailText=document.querySelector('.email-err');
let eye=document.getElementById('eye');


//password-visibiliity
eye.addEventListener('click', function(){
    if(passwordValidate.type==='password'){
        passwordValidate.setAttribute('type','text');
    }

    else{
        passwordValidate.setAttribute('type','password');
    }
});
    
console.log(passwordValidate.type)

//checkbox validation
inputcheck.addEventListener('input', function(){
    if(inputcheck.checked){
        btn.removeAttribute('disabled');
        butn.style.opacity='1';
    }

    else{
        btn.setAttribute('disabled','disabled');
        butn.style.opacity='0.5';
    }
});


form.addEventListener('submit',function(e){

    e.preventDefault();

    setTimeout(checkInputs,6000);

});

function checkInputs(){
    let checkPassword=passwordValidate.value.trim();
    let checkEmail=emailValidate.value.trim();
    let mailformat=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    passwordValid(checkPassword);
    emailValid(checkEmail,mailformat);
}

//password
const passwordValid=(input)=>{
    if(input===''||input.length < 8){
        errCheck(spanText,'min-characters is 8')
    }

    else{
        successCheck(spanText,'successful')
    }
};

//email
const emailValid=(input,item)=>{

    if(input.match(item)){
        successCheck(emailText,'successful');
    }

    else{
        errCheck(emailText,'check email');
    }
};

//errmesage
const errCheck=(item,message)=>{
    item.innerHTML=message;
    item.style.color='red';
}

//success
const successCheck=(item,message)=>{
    item.innerHTML=message;
    item.style.color='green';
}




