const form =document.getElementById('form');
const firstName =document.getElementById('fname');
const lastName =document.getElementById('lname');
const email =document.getElementById('email');
const passWord =document.getElementById('password');
const cpassWord =document.getElementById('cpassword');
const fnameErr=document.querySelector('.fname-err');
const lnameErr=document.querySelector('.lname-err');
const emailErr=document.querySelector('.email-err');
const passwordErr=document.querySelector('.password-err');
const cpasswordErr=document.querySelector('.cpassword-err');
const checkBox =document.getElementById('cebox');
const loader=document.getElementById('loader');
const eyeOne=document.getElementById('eye');
const eyeTwo=document.getElementById('eye2');



//password-visibiliity
eyeOne.addEventListener('click', function(){
    if(passWord.type==='password'){
        passWord.setAttribute('type','text');
    }

    else{
        passWord.setAttribute('type','password');
    }
});

//confirm-password-visibiliity
eyeTwo.addEventListener('click', function(){
    if(cpassWord.type==='password'){
        cpassWord.setAttribute('type','text');
    }

    else{
        cpassWord.setAttribute('type','password');
    }
});


//checkbox-validation
checkBox.addEventListener('input',function (){
    if(checkBox.checked){
        document.getElementById('btn').style.opacity='1';
        document.getElementById('btn').removeAttribute('disabled');  
    }
    else{
        document.getElementById('btn').style.opacity='0.5';
        document.getElementById('btn').setAttribute('disabled','disabled'); 
    }
});

//form validation
form.addEventListener('submit',(e)=>{

    e.preventDefault();

    setTimeout(checkInputs,6000);

});


function checkInputs(){
//get the values
 const fnameValue=firstName.value.trim(); 
 const lnameValue=lastName.value.trim();
 const emailValue=email.value.trim(); 
 const passwordValue=passWord.value.trim(); 
 const cpassword=cpassWord.value.trim();
 const mailformat=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 fnameValidate(fnameValue);
 lnameValidate(lnameValue);
 emailValidate(emailValue,mailformat);
 passwordValidate(passwordValue);
 cpasswordValidate(cpassword,passwordValue);
 
}


//firstname
const fnameValidate=(inputs)=>{
    if(inputs===''||inputs.match(/[0-9]/g)){
        displayErr(fnameErr,'input name and  remove number');
    }
    else{
        displaySuccess(fnameErr,'successful');
    }
};


//lastname
const lnameValidate=(inputs)=>{
    if(inputs===''||inputs.match(/[0-9]/g)){
        displayErr(lnameErr,'input name and  remove number');
    }
    else{
        displaySuccess(lnameErr,'successful');
    }
};

//email
const emailValidate=(inputs,regXp)=>{
    if(inputs.match(regXp)){
        displaySuccess(emailErr,'successful');   
    }
    
    else{
        displayErr(emailErr,'check email');
    }
};


//password 
const passwordValidate=(inputs)=>{

    if(inputs===''|| inputs.length < 8){
        displayErr(passwordErr,'max characters must be 8 or more.');  
    }
    
    else{
        displaySuccess(passwordErr,'successful'); 
    }
};


//confirm password
const cpasswordValidate=(inputs,inputs2)=>{

    if(inputs===''||inputs!==inputs2){
        displayErr(cpasswordErr,'must match the password above.');  
    }
    
    else{
        displaySuccess(cpasswordErr,'successful'); 
    }
};

//error message display
const displayErr=(input,message)=>{
    input.innerHTML=message;
    input.style.color='red';
    eyeOne.style.bottom='38px';
    eyeTwo.style.bottom='38px';

};

//success display message
const displaySuccess=(input,message)=>{
    input.innerHTML=message;
    input.style.color='green';
    eyeOne.style.bottom='38px';
    eyeTwo.style.bottom='38px';
};