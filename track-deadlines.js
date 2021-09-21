let ai_superskills = [
            "Let's start",
            "python",
            "data-preprocessing",
            "data-visualization",
            "supervised-machine-learning",
            "unsupervised-machine-learning",
            "How to build your own AI Project"
        ]
    
let nn_superskills = [
    "Hands On Deep Learning",
    "Artificial Neural Networks",
    "Deep Neural Network",
    "Convolution Neural Networks",
    "Transfer Learning",
    "Natural Language Processing",
    "How to build your own Neural Network."
]

let web_superskills = [
    "Web fundamentals",
    "HTML.",
    "CSS.",
    "CSS Layout.",
    "Javascript",
    "DOM",
    "Git & GitHub",
    "Algorithms",
    "Linear Data Structures",
    "Procedural programming",
    "Sorting and searching",
    "ES6",
    "REACT JS",
    "JSX",
    "React Components",
    "React Props",
    "React State",
    "React Hooks",
    "React Router",
    "Redux",
    "API",
    "Node.js",
    "Express (Routing)",
    "MongoDB (CRUD)",
    "Mongoose",
    "REST API",
    "Introduction to Databases",
    "Entity–relationship model",
    "Relational model",
    "Data definition language",
    "Data Manipulation language",
    "Lab_Phase: MERN APP",
//    "Lab_Phase:Programmin...",
//    "Lab_Phase: Design yo...",
//    "Lab_Phase: Developme...",
//    "Lab_Phase: Develop y...",
//    "Lab_Phase: Deploymen...",
    "Lab_Phase: Deploy your app",
//    "LAST SUPER SKILL - ..."
]

let courses = {
    "Artificial Intelligence":ai_superskills,
    "Neural Networks":nn_superskills,
    "Fullstack":web_superskills
}

let courseSelector = document.getElementById("course-selector")
courseSelector.onchange = setCourse;

var superskillSelector = document.getElementById("superskill-selector")
superskillSelector.onchange = calculateRemainingSkills;
var finalDateSelector = document.getElementById("final-date")
finalDateSelector.onchange = calculateRemainingDays;
let superskills = ai_superskills;

for (let course of Object.keys(courses)) {
    addOption(courseSelector, course)
}

for (let suprskill of superskills) {
    addOption(superskillSelector, suprskill)
}

function setCourse() {
    let selected = courseSelector.value;
    superskills = courses[selected];
    console.log(superskills)
    superskillSelector.innerText = ""
    for (let suprskill of superskills) {
        addOption(superskillSelector, suprskill)
    }
}

function calculateRemainingSkills() {
    
    let selected = superskillSelector.value;
    let currentSkill = superskills.indexOf(selected)
    console.log(currentSkill)
    skillsLeft = superskills.length - currentSkill
    let messageLeft = "Superskills Left: " + skillsLeft
    document.getElementById("skills-left").innerText = messageLeft
    
}

function addOption(selectorToAppendTo, itemToAppend) {
    let selectionItem = document.createElement("option");
    selectionItem.value = itemToAppend
    selectionItem.innerText = itemToAppend
    selectorToAppendTo.appendChild(selectionItem);
}

function calculateRemainingDays() {

    superskillSelector = document.getElementById("superskill-selector")
    let selected = superskillSelector.value;
    let currentSkill = superskills.indexOf(selected)

    let finalDay = moment(document.getElementById("final-date").value);
    let daysLeft = finalDay.diff(moment(), "days")
    let daysLeftMessage = "Days Left: " + daysLeft
    document.getElementById("days-left").innerText = daysLeftMessage
    let deadlineInvtervals = daysLeft/skillsLeft 
    document.getElementById("days-per-superskill").innerText = "Days per Intervals " + deadlineInvtervals
    console.log("interval is: " + deadlineInvtervals)
    
    let inital_deadline = moment().add(deadlineInvtervals, 'days');
    let table = document.getElementById("table-of-deadlines")
    table.innerHTML = "";
    for (let element of superskills.slice(currentSkill)) {
        let row_to_append = document.createElement("tr");
        let superskill_col = document.createElement("td");
        let deadline_col = document.createElement("td");
        superskill_col.innerText = element;
        deadline_col.innerText = inital_deadline.format("YYYY-MM-DD");
        
        row_to_append.appendChild(superskill_col)
        row_to_append.appendChild(deadline_col)

        table.appendChild(row_to_append)
        inital_deadline.add(deadlineInvtervals, 'days');
    }
}
