"use strict";
console.log("Hello World!");
//forms
const form1 =document.getElementById('form1');
const form2 =document.getElementById('form2');
const form3 =document.getElementById('form3');
const form4 =document.getElementById('form4');
const form5 =document.getElementById('form5');
//progress
// form1 inputs 
const nameInput= document.getElementById('name');
const emailInput= document.getElementById('email');
const numberInput= document.getElementById('phoneNumber');
//form1 errors
const error1 =document.querySelector('.error1');
const error2 =document.querySelector('.error2');
const error3 =document.querySelector('.error3');
const num1=document.getElementById('num');
const num2=document.getElementById('num1');
const num3=document.getElementById('num2');
const num4=document.getElementById('num3');
const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//=====toggle======
const monthly=document.querySelector('.monthly');
const year=document.querySelector('.yearly');
//=================form 2 price=========
const price1= document.querySelector('.price1');
const price2= document.querySelector('.price2');
const price3= document.querySelector('.price3');
const discount1= document.querySelector('.discount');
const discount2= document.querySelector('.discount1');
const discount3= document.querySelector('.discount2');
//ad boxes
const adBox1 =document.getElementById('ad_box1');
const adBox2 =document.getElementById('ad_box2');
const adBox3 =document.getElementById('ad_box3');
//ad-checkboxes
const onlineCheck=document.getElementById('online');
const storageCheck=document.getElementById('storage');
const customizeCheck=document.getElementById('customize');
//=================form 2 plan=========
//form 3 amount
const amount1= document.querySelector('.ad_amount1');
const amount2= document.querySelector('.ad_amount2');
const amount3= document.querySelector('.ad_amount3'); 
//form 4 name & amount
let planAmount =document.querySelector('.plan_amount'); 
const change =document.getElementById('change');
const totalAmount =document.querySelector('.total_amount'); 
const addOnName1 =document.querySelector('.addon1_name');
const addOnName2 =document.querySelector('.addon2_name');
const addOnName3 =document.querySelector('.addon3_name');
const addOnAmount1= document.querySelector('.addon1_amount');
const addOnAmount2= document.querySelector('.addon2_amount');
const addOnAmount3= document.getElementById('addon3_amount');

//form 4 plan name
const planName =document.querySelector('.plan_Name');
const periodName=document.querySelector('.period');
//======Next Step(1)==========
function validateEmail(email){
  const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePhoneNumber(phoneNumber){
  const numberRegex =/^\+?(\d{1,4})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}$/;
  return numberRegex.test(phoneNumber);
}
function nextStep1(){
if(nameInput.value==""){
  error1.style.display="block";
  nameInput.style.borderColor="hsl(354, 84%, 57%)";
}else if(emailInput.value==""){
  error2.style.display="block"
  error2.textContent="This field is required"
} else if( !validateEmail(emailInput.value)){
  emailInput.style.borderColor="hsl(354, 84%, 57%)";
  error2.textContent="Valid email required"
}else if(numberInput.value==""){
  error3.style.display="block";
  numberInput.style.borderColor="hsl(354, 84%, 57%)";
}else if(!validatePhoneNumber(numberInput.value)){
  error3.textContent="Valid phone number required"
}else {
  error1.style.display="none";
  nameInput.style.borderColor="hsl(231, 11%, 63%)";
  error2.style.display="none";
  emailInput.style.borderColor="hsl(231, 11%, 63%)";
  error3.style.display="none";
  numberInput.style.borderColor="hsl(231, 11%, 63%)";
   moveStep1();
}


 
} 






function moveStep1(){
  error2.style.display="none";
  error3.style.display="none";
  form1.style.display ="none";
form2.style.display="block";
num1.classList.remove('active');
num2.classList.add('active');
}
//======Next Step(2)==========
function nextStep2(event){
  event.preventDefault();
  form2.style.display="none";
  form3.style.display="block";
  num2.classList.remove('active');
num3.classList.add('active');
}
//======Next Step(3)==========
function nextStep3(event){
  event.preventDefault();
  if(onlineCheck.checked!==true &&storageCheck.checked!==true||onlineCheck.checked!==true && customizeCheck.checked!==true || customizeCheck.checked!==true &&storageCheck.checked!==true){
alert("Please choose at least two(2) options");
  }else{
  form3.style.display="none";
  form4.style.display="block";
  num3.classList.remove('active');
num4.classList.add('active');
3
confirm();
}
}
//======Next Step(3)==========
function nextStep4(event){
  event.preventDefault();
  form4.style.display="none";
  form5.style.display="block";
}
//======Go Back(1)==========
function goBack1(){
  form1.style.display ="block";
form2.style.display="none";
num1.classList.add('active');
num2.classList.remove('active');
}
//======Go Back(2)==========
function goBack2(){
  form2.style.display ="block";
form3.style.display="none";
num2.classList.add('active');
num3.classList.remove('active');
}
//======Go Back(3)==========
function goBack3(){
  form3.style.display ="block";
form4.style.display="none";
num3.classList.add('active');
num4.classList.remove('active');
}
//======monthly Yearly Toggle==========
function yearly(){
  form2.classList.toggle('yearly');

   if( arcadeBox.classList=="box1 selected"&& form2.classList=="yearly"){
    arcade();
  }else if( advancedBox.classList=="box2 selected"&& form2.classList=="yearly"){
    advanced();
  }else if( proBox.classList=="box3 selected"&& form2.classList=="yearly"){
    pro();
  }else{
    month();
  }
  if (form2.classList=="yearly"){
  price1.innerHTML="$90/yr";
  price2.innerHTML="$120/yr";
  price3.innerHTML="$150/yr";
  discount1.innerHTML="2 months free";
  discount2.innerHTML="2 months free";
  discount3.innerHTML="2 months free";
  amount1.textContent="+$10/yr";
  amount2.textContent="+$20/yr";
  amount3.textContent="+$20/yr";
  periodName.innerHTML="(Yearly)";
 
 year.classList.add('current');
 monthly.classList.remove('current');
}else{
    price1.innerHTML="$9/mo";
    price2.innerHTML="$12/mo";
    price3.innerHTML="$15mo";
    discount1.innerHTML="";
    discount2.innerHTML="";
    discount3.innerHTML="";
    amount1.textContent="+$1/mo";
    amount2.textContent="+$2/mo";
    amount3.textContent="+$2/mo";
    periodName.innerHTML="(Monthly)";
    year.classList.remove('current');
    monthly.classList.add('current');
  }
  
  console.log(arcadeBox.classList);
  console.log(form2.classList);
}
function month(){
  if( arcadeBox.classList=="box1 selected"&& form2.classList!=="yearly"){
    arcade();
  }else if( advancedBox.classList=="box2 selected"&& form2.classList!=="yearly"){
    advanced();
  }else if( proBox.classList=="box3 selected"&& form2.classList!=="yearly"){
    pro();
  }
}
// =========Arcade======================
function arcade(){

  arcadeBox.classList.add('selected');
  advancedBox.classList.remove('selected');
  proBox.classList.remove('selected');
  
planName.innerHTML ="Arcade";
//rule one
if(form2.classList=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false){
  planAmount.innerHTML=`+$${90}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${90 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false  ){
  planAmount.innerHTML=`+$${9}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${9 +1 +2}/mo`;
 }else if( form2.classList=="yearly" &&onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${90}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${90 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" &&  onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${9}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${9 +1 +2}/mo`;
 }
 else if(form2.classList=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false) {
  planAmount.innerHTML=`+$${90}/yr`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${90 +20 +20}/yr`;
}else if(form2.classList!=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false){
  planAmount.innerHTML=`+$${9}/mo`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${9 +2 +2}/mo`;
}else if(form2.classList=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${90}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${90 +10+20 +20}/yr`;
}else if(form2.classList!=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${9}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${9 +1+2 +2}/mo`;
}
else{
  planAmount.innerHTML=`+$${9}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${9 +1 +2}/mo`;
 }
 

 

}
function advanced(){

 arcadeBox.classList.remove('selected');
  proBox.classList.remove('selected');
  advancedBox.classList.add('selected');
planName.innerHTML ="Advanced";

//rule one
 if(form2.classList=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false){
  planAmount.innerHTML=`+$${120}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${120 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false  ){
  planAmount.innerHTML=`+$${12}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${12 +1 +2}/mo`;
 }else if( form2.classList=="yearly" &&onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${120}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${120 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" &&  onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${12}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${12 +1 +2}/mo`;
 }
 else if(form2.classList=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false) {
  planAmount.innerHTML=`+$${120}/yr`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${120 +20 +20}/yr`;
}else if(form2.classList!=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false){
  planAmount.innerHTML=`+$${12}/mo`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${12 +2 +2}/mo`;
}else if(form2.classList=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${120}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${120 +10+20 +20}/yr`;
}else if(form2.classList!=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${12}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${12+1+2 +2}/mo`;
}
else{
  planAmount.innerHTML=`+$${12}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${+1 +2}/mo`;
 }
 

}
function pro(){

   arcadeBox.classList.remove('selected');
  advancedBox.classList.remove('selected');
  proBox.classList.add('selected');
planName.innerHTML ="Pro";

//rule one
if(form2.classList=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false){
  planAmount.innerHTML=`+$${150}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${150 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" && onlineCheck.checked==true && storageCheck.checked==true &&customizeCheck.checked==false  ){
  planAmount.innerHTML=`+$${15}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${15 +1 +2}/mo`;
 }else if( form2.classList=="yearly" &&onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${150}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${150 +10 +20}/yr`;
 }else if(form2.classList!=="yearly" &&  onlineCheck.checked==true && customizeCheck.checked==true &&storageCheck.checked==false){
  planAmount.innerHTML=`+$${15}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=``;
  totalAmount.innerHTML=`+$${15 +1 +2}/mo`;
 }
 else if(form2.classList=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false) {
  planAmount.innerHTML=`+$${150}/yr`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${150 +20 +20}/yr`;
}else if(form2.classList!=="yearly" && storageCheck.checked==true  && customizeCheck.checked==true &&onlineCheck.checked ==false){
  planAmount.innerHTML=`+$${15}/mo`;
  addOnAmount1.innerHTML="";
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${15 +2 +2}/mo`;
}else if(form2.classList=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${150}/yr`;
  addOnAmount1.innerHTML=`+$${10}/yr`;
  addOnAmount2.innerHTML=`+$${20}/yr`;
  addOnAmount3.innerHTML=`+$${20}/yr`;
  totalAmount.innerHTML=`+$${150 +10+20 +20}/yr`;
}else if(form2.classList!=="yearly" && onlineCheck.checked==true && customizeCheck.checked==true && storageCheck.checked==true){
  planAmount.innerHTML=`+$${15}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  addOnAmount3.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${15 +1+2 +2}/mo`;
}
else{
  planAmount.innerHTML=`+$${15}/mo`;
  addOnAmount1.innerHTML=`+$${1}/mo`;
  addOnAmount2.innerHTML=`+$${2}/mo`;
  totalAmount.innerHTML=`+$${15 +1 +2}/mo`;
 }
}

function adBox(){
  if(adBox1.classList !=='current'&& onlineCheck.checked==false){
    adBox1.classList.add('current'); 
    onlineCheck.checked=true;
    addOnName1.innerHTML="Online service";
  }else{
    adBox1.classList.remove('current');
     onlineCheck.checked=false;
     addOnName1.innerHTML="";
  }

  

}
function adBoxX(){
  if(adBox2.classList !=='current'&& storageCheck.checked==false){
    adBox2.classList.add('current'); 
    storageCheck.checked=true;
    addOnName2.innerHTML="Large storage";
  }else{
    adBox2.classList.remove('current');
     storageCheck.checked=false;
     addOnName2.innerHTML="";
  }

}
function adBoxY(){
  if(adBox3.classList !=='current'&& customizeCheck.checked==false){
    adBox3.classList.add('current'); 
    customizeCheck.checked=true;
  
    addOnName3.innerHTML="Customizable profile";
  }else{
    adBox3.classList.remove('current');
     customizeCheck.checked=false;
     addOnName3.innerHTML="";
  }
}
function confirm(){
  if( arcadeBox.classList=="box1 selected"&& form2.classList=="yearly"){
    arcade();
  }else if( advancedBox.classList=="box2 selected"&& form2.classList=="yearly"){
    advanced();
  }else if( proBox.classList=="box3 selected"&& form2.classList=="yearly"){
    pro();
  }else{
    month();
  }
}

const next1=document.getElementById('next(1)');
const next2=document.getElementById('next(2)');
const back1=document.getElementById('back(1)');
const back2=document.getElementById('back(2)');
const back3=document.getElementById('back(3)');
const toggleBtn =document.getElementById('toggleBtn');
const next3=document.getElementById('next(3)');
const next4=document.getElementById('next(4)');
//=================form 2 plan=========
const arcadeBox =document.getElementById('arcade_box');
const advancedBox =document.getElementById('advanced_box');
const proBox =document.getElementById('pro_box');

//ad boxes
// const adBox1 =document.getElementById('ad_box1');



next1.addEventListener("click",nextStep1);
next2.addEventListener("click",nextStep2);
back1.addEventListener("click",goBack1);
back2.addEventListener("click",goBack2);
back3.addEventListener("click",goBack3);
toggleBtn.addEventListener("click",yearly);
next3.addEventListener("click",nextStep3);
next4.addEventListener("click",nextStep4);
arcade();
arcadeBox.addEventListener("click",arcade);
advancedBox.addEventListener("click",advanced);
proBox.addEventListener("click",pro);

adBox1.addEventListener("click",adBox)
adBox2.addEventListener("click",adBoxX)
adBox3.addEventListener("click",adBoxY)

function step2(){
   form4.style.display ="none";
form2.style.display="block";
num4.classList.remove('active');
num2.classList.add('active');
}