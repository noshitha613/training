// let ele = document.getElememntsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// let x = [...ele];
// x.map(element=>{
// element.style.backgroundColor="orange"
// })
//  let ele = document.querySelectorAll(".test");
//  console.log(ele);
// let ele = document.createElement("hi")
// ele.innerText = "Dynamic creation of html element";
// ele.id ="demo";

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.ariaValueMax;
//     let uemail = mail.Value;
//     let upass =psw.Value;
//     let userDetails={
//         uname , uemail , upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" ,JSON.stringify(userDetails))
// })
let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender= document.getElementsByName("gender");

//! hiding and showing the password values
check.addEventListener("click", event=>{
    // console.log(event.target.checked);
    if(event.target.checked == true){
    password.setAttribute("type", "text");
    show.innerText = "hide password";
}else{
    password.setAttribute("type", "password");
    show.innerText = "show password";
    }
    
    })
// console.log(gender);
form.addEventListener("submit", event=>{
event.preventDefault();
let un= username.value;
let up =password.value;
let gen = "";
for(let i=0;i<=gender.length-1;i++){
// console.log(gender[i].value);
// console.log(gender[i].checked);
if(gender[i].checked == true) {
// console.log(gender[i].value);
gen =gender[i].value;

}

}
// console.log(un up, gen);

let userDetails={
username: un,
Password:up,
gender: gen

}
console.log(userDetails);
sessionStorage.setItem("userData", JSON.stringify(userDetails))

})