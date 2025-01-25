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
let ele = document.createElement("hi")
ele.innerText = "Dynamic creation of html element";
ele.id ="demo";

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.ariaValueMax;
    let uemail = mail.Value;
    let upass =psw.Value;
    let userDetails={
        uname , uemail , upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" ,JSON.stringify(userDetails))
})