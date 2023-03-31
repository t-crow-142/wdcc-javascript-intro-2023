/* 
    Session : JavaScript intro
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
async function runExample(){
    console.log("Running example...");

    const articleId = document.getElementById("articleId").value;
    const articleDisplay = document.getElementById("displayExample");
    
    const reponseObject = await fetch(`https://trex-sandwich.com/ajax/articles?id=${articleId}`)
    const articleObject = await reponseObject.json();

    console.log("Article object: " + JSON.stringify(articleObject));

    articleDisplay.innerHTML = `
        <h4>Title: ${articleObject.title}</h4>
        <p>Content: ${articleObject.content}</p>
    `





}

