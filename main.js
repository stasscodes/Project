// DOM variables
const startButtonEl = document.querySelector("#btn-start"); // . grab start button
const nextbuttonEl = document.querySelector(".btn-next"); // grab nxt button
const quizformEl = document.querySelector("#quiz-form"); //grab the entire question container. hidden at the start of the game.
const profileEl = document.querySelector('.profile'); // link to img div
const answersEl = document.querySelector('#answers-section'); // link to answers grid 
const pointsEl = document.querySelector('#points'); // link to points counter


let score = 0;
let maxpoints = students.length;
let allStudents;
let currentStudentIndex = 0;

// variables related to answers
const studentNames = students.map(student => student.name); // map out just student names // test

let correctName; // correct name
let falseNames; // 3 incorrect names
let answers; // all 3 names togehter


//function to shuffle whatever I want
const shuffledStudents = (array) => {                    
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};  

shuffledStudents(students); // test
// console.log(students);

// // // test for 10 students 
const students10 = [...students];

let example10 = students10.slice(0,10);
console.log(example10);
// example10.push(allStudents);

// console.log(example10);
    //const students10name = students10.map(student => student.name);
// console.log(students10name);


// // // test for 20 students 
const students20 = [...students];

let example20 = students20.slice(0,20);
console.log(example20);
 
// Function to start the game
startButtonEl.addEventListener('click', startGame);

function startGame() {
    console.log("game has started");
    startButtonEl.classList.add('hide');   // hides start button once game has started! // need to show when pictures run out
    quizformEl.classList.remove('hide'); // picture & 4 name optons are shown    
    displayCurrentStudent()  
}

const updatePoints = (pointsGained) => {
    
    pointsEl.innerText = `${pointsGained} points out of a maximum of ${maxpoints} points!`;
}
function displayCurrentStudent(){
    
    const currentStudentPicture = students[currentStudentIndex].image // gets current student picture
    // let image = currentStudentPicture.image;                           // gets image of student
    profileEl.innerHTML = `<img src="students/${currentStudentPicture}" alt="Picture of student" width="300px"></img>`; // pastes into DOM

    // section on iterating through array, grabbing & filtering the right name, shuffling the remaining names,  merging correct  & inncorrect names together
    correctName = students[currentStudentIndex].name;
    console.log(correctName);                       // test to see if name matches with picture
    allStudents = students.map(student => student.name);              // we map out the just student names
    console.log("all students are listed: ", allStudents);
    let testcorrectName = correctName;
    console.log("the correct name is ", testcorrectName);
    falseNames = allStudents
        .filter( notCorrect => notCorrect !== testcorrectName )
        .sort ( () => 0.5 - Math.random()) // is this shuffle enough?
        .slice(1,4);

    console.log("false names are: ",falseNames); 
    falseNames.push(correctName);
    const answers = falseNames.sort ( () => 0.5 - Math.random());
    console.log(answers); // maybe change the name of this variable? misleading.

    // section on printing names to DOM
    // styling is awful, need to clean it up
    answersEl.innerHTML = `
    <input type="button" name="student-name" value="${answers[0]}" id="${answers[0]}">
    <input type="button" name="student-name" value="${answers[1]}" id="${answers[1]}">
    <input type="button" name="student-name" value="${answers[2]}" id="${answers[2]}">
    <input type="button" name="student-name" value="${answers[3]}" id="${answers[3]}">
    `
    const students10 = [...students];

// let example10 = students10.slice(0,10);
// console.log(example10);
// example10.push(studentNames);
// console.log(example10);
}
//displayCurrentStudent(); // renders initial student

// listen for choices   
quizformEl.addEventListener('submit', e => {
    e.preventDefault();
    console.log("submit button clicked");
    currentStudentIndex ++;
    displayCurrentStudent(); // displays the next picture. 
    

    
    console.log("current student index: ", currentStudentIndex);
    console.log("all students ", allStudents.length);
   
    if( currentStudentIndex >= allStudents.length -1) { 
        console.log ("game over!");
        answersEl.classList.add('hide');
        profileEl.classList.add('hide');
        const submitEl = document.querySelector('#submit');
        submitEl.classList.add('hide');
    }
    
    
    // when the pictures run out offer score! 
})

answersEl.addEventListener('click', (e) => {
    
    console.log(e, e.target.id); // this shows where user has clicked in entire div!
    if(correctName === e.target.id) {
        alert("you clicked the correct name!");
        score ++;
        updatePoints(score);
        // answersEl.classList.add('hide');
        
       
    } else {
        // answersEl.classList.add('hide');
        updatePoints(score);
       // move on to next picture
    }
});

