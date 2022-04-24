

'use strict'
///////////////////Define The Element Constracture///////////////////////////////////////////
let array=[]
let addedArray=[]



function Employee(EmployeeID,FullName,Department,Level,ImageURL,Salary){
this.EmployeeID=EmployeeID,
this.FullName=FullName,
this.Department=Department,
this.Level=Level,
this.ImageURL=ImageURL,
this.Salary=Salary
this.selaryNew
array.push(this)
}



//////////check the local storage
if(window.localStorage.added){
  let z=JSON.parse(window.localStorage.added)
  let icon=document.querySelector(".container")

  console.log(z)
  z.forEach(({Department,EmployeeID,FullName,ImageURL,Level,selaryNew})=>{

    icon.innerHTML+=`
   <div class="icon">
    <img src=${ImageURL} alt="NoImage">
    <p><span>Name</span>:${FullName}-ID:${EmployeeID}</p>
    <p><span>Department</span>:${Department}-level:${Level}</p>
    <p>${selaryNew}</p>
  </div>`
 
  })




}




///////////////////Check the Level of user/////////////////////////////////////////////////
Employee.prototype.selary=function() {
    if(this.Level==="Senior"){
        this.selaryNew=getRandomInt(1500,2000)
    }
    if(this.Level==="Mid-Senior"){
        this.selaryNew=getRandomInt(1000,1500)
      }
    if(this.Level==="Junior"){
        this.selaryNew=getRandomInt(500,1000)
      }

    //function for random 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



//////////////////render the user of constructur on the page
Employee.prototype.render=function(){
  document.querySelector(".container").innerHTML+=`
<div class="icon">
  <img src=${this.ImageURL} alt="">
  <p><span>Name</span>:${this.FullName}-ID:${this.EmployeeID}</p>
  <p><span>Department</span>:${this.Department}-level:${this.Level}</p>
  <p>${this.selaryNew}</p>
</div>
  ` }

let User1=new Employee(1000,"Ghazi Samer","Administration","Senior","https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg")
let User2=new Employee(1001,"Lana Ali","Finance","Senior","https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D")
let User3=new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg")
let User4=new Employee(1003,"Safi Walid	","Administration","Mid-Senior","https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
let User5=new Employee(1004,"Omar Zaid	","Development","Senior","https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
let User6=new Employee(1005,"Rana Saleh","Development","Junior","https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg")
let User7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bmX98VAhIxtGHyLS91_eOCjKkgap4_iDUA&usqp=CAU")



for(let i=0;i<array.length;i++){
  array[i].selary(),
  array[i].render()
}





///////////////////Add event more user
function addEvent(){
  let form=document.querySelector("form")
  let submit=document.querySelector(".submit")

  //add click to sbmit
  submit.addEventListener("click",(a)=>{
    a.preventDefault()
   let userName= form.fullname.value
   let userId = Math.floor(1000 + Math.random() * 9000);
   let userDepartment=form.Department.value
   let userLevel=form.Level.value
   let userImage=form.Image.value
   neSelary(userLevel)
   addedArray.push({
    FullName:userName,
     EmployeeID:userId,
     Department:userDepartment,
     Level:userLevel,
     ImageURL:userImage,
     selaryNew:newSelary
   })




   function addLocal(){
    window.localStorage.added=JSON.stringify(addedArray)
  }addLocal()
  
  
  


   //add to icon
   let icon=document.querySelector(".container")
   icon.innerHTML+=`
  <div class="icon">
   <img src=${userImage} alt="NoImage">
   <p><span>Name</span>:${userName}-ID:${userId}</p>
   <p><span>Department</span>:${userDepartment}-level:${userLevel}</p>
   <p>${newSelary}</p>
 </div>`})}addEvent()


 ////////////////////check the level of user
 let newSelary
const neSelary=function(userLevel) {
  if(userLevel==="Senior"){
    newSelary=getRandomInt(1500,2000)
  }
  if(userLevel==="Mid-Senior"){
    newSelary=getRandomInt(1000,1500)
    }
  if(userLevel==="Junior"){
    newSelary=getRandomInt(500,1000)
    }

  //function for random 
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}



 
function mainLocal(){
  window.localStorage.main=JSON.stringify(array)
}mainLocal()


