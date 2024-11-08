const nameT=document.getElementById("Name")
//console.log(nameT.value);
nameT.addEventListener("change", function(){
    sessionStorage.setItem("Name",nameT.value)
    const storevalue=sessionStorage.getItem("Name")
    console.log(storevalue);
    
})