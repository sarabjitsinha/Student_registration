var obj={}
var i=1;
var genderval;

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
       document.querySelector('#studentspan').innerHTML="Student Idcannot be blank"
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
    document.querySelector('#genderspan').innerHTML="" 
    GenderValidate(genderval);
})
})

function GenderValidate(genderval) {
    
if(genderval==''){
    
   document.querySelector('#genderspan').innerHTML=`<br>Please select the gender`;
   
   return false
}

return true
}

function FormValidate() {
    if(!(NameValidate()) || !(StudentValidate()) || !(PhoneValidate()) || !(EmailValidate()) || !(GenderValidate())){
        alert("Invalid entry!! Discarding changes ")
         window.location.reload()
            return false
    }
    else
     {
    const nameel=document.getElementById('name')    
    const nameval=nameel.value;
    const studentel=document.getElementById('studentid')    
    const studentval=studentel.value; 
    const phoneel=document.getElementById('phone')    
    const phoneval=phoneel.value;
    const emailel=document.getElementById('email')    
    const emailval=emailel.value;
    
counter=localStorage.getItem("counter");
i=counter;

if(i<=1)
    {
     i=1;
    }           
        
        localStorage.setItem(`Record${i}`, nameval +','+ studentval +','+ phoneval +','+ emailval +','+ genderval)
        alert(`Record saved for Record${i}`)
        counter=i
        counter++;
        localStorage.setItem("counter",counter)
        i++;
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
                    
                    document.querySelector('#studentspan').innerHTML=`<b>DUPLICATE ENTRY</b>`
                    return true;
            }
                         
        }
             array3.pop();
            }
            
        } 
    }
    return false
}