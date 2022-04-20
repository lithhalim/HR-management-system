


'use strict'



function Employee(EmployeeID,FullName,Department,Level,ImageURL,Salary){
this.EmployeeID=EmployeeID,
this.FullName=FullName,
this.Department=Department,
this.Level=Level,
this.ImageURL=ImageURL,
this.Salary=Salary
}


Employee.prototype.selary=function() {
    let selaryNew
    if(this.Level==="Senior"){
        selaryNew=getRandomInt(1500,2000)
    }
    if(this.Level==="Mid-Senior"){
        selaryNew=getRandomInt(1000,1500)
      }
    if(this.Level==="Junior"){
        selaryNew=getRandomInt(500,1000)
      }

    //function for random 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.querySelector("table").innerHTML+=`
    <tr>
            <td>${this.EmployeeID}</td>
            <td>${this.FullName}</td>
            <td>${this.Department}</td>
            <td>${this.Level}</td>
            <td>${selaryNew}</td>
    </tr>
    `    
}

let User1=new Employee(1000,"Ghazi Samer","Administration","Senior")
let User2=new Employee(1001,"Lana Ali","Finance","Senior")
let User3=new Employee(1002,"Tamara Ayoub","Marketing","Senior")
let User4=new Employee(1003,"Safi Walid	","Administration","Mid-Senior")
let User5=new Employee(1004,"Omar Zaid	","Development","Senior")
let User6=new Employee(1005,"Rana Saleh","Development","Junior")
let User7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")

User1.selary()
User2.selary()
User3.selary()
User4.selary()
User5.selary()
User6.selary()
User7.selary()