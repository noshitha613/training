// // console.log(10);
// // console.log(20);
// // setInterval(()=>{
// //     document.writeln("MRU");
// //     console.log(30);
// // },1500)
// // console.log(40);
// // console.log(50);

// let p1= new Promise((resolve,reject)=>{});
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
//     resolve("Success");
//     console.log(p2);  
// });
// // console.log(p2); 
// p2.then((response)=>console.log(response))
// p2.catch((error)=>console.log(error))
// p2.finally(()=>console.log("finally for both"))
// // let p3=new Promise((resolve,reject)=>{
// //     reject("Failure");

// // });
// // console.log(p3);
// p3.then(data=>console.log(data))
// .catch(err)


// function fetchUsers(){
//     let response=fetch("https://jsonplaceholder.typicode.com/users");
//     response.then(result=>{
//        // console.log(res.json());
//        return result.json().then(data=>{
//            console.log(data);
//        })
//    })
//    .catch(err=>console.log(err))

// }
// fetchUsers();
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("sucess");
    },5000)
})
function demo(){
    console.log("Start");
    let x= p;
    console.log(x);
    console.log("End");
};
demo()

async function fetchUsers(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);

}
fetchUsers();