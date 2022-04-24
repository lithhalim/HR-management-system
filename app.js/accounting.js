
'use strict'
let add,main
let collection
let departmentName=["Finance","Marketing","Administration","Development","All"]

function getLocal(){
    if(window.localStorage.added!==undefined){
    add=JSON.parse(window.localStorage.added)
    main=JSON.parse(window.localStorage.main)
    collection=main.concat(add)
    }
    else{
        main=JSON.parse(window.localStorage.main)
        collection=main;
    
    }

}getLocal()

function input(){
    let table=document.querySelector(".tableMake")
    departmentName.forEach((depart,i)=>{
        let number=0
        let selary=[]

        collection.forEach((a,i)=>{
            if(a.Department===depart||depart==="All"){
                number++
                selary.push(a.selaryNew)

            }
        })
        let sum=selary.reduce((a,b)=>(a+b),0)

        table.innerHTML+=`
    <tr>
        <td>${depart}</td>
        <td>${number}</td>
        <td>${Math.floor(sum/number)}</td>
        <td>${sum}</td>
    </tr>        
        `
    })


}input()
console.log(collection)
