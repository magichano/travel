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
        dontHaveAcc.classList.remove('hidden');
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

let leftImage=document.querySelector('.pdImgContainer1');
let centerImage=document.querySelector('.pdImgContainer2');
let rightImage=document.querySelector('.pdImgContainer3');

let leftPoint=document.querySelector('.leftPoint');
let rightPoint=document.querySelector('.rightPoint');
let centerPoint=document.querySelector('.centerPoint');

let k=1;

let figures=document.querySelector('.figures');
/*
let pdImgContainer1=document.querySelector('.pdImgContainer1');
let pdImgContainer2=document.querySelector('.pdImgContainer2');
let pdImgContainer3=document.querySelector('.pdImgContainer3');
*/


for (let i = 0; i <= 5; i++) {
    if (i % 2!==0) {
        slider.push(imagesForSlider.childNodes[i]);
    }
  }

  console.log(k);



/* PRESS THE IMAGES*/
  leftImage.addEventListener('click', () =>{
    if (k==1){
        figures.classList.toggle('translateLeftImage64');

        leftPoint.classList.toggle('translateRightPoint150');
        centerPoint.classList.toggle('translateLeftPoint150');

        k=0;
    } else if (k==2){
        figures.classList.toggle('translateLeftImage64');
        figures.classList.remove('translateRightImage64');

       

        k=0;
    }
})

    centerImage.addEventListener('click', () =>{
        figures.classList.remove('translateLeftImage64');
        figures.classList.remove('translateRightImage64');
        
        if (k==0){
            leftPoint.classList.toggle('translateRightPoint150');
            centerPoint.classList.toggle('translateLeftPoint150');
        } else if (k==2){
            rightPoint.classList.toggle('translateLeftPoint150');
            centerPoint.classList.toggle('translateRightPoint150');
        }
       
        k=1;
    }
)

    rightImage.addEventListener('click', () =>{
    if (k==0){
        figures.classList.toggle('translateRightImage64');
        figures.classList.remove('translateLeftImage64');
        k=2;
    } else if (k==1){
        figures.classList.toggle('translateRightImage64');

        rightPoint.classList.toggle('translateLeftPoint150');
        centerPoint.classList.toggle('translateRightPoint150');

        k=2;
    }
})
/* PRESS THE IMAGES*/


/* PRESS THE POINTS*/
/* 
  leftPoint.addEventListener('click', () =>{
    if (k==1){
        figures.classList.toggle('translateLeftImage64');
        k=0;
    } else if (k==2){
        figures.classList.toggle('translateLeftImage64');
        figures.classList.remove('translateRightImage64');
        k=0;
    }
})

    centerPoint.addEventListener('click', () =>{
        figures.classList.remove('translateLeftImage64');
        figures.classList.remove('translateRightImage64');
        k=1;
    }
)

    rightPoint.addEventListener('click', () =>{
    if (k==0){
        figures.classList.toggle('translateRightImage64');
        figures.classList.remove('translateLeftImage64');
        k=2;
    } else if (k==1){
        figures.classList.toggle('translateRightImage64');
        k=2;
    }
})
*/
/* PRESS THE POINTS*/



/* PRESS THE ARROWS*/

let l=0;
let leftArrow=document.querySelector('.arrowSelectLeft');
let rightArrow=document.querySelector('.arrowSelectRight');

let leftArrowBright=document.querySelector('.arrowSelectLeftBright');
let rightArrowBright=document.querySelector('.arrowSelectRightBright');

rightArrowBright.addEventListener('click', () =>{
    if (l==0){
        figures.classList.toggle('translateRightImage375');

        leftArrow.classList.toggle('setArrowUnactive');
        leftArrowBright.classList.toggle('setArrowActive');

        leftPoint.classList.toggle('translateRightPoint0');
        centerPoint.classList.toggle('translateLeftPoint0');

        l=1;
    } else if (l==1) {
        figures.classList.toggle('translateRightImage375');
        figures.classList.toggle('translateRightImage750');

        rightArrow.classList.toggle('setArrowActive');
        rightArrowBright.classList.toggle('setArrowUnactive');

        rightPoint.classList.toggle('translateRightPoint177');
        centerPoint.classList.toggle('translateLeftPoint177');
        
        l=2;
    }

})

leftArrowBright.addEventListener('click', () =>{
    if (l==2){
        figures.classList.toggle('translateRightImage375');
        figures.classList.toggle('translateRightImage750');

        rightArrow.classList.toggle('setArrowActive');
        rightArrowBright.classList.toggle('setArrowUnactive');

        rightPoint.classList.toggle('translateRightPoint177');
        centerPoint.classList.toggle('translateLeftPoint177');

        l=1;

    } else if (l==1) {
        figures.classList.toggle('translateRightImage375');

        leftArrow.classList.toggle('setArrowUnactive');
        leftArrowBright.classList.toggle('setArrowActive');

        leftPoint.classList.toggle('translateRightPoint0');
        centerPoint.classList.toggle('translateLeftPoint0');
        
        l=0;
    }

})


/* PRESS THE ARROWS*/



/*
for (let node of imagesForSlider.children){
    console.log(node);
}
*/

  

/* SLIDER */



}
());