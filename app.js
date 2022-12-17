const quizData = [{
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
   {
        question: "Where is the correct place to insert a javascript?",
        a: "The <body> Section",
        b: "The <head> section",
        c: "Both <head> and <body> section",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "which HTML tag is used to define an internal style sheet?",
        a: "<css>",
        b: "<script>",
        c: "<style>",
        d: "<js>",
        correct: "b",
    },
    {
        question: "How do you create a function in Javascript",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function : myFunction()",
        d: "Function MyFunction()",
        correct: "b",
    },
    {
        question: "How do you call a function named myFunction?",
        a: "myFunction()",
        b: "cal function myFunction()",
        c: "call myFunction()",
        d: "function call()",
        correct: "a",
    },
    {
        question: "which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        d: ":",
        correct: "a",
    },
    {
        question : "How can you make a numbered list?",
        a: "<list>",
        b: "<ul>",
        c: "<ol>",
        d: "<dl>",
        correct: "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total == index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
            <h3>Thanks for playing this Quiz</h3>
        </div>
    `
}
loadQuestion(index);