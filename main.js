// DOM variables
const startButtonEl = document.querySelector("#btn-start"); // . grab start button
const nextbuttonEl = document.querySelector(".btn-next"); // grab nxt button
const quizformEl = document.querySelector("#quiz-form"); //grab the entire question container. hidden at the start of the game.
const testAddName = document.querySelector(".option-1")


const testUL = document.querySelector("#ultag");
const profileEl = document.querySelector('.profile'); // link to img div
const answersEl = document.querySelector('.answers-section'); // link to answers grid greyed out whislt testing foreach

let currentStudentIndex = 0;

// variables related to answers
let correctName; // correct name
let falseNames; // 3 incorrect names
let answers; // all 3 names togehter

// Variables, other


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
 
// Function to start the game
startButtonEl.addEventListener('click', startGame);

function startGame() {
    console.log("game has started");
    startButtonEl.classList.add('hide');   // hides start button once game has started! 
    quizformEl.classList.remove('hide'); // picture & 4 name optons are shown      
}

function displayCurrentStudent(){
    
    const currentStudentPicture = students[currentStudentIndex] // gets current student picture
    const image = currentStudentPicture.image;                           // gets image of student
    profileEl.innerHTML = `<img src="students/${image}" alt="Picture of student" width="300px"></img>`; // pastes into DOM
 
    correctName = students[currentStudentIndex].name;
     
    console.log(correctName);                       // test to see if name matches with picture

    const allStudents = students.map(student => student.name);              // we map out the just student names
    console.log("all students are listed: ", allStudents);
    let testcorrectName = correctName;
    console.log("the correct name is ", testcorrectName);
    falseNames = allStudents.slice(1,4); 
    falseNames.push(correctName); 
                                // this is bad and will need to be changed for some sort of condition
    //answers = testcorrectName.concat(falseNames); 
    console.log(falseNames); 

// working on printing name to buttons

//optionAEl.innerHTML = `<label id="option-1" class="form-check-label option" for="">${correctName}</label>`; // pastes into DOM
    // testAddName.innerHTML = `<input type="button" name="student-name" value="${correctName}" class="option-1"></input>`;
       
}
displayCurrentStudent(); // renders initial student

// listen for choices   
quizformEl.addEventListener('submit', e => {
    e.preventDefault();
    console.log("submit button clicked");
    currentStudentIndex ++;
    displayCurrentStudent(); // displays the next picture. 

    // when the pictures run out offer score! 
})

function selectName() {                             // here player selects which name they think is true

}


