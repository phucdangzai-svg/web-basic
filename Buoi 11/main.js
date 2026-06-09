let div = document.querySelector(".content >span");
let menu = document.querySelector(".menu-item  ");

div.addEventListener("click", function () {
  menu.classList.toggle("show");
});
const data=fetch("");
console.log(data)
const promise =new Promise((resolve,reject)
)
setTimeout(()=>{
  resolve("da hoan thnah")},1000)
})
promise
.then ((data)=>{
console.log(data)
})
.catch((error)=>{console.log("error")}

))
login ()
.then ((user)=>{
  console.log("get user")
})
.then ((post)=>{
  console.LOG ("GET POST")
})
.catch((error)=>{
  console.log("error")
})
async function login() {
  try {
    const user=await login();
    console.log("get user")
    const post =await getComputedStyle(user.id)
    console.log("get post")
  }
  catch(error){
    console.log(error);
  }
  
}
