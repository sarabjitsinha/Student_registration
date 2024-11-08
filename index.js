const nameST=document.getElementById("Name")

nameST.addEventListener("change",function(){
    localStorage.setItem("Name",nameST.value);
    let studname=localStorage.getItem("Name");
    console.log("Name :",studname);
  
})

const studid=document.getElementById("studentid")


studid.addEventListener("change",function(){
    localStorage.setItem("Student Id",studid.value);
    let studidval=localStorage.getItem("Student Id");
    console.log("Student Id :",studidval);
    
})

const studemail=document.getElementById("email")

studemail.addEventListener("change",function(){
    localStorage.setItem("Email",studemail.value);
    let studemailval=localStorage.getItem("Email");
    console.log("Student Mail :",studemailval);
    
})
const studcontact=document.getElementById("contact")

studcontact.addEventListener("change",function(){
    localStorage.setItem("Contact",studcontact.value);
    let studconval=localStorage.getItem("Contact");
    console.log("Student contact :",studconval);
    
})

document.getElementById("getdetail").addEventListener("click",function(){
    document.createElement("div").innerHTML=studname;
})
