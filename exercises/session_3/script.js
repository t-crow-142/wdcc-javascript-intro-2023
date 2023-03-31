/* 
    Session 3
    Example and exercises

    WDCC JavaScript Workshop | Created by Tyne Crow
*/

/* Get required element references */
const exampleButton = document.getElementById("runExample");
const exerciseButton = document.getElementById("runExercise");

/* Add required click event listeners */
exampleButton.addEventListener("click", runExample);
exerciseButton.addEventListener("click", runExercise);


/* runExample function: all code inside of the curly braces will run when 'Run example' button is clicked*/
function runExample(){
    console.log("Running example...");

    const people = [
        {
            firstName: "Alice",
            lastName: "Andrews",
            bio: "Alice worked for two years in Sydney before taking on her current role.",
            yearsWorkExperience: 5
        },
        {
            firstName: "Bob",
            lastName: "Barry",
            bio: "This is Bob's first job out of university.",
            yearsWorkExperience: 2
        },
        {
            firstName: "Cathy",
            lastName: "Cameron",
            bio: "Cathy is team leader and loves her role. She has worked her for 7 years.",
            yearsWorkExperience: 7
        }
    ];

    const employeesDiv = document.getElementById("employees");

    let totalYearsExperience = 0;

    for (let i = 0; i < people.length; i++) {
        employeesDiv.innerHTML += `
            <h4>${people[i].firstName} ${people[i].lastName}</h4>
            <p>${people[i].bio}</p>
        `
        totalYearsExperience += people[i].yearsWorkExperience;
    }
    employeesDiv.innerHTML += `<h4>Total work experience of team: ${totalYearsExperience} years.</h4>`;
}


/* runExample function: all code inside of the curly braces will run when 'Run exercise' button is clicked*/
function runExercise(){
    console.log("Running exercise...");
    
    /*  You will need to reformat the data from these two arrays so that they 
        are made into a single array of three JSObjects. Each JSObject should have
        a language and description property. Once
    */
    const languages = ["HTML","CSS","JavaScript"];
    const descriptions = [
        "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. Each retrieval unit is known as a Web page (from World Wide Web), and such pages frequently contain hypertext links that allow related pages to be retrieved.",
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
    ];

    /* WRITE YOUR CODE FOR THE EXERCISE HERE: */


}
/* Do NOT write code for the exercise outside of the curly braces */