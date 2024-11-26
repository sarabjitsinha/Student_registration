let array1=[]
let delrecord;   
let Editrecord;
let genderval;
// Printing records

document.getElementById("getdetail").addEventListener('click',function (){
const ulel=document.querySelector('ul')
document.getElementById("Scrolleffect").classList.toggle("ShowDetail")
document.querySelector('#searching').classList.toggle('hide')
document.getElementById("searchbutton").classList.toggle('hide')
document.getElementById("getdetail").classList.toggle('hide')
document.getElementById("image").classList.toggle('hide')
ulel.insertAdjacentHTML('beforeend',`<div style="color:blue">Showing All Records </div>`)
    let i=localStorage.length
        for (let k=1;k<i;k++){
            const ls =localStorage.getItem(`Record${k}`)
            lsdata=ls.toUpperCase().trim();
            array1.push(lsdata)
           
        for (let sll=0;sll<array1.length;sll++)
        {

            ulel.insertAdjacentHTML('beforeend',`<div style="color:green">Showing Record Number ${k}</div>`)
                array1[sll]
               const array2 =array1[sll].split(',')
               for(let ar2=0;ar2<array2.length;ar2++)
               {
                
                switch(ar2){
                    case 0:
                        if(array2[ar2]===''){
                            ulel.insertAdjacentHTML('beforeend',`<div style="color:red;">Name: Record Deleted</div>`);
                            break;
                        }
                    ulel.insertAdjacentHTML('beforeend',`<div>Name: ${array2[ar2]}</div>`)
                    break;
                case 1:
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Id: ${array2[ar2]}</div>`)
                    break;
                case 2:
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Contact: ${array2[ar2]}</div>`)
                    break;   
                case 3:
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Email: ${array2[ar2]}</div>`)
                    break;
                case 4:
                    ulel.insertAdjacentHTML('beforeend',`<div>Gender: ${array2[ar2]}</div>`)
                    break;
                default:
                    ulel.insertAdjacentHTML('beforeend',`<div>Value not found</div>`)
                                              
                }  
               }
        }
        array1.pop();
        }
        
    })
    
    //Searching records
    function SearchItem(){
    const inpEl=document.querySelector('#searching')
    const searchEl=document.getElementById("searchbutton")
        document.querySelector('#searching').classList.toggle('hide')
        document.getElementById("searchbutton").classList.toggle('hide')
        document.getElementById("getdetail").classList.toggle('hide')
        document.getElementById("Delete").classList.toggle('hide')
        document.getElementById("image").classList.toggle('hide')
        const ulel=document.querySelector('ul')
        let array3=[]
        let i=localStorage.length
        
        const inpvall=inpEl.value;
        const inpval=inpvall.toUpperCase();
        console.log(inpval)
        if(inpval.length>3){
        for (let k=1;k<i;k++){
           const ls =localStorage.getItem(`Record${k}`)
           console.log(ls)
           console.log(i)
            lsdata=ls.toUpperCase();
            array3.push(lsdata)
            
        for (let sll=0;sll<array3.length;sll++)
        {
                array3[sll]
               const array4 =array3[sll].split(',')
               for(let ar2=0;ar2<2;ar2++)
               {
                
                if(array4[ar2].includes(inpval))
                
                 {
                    if(ar2==0)
                    {
                    ulel.insertAdjacentHTML('beforeend',`<div style="color:brown">Showing Record Number ${k}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Name: ${array4[ar2]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Id: ${array4[ar2+1]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Contact: ${array4[ar2+2]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Email: ${array4[ar2+3]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Gender: ${array4[ar2+4]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<button class="border-spacing-2 left-48 relative rounded-xl border-l-fuchsia-900 bg-lime-600 w-28" type="button" value="Edit" id="edit" onclick="EditItem()">Edit</button>`)
                    ulel.insertAdjacentHTML('beforeend',`<button type="submit" id="delbutton" class="bg-red-300 rounded-lg border-2 border-slate-700" w-28 onclick="DeleteRecord()"> Delete </button>`)
                    delrecord=`Record${k}`
                    Editrecord=`Record${k}`
                    break;
                 }
                    else{
                    ulel.insertAdjacentHTML('beforeend',`<div style="color:brown">Showing Record Number ${k}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Name: ${array4[0]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Id: ${array4[1]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Contact: ${array4[2]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Student Email: ${array4[3]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<div>Gender: ${array4[4]}</div>`)
                    ulel.insertAdjacentHTML('beforeend',`<button class="border-spacing-2 left-48 relative rounded-xl border-l-fuchsia-900 bg-lime-600 w-28" type="button" value="Edit" id="edit" onclick="EditItem()">Edit</button>`)
                    ulel.insertAdjacentHTML('beforeend',`<button type="submit" id="delbutton" class="bg-red-300 rounded-lg border-2 border-slate-700" w-28 onclick="DeleteRecord()"> Delete </button>`)
                    delrecord=`Record${k}`
                    Editrecord=`Record${k}`
                    break;
                    }
            }
             
        }
            
            array3.pop();
            }
        } 
    }
    else
    {
        alert("Please enter a minimum of 3 letters to enable the search")
    }
}
    
    
    //Deleting records
    
    
        function DeleteRecord(){
        const flag=confirm("Are you sure you want to delete the record ?")
        if(flag){
        localStorage.removeItem(delrecord);
        localStorage.setItem(delrecord," ")
        window.location.reload();
    }
    }
       

    document.querySelector("#Delete").addEventListener("click", function(e){
        const flag=confirm("ALERT!!The action will delete all records permanently and is an irreversible process. Are you sure you want to continue?")
        if (flag){
        localStorage.clear();
        window.location.reload(); 
        }
    })


    function EditItem(){

        const nameel=document.getElementById('name')    
        const studentel=document.getElementById('studentid')    
        const phoneel=document.getElementById('phone')    
        const emailel=document.getElementById('email')    
        const genderMale=document.getElementById('Male')
        const genderFemale=document.getElementById('Female')
        document.getElementById('editform').classList.toggle('hide')
        let Alterrecord=[]
                       Editrecord
                       const Alter=localStorage.getItem(Editrecord)
                        Alterrecord=Alter.split(',')
                        nameel.value=Alterrecord[0] 
                       studentel.value=Alterrecord[1]
                       phoneel.value=Alterrecord[2]
                       emailel.value=Alterrecord[3]
                       console.log(Alterrecord[4])
                        if(Alterrecord[4]=='Male'){
                            document.getElementById('Male').setAttribute("checked","checked")
                        }
                        else if(Alterrecord[5]=='Male'){
                            document.getElementById('Male').setAttribute("checked","checked")
                        }

                       if(!(NameValidate()) || !(StudentValidate()) || !(PhoneValidate()) || !(EmailValidate()) || !(GenderValidate())){
                        alert("Please check the entries before saving")
                        return false
                    }
                    return true
                                          
                }
                 
function NameValidate(){
    const nameregex=/^[a-zA-Z]*\s{1}[a-zA-z]{3,}$/
    const nameel=document.getElementById('name')    
    const nameval=nameel.value;

    if(nameval.length==0){
       document.querySelector('#namespan').innerHTML="Name cannot be blank"
       return false
    }

   if(nameval==null || nameval==''){
       document.querySelector('#namespan').innerHTML=""
       return false
   }
   

   if(!nameval.match(nameregex)){
       document.querySelector('#namespan').innerHTML="Please enter full"
       return false
   }
   
   document.querySelector('#namespan').innerHTML=`<img src="check.png" alt="" height="13px" width="13px">`
   return true
   
                       }                        


function StudentValidate() {
    const studentregex=/^[0-9]{7}$/
    const studentel=document.getElementById('studentid')    
    const studentval=studentel.value;

    
   if(studentval==null || studentval==''){
       document.querySelector('#studentspan').innerHTML=""
       return false
   }
   if(studentval.length==0){
       document.querySelector('#studentspan').innerHTML="Student Id cannot be blank"
       return false
   }

   if(!studentval.match(studentregex) && studentval.length==7){
       document.querySelector('#studentspan').innerHTML="Only numbers please"
       return false
   }
   if(studentval.length<7 || studentval.length>7){
       document.querySelector('#studentspan').innerHTML="Please enter 7 digits"
       return false
   }

   if(studentval.match(studentregex) && studentval.length==7 && !(Duplicate(studentval)) ){
       document.querySelector('#studentspan').innerHTML=`<img src="check.png" alt="" height="13px" width="13px">`
       return true
   }
  
}                      


function PhoneValidate(){
    const phoneregex=/^[0-9]{10}$/
    const phoneel=document.getElementById('phone')    
    const phoneval=phoneel.value;


   if(phoneval==null || phoneval==''){
       document.querySelector('#phonespan').innerHTML=""
       return false
   }
   if(phoneval.length==0){
       document.querySelector('#phonespan').innerHTML="Phone number cannot be blank"
       return false
   }

   if(!phoneval.match(phoneregex) && phoneval.length==10){
       document.querySelector('#phonespan').innerHTML="Only numbers please"
       return false
   }
   if(phoneval.length<10 || phoneval.length>10){
       document.querySelector('#phonespan').innerHTML="Please enter 10 digits"
       return false
   }

   if(phoneval.match(phoneregex) && phoneval.length==10){
       document.querySelector('#phonespan').innerHTML=`<img src="check.png" alt="" height="13px" width="13px">`
       return true
   }
                       }



function EmailValidate(){
    const emailregex=/^[a-zA-Z0-9\._]*@[a-zA-z]*\.[a-zA-Z\.]{2,6}$/
    const emailel=document.getElementById('email')    
    const emailval=emailel.value;
    if(emailval.length==0){
       document.querySelector('#emailspan').innerHTML="Email cannot be blank"
       return false
    }

   if(emailval==null || emailval==''){
       document.querySelector('#emailspan').innerHTML=""
       return false
   }
   
   if(!emailval.match(emailregex)){
       document.querySelector('#emailspan').innerHTML="Please enter a valid email"
       return false
   }

   
   document.querySelector('#emailspan').innerHTML=`<img src="check.png" alt="" height="13px" width="13px">`
   return true


}


const gender=document.querySelectorAll("input[name=gender]");
gender.forEach((item,index)=>{
item.addEventListener('change',function(){
    genderval=item.value;
    GenderValidate(genderval);
})
})

function GenderValidate(genderval) {
if(genderval==''){
   document.querySelector('#genderspan').innerHTML=`<br>Please select the gender`
   return false
}
return true
}

function FormValidate() {
    if(!(NameValidate()) || !(PhoneValidate()) || !(EmailValidate()) || !(GenderValidate())){
        alert("invalid entry")
        return false
    }
    else {
    const nameel=document.getElementById('name')    
    const nameval=nameel.value;
    const studentel=document.getElementById('studentid')    
    const studentval=studentel.value; 
    const phoneel=document.getElementById('phone')    
    const phoneval=phoneel.value;
    const emailel=document.getElementById('email')    
    const emailval=emailel.value;
        localStorage.setItem(Editrecord,nameval +','+ studentval +','+ phoneval +','+ emailval +','+genderval)
        alert("Record updated successfully")
        return true
}      
    
}


function Duplicate(studentval){
        let array3=[]
        let i=localStorage.length
        
        if(studentval.length==7){

            for (let k=1;k<i;k++){
                const ls =localStorage.getItem(`Record${k}`)
                array3.push(ls)
            
                for (let sll=0;sll<array3.length;sll++)
                    {
                            array3[sll]
                   const array4 =array3[sll].split(',')
               
                     for(let ar2=0;ar2<array4.length;ar2++)
                        {
                
                        if(array4[ar2].match(studentval))
                                 {
                                      document.querySelector('#studentspan').innerHTML=`<b>Id Can't be changed</b>`
                                           return true;
                            
            }
                         
        }
             array3.pop();
            }
            
        } 
    }
    return false
}


document.querySelector('#home').addEventListener("click", (e)=>window.location.reload())