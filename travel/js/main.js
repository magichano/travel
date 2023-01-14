(function () {
/* BURGER MENU */
    const burger=document.querySelector('.menuu');
    const nav=document.querySelector('.nav');
    const cross=document.querySelector('.crosss');

    burger.addEventListener('click', () => {
        nav.classList.add('nav_active');
    });
    
    cross.addEventListener('click', () => {
        nav.classList.remove('nav_active');
    });
/* BURGER MENU */



/* POPUP OPEN */

let login=document.getElementById('Login');
let account=document.querySelector('.nav-itemm');
let ppbckgrnd=document.querySelector('.popUpBackground');

login.addEventListener('click', () => {
    ppbckgrnd.classList.add('visible') ;
})

account.addEventListener('click', () => {
    ppbckgrnd.classList.add('visible') ;
})

/* POPUP OPEN */



/* POPUP CLOSE */

ppbckgrnd.addEventListener('click', (event) => {
    //console.log(event);

    if (event.target.classList.contains('popUpBackground')){
        if (document.documentElement.clientWidth > 414){
            ppbckgrnd.classList.remove('visible');
            dontHaveAcc.classList.remove('hidden');
            toRemove.classList.remove('hidden');
            dontHaveAccText.innerHTML="Don’t have an account?";
            register.innerHTML="Register";
            popUpH1Text.innerHTML='Log in to your account';
            popUpLogin.style.height= 660+ "px";
            popUpInputs.style.margin= "10px";
            emailInput.value='';
            passwordInput.value='';
    } else {
            ppbckgrnd.classList.remove('visible');
            dontHaveAcc.classList.remove('hidden');
            toRemove.classList.remove('hidden');
            dontHaveAccText.innerHTML="Don’t have an account?";
            register.innerHTML="Register";
            popUpH1Text.innerHTML='Log in to your account';
            popUpInputs.style.margin= "10px";
            emailInput.value='';
            passwordInput.value='';
            popUpLogin.style.height= 500+ "px";
    }
}
})
/* POPUP CLOSE */



/* FROM LOGIN TO SIGN UP MOVEMENT */
let popUpLogin=document.querySelector('.popUpLogin');
let popUpH1Text=document.querySelector('.popUpH1Text');
let toRemove=document.querySelector('.toRemove');
let register = document.getElementById('popUpRefAcc');
let dontHaveAcc= document.getElementById('popUpRefPassword');
let dontHaveAccText=document.querySelector('.dontHaveAccText');
let popUpInputs=document.querySelector('.popUpInputs');
let facebook=document.getElementById('facebook');


register.addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 414){
        if (register.innerHTML=='Register'){
        popUpLogin.style.height= 436+ "px";
        popUpH1Text.innerHTML='Create account';
        toRemove.classList.add('hidden');
        dontHaveAcc.classList.add('hidden');
        dontHaveAccText.innerHTML="Already have an account?";
        register.innerHTML="Log in";
        popUpInputs.style.margin= "30px";
        emailInput.value='';
        passwordInput.value='';
    } else{
        dontHaveAcc.classList.remove('hidden') ;
        toRemove.classList.remove('hidden');
        dontHaveAccText.innerHTML="Don’t have an account?";
        register.innerHTML="Register";
        popUpH1Text.innerHTML='Log in to your account';
        popUpLogin.style.height= 660+ "px";
        popUpInputs.style.margin= "10px";
        emailInput.value='';
        passwordInput.value='';
    }
} else{
    if (register.innerHTML=='Register'){
        popUpLogin.style.height= 350+ "px";
        popUpH1Text.innerHTML='Create account';
        toRemove.classList.add('hidden');
        facebook.classList.add('hidden');
        dontHaveAcc.classList.add('hidden');
        dontHaveAccText.innerHTML="Already have an account?";
        register.innerHTML="Log in";
        emailInput.value='';
        passwordInput.value='';
    } else{
        dontHaveAcc.classList.remove('hidden');
        toRemove.classList.remove('hidden');
        dontHaveAccText.innerHTML="Don’t have an account?";
        register.innerHTML="Register";
        popUpH1Text.innerHTML='Log in to your account';
        popUpLogin.style.height= 500+ "px";
        popUpInputs.style.margin= "10px";
        emailInput.value='';
        passwordInput.value='';
    }
}
})
/* FROM LOGIN TO SIGN UP MOVEMENT */



/* ALERT INPUTS */

let signIn=document.getElementById('signIn');
let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');

signIn.addEventListener('click', () =>{
    alert(emailInput.value + '\n' + passwordInput.value);
    //console.log(document.documentElement.clientWidth);
})

/* ALERT INPUTS */



/* SLIDER */

let imagesForSlider=document.querySelector('.pdImgContainers');
let slider=[];
let leftPoint=document.querySelector('.leftPoint');
let centerPoint=document.querySelector('.centerPoint');
let rightPoint=document.querySelector('.rightPoint');
let k=1;
let pdImgContainer1=document.querySelector('.pdImgContainer1');
let pdImgContainer2=document.querySelector('.pdImgContainer2');
let pdImgContainer3=document.querySelector('.pdImgContainer3');



for (let i = 0; i <= 5; i++) {
    if (i % 2!==0) {
        slider.push(imagesForSlider.childNodes[i]);
    }
  }

  //console.log(slider);

  leftPoint.addEventListener('click', () =>{
    if (k==1){
        pdImgContainer1.classList.add('translateLeftPoint64');
        pdImgContainer2.classList.add('translateLeftPoint64');
        pdImgContainer3.classList.add('translateLeftPoint64');

        pdImgContainer1.classList.remove('translateLeftPoint64');
        pdImgContainer2.classList.remove('translateLeftPoint64');
        pdImgContainer3.classList.remove('translateLeftPoint64');

        pdImgContainer1.classList.remove('translateLeftPoint64');
        pdImgContainer2.classList.remove('translateLeftPoint64');
        pdImgContainer3.classList.remove('translateLeftPoint64');


        k=0;
    } else if (k==2){
        pdImgContainer1.classList.add('translateLeftPoint128');
        pdImgContainer2.classList.add('translateLeftPoint128');
        pdImgContainer3.classList.add('translateLeftPoint128');
        k=0;
    }
})

    rightPoint.addEventListener('click', () =>{
        if (k==0){
            pdImgContainer1.classList.toggle('translateRightPoint128');
            pdImgContainer2.classList.toggle('translateRightPoint128');
            pdImgContainer3.classList.toggle('translateRightPoint128');
            k=2;
        } else if (k==1){
            pdImgContainer1.classList.toggle('translateRightPoint64');
            pdImgContainer3.classList.toggle('translateRightPoint64');
            pdImgContainer2.classList.toggle('translateRightPoint64');
        }
})

centerPoint.addEventListener('click', () =>{
    if (k==1){
        pdImgContainer1.classList.add('translateLeftPoint64');
        pdImgContainer2.classList.add('translateLeftPoint64');
        pdImgContainer3.classList.add('translateLeftPoint64');
        k=0;
    } else if (k==2){
        pdImgContainer1.classList.add('translateLeftPoint128');
        pdImgContainer2.classList.add('translateLeftPoint128');
        pdImgContainer3.classList.add('translateLeftPoint128');
    }
})

/*
for (let node of imagesForSlider.children){
    console.log(node);
}
*/

  

/* SLIDER */



}
());