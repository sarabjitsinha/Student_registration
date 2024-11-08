const nameST=document.getElementById("Name")

nameST.addEventListener("change",function(){
    sessionStorage.setItem("Name",nameST.value);
    let storevalue=sessionStorage.getItem("Name");
    console.log("Name :",storevalue);
  
})

const studid=document.getElementById("studentid")


studid.addEventListener("change",function(){
    sessionStorage.setItem("Student Id",studid.value);
    let studidval=sessionStorage.getItem("Student Id");
    console.log("Student Id :",studidval);
    
})

const studemail=document.getElementById("email")

studemail.addEventListener("change",function(){
    sessionStorage.setItem("Email",studemail.value);
    let studemailval=sessionStorage.getItem("Email");
    console.log("Student Mail :",studemailval);
    
})
const studcontact=document.getElementById("contact")

studcontact.addEventListener("change",function(){
    sessionStorage.setItem("Contact",studcontact.value);
    let studconval=sessionStorage.getItem("Contact");
    console.log("Student contact :",studconval);
    
})