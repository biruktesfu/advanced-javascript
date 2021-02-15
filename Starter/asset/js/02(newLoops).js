//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    forINLoop();

    forOFLoop();
})


function forINLoop() {

    // A Student Object 
    const student = { name: " Abebe", age: 21, year: " 2nd year" }

    // 1. Create a for in loop that iterate over the student object
    for(let item in student){console.log(`${item} =>${student[item]}`)}
    // 2. Inside the loop paint the UI [Use the Format Given Below]
    for(let item in student){
        console.log(`${item} =>${student[item]}`)
        forInLoop.innerHTML +=
        `
       <li class="list-group-item" >${item} : ${student[item]}</li>

    `;
    }

    //Use this Format 



}


function forOFLoop() {

    // A Students Array
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]

    // 1. Create a for of loop that iterate over the students Array and displays the names of students 
    for(student of students){
        for (let name in student){
            forOfLoop.innerHTML +=
            `
        <li class="list-group-item" >${name} : ${student[name]}</li>
    
         `;
        }
    }

    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 



}