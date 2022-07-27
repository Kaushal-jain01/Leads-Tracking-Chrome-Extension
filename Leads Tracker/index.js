// function saveLead(){
//     console.log("Button Clicked!")
// }


let myLeads = []

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
    console.log("Double clicked!");
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})



function render(leads){
let listItem = "" 
for(let i=0; i<leads.length;i++){
   // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

   //Another way
   listItem += `<li>
                <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>
                </li>`

    //Another way: create element, set text content, append to ul
    // const li = document.createElement("li")
    // li.textContent += myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItem
}

