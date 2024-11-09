

    document.getElementById("getdetail").addEventListener("click",function(){
    const parentdiv=document.getElementById("getdetail")
    var namval =localStorage.getItem("Name")
        if(namval!=null){
            const addname=document.createElement("div")
            addname.innerHTML="Student Name:" +" "+ namval;
            addname.style.display="flex"
            addname.style.justifyContent="center"
            addname.style.backgroundColor="green"
            parentdiv.appendChild(addname)
            localStorage.removeItem("Name")
                        }
        else{
            alert("No more records to show")
           }         
   
})


        document.getElementById("getdetail").addEventListener("click", function(){
            
        })
