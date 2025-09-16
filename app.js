const quizData = [
  {
    question: "Q1. What type of node is <div> element in the DOM?",
    options: ["A) Attribute node", "B) Text node", "C) Element node", "D) Comment node"],
    answer: 2
  },
  {
    question: "Q2. Which function sets a style dynamically?",
    options: ["A) element.style(property)", "B) element.style.property.value", "C) set.style(element)", "D) change.style(element)"],
    answer: 1
  },
  {
    question: "Q3. If you call Math.random() multiple times what can you generally expect?",
    options: ["A) Same value each time", "B) Different value", "C) Syntax error", "D) Undefined"],
    answer: 1
  },
  {
    question: "Q4. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["A) If i <> 5", "B) If(i<>5)", "C) If I -!5", "D) IF(i!=5)"],
    answer: 3
  },
  {
    question: "Q5. What method swaps an image in JavaScript?",
    options: ["A) Setimage", "B) Get image", "C) Changeimage", "D) Element src= 'newimage.jpg'"],
    answer: 3
  },
  {
    question: "Q6. Which statement describes the difference between == and ===?",
    options: ["A) Both compare value and type", "B) == compare value; === compare reference", "C) == compares type; === compare value", "D) == compare value; === compare value and type"],
    answer: 3
  },
  {
    question: "Q7. What is the output?\nfunction add(a,b){ return a+b; }\nconsole.log(add(2,3));",
    options: ["A) Undefined", "B) NaN", "C) 23", "D) 5"],
    answer: 3
  },
  {
    question: "Q8. How can you change a style of an element?",
    options: ["A) element.style('color.red')", "B) element.style.color= 'red';", "C) change.color('red')", "D) style.element=red;"],
    answer: 1
  },
  {
    question: "Q9. What happens if you forget break in a switch case?",
    options: ["A) Syntax error", "B) Switch end", "C) Nothing runs", "D) Fall through to the next case"],
    answer: 3
  },
  {
    question: "Q10. What is the purpose of default in switch?",
    options: ["A) To run if no match found", "B) To break the switch", "C) To declare variables", "D) To start switch statement"],
    answer: 0
  },
  {
    question: "Q11. let num = -1; if(num) console.log('number exists'); else console.log('no number');",
    options: ["A) Number exists", "B) No number", "C) Error", "D) Undefined"],
    answer: 0
  },
  {
    question: "Q12. Which line of code would replace the content of a webpage with 'prince'?",
    options: ["A) document.body.html('Khaan')", "B) document.body.html 'Khaan';", "C) document.body.innerhtml 'Khaan'", "D) document.innerhtml 'Khaan';"],
    answer: 1
  },
  {
    question: "Q13. How to change an image src and its class name simultaneously?",
    options: ["A) document.getElementById('img').className='newClass';", "B) document.getElementById('img').src='new.jpg';", "C) Both A and B", "D) None of the above"],
    answer: 2
  },
  {
    question: "Q14. let a; console.log(a);",
    options: ["A) undefined", "B) null", "C) 0", "D) Error"],
    answer: 0
  },
  {
    question: "Q15. What is the purpose of a function in JavaScript?",
    options: ["A) To group reusable code and execute it when called", "B) To declare variables", "C) To compare values", "D) To create arrays"],
    answer: 0
  },
  {
    question: "Q16. Which command creates a new button?",
    options: ["A) document.createButton()", "B) document.createElement('button')", "C) create.button()", "D) new Button()"],
    answer: 1
  },
  {
    question: "Q17. What event is triggered when the mouse enters an element?",
    options: ["A) onmouseover", "B) onmousedown", "C) onmouseout", "D) onclick"],
    answer: 0
  },
  {
    question: "Q18. innerHTML can read/write HTML content of an element?",
    options: ["A) True", "B) False"],
    answer: 0
  },
  {
    question: "Q19. Which event is used when the mouse leaves an element?",
    options: ["A) onmouseover", "B) onmouseout", "C) onclick", "D) onmouseenter"],
    answer: 1
  },
  {
    question: "Q20. Alerts\nWhich function is used to display a simple alert box?",
    options: ["A) alert()", "B) prompt()", "C) confirm()", "D) console.log()"],
    answer: 0
  },
  {
    question: "Q21. Variables for Strings\nWhich is the correct way to declare a string variable?",
    options: ["A) var name = 'John';", "B) var name = John;", "C) var name = 123;", "D) var name = true;"],
    answer: 0
  },
  {
    question: "Q22. Variables for Numbers\nWhich is a valid number assignment?",
    options: ["A) var num = 10;", "B) var num = '10';", "C) var num = true;", "D) var num = John;"],
    answer: 0
  },
  {
    question: "Q23. Variable Names Legal and Illegal\nWhich variable name is illegal?",
    options: ["A) var total;", "B) var _count;", "C) var 2value;", "D) var value2;"],
    answer: 2
  },
  {
    question: "Q24. Math Expressions: familiar operators\nWhich operator is used for addition?",
    options: ["A) +", "B) -", "C) *", "D) /"],
    answer: 0
  },
  {
    question: "Q25. Math Expressions: unfamiliar operators\nWhich operator returns the remainder of division?",
    options: ["A) %", "B) +", "C) *", "D) -"],
    answer: 0
  },
  {
    question: "Q26. Math Expressions: eliminating ambiguity\nWhich symbol is used for grouping expressions?",
    options: ["A) ()", "B) {}", "C) []", "D) <>"],
    answer: 0
  },
  {
    question: "Q27. Concatenating text strings\nWhat will 'Hello' + 'World' return?",
    options: ["A) HelloWorld", "B) Hello World", "C) Hello+World", "D) Error"],
    answer: 0
  },
  {
    question: "Q28. Prompts\nWhich function is used to take input from the user?",
    options: ["A) prompt()", "B) alert()", "C) confirm()", "D) console.log()"],
    answer: 0
  },
  {
    question: "Q29. If statements\nWhich keyword is used to make decisions?",
    options: ["A) if", "B) else", "C) switch", "D) for"],
    answer: 0
  },
  {
    question: "Q30. Comparison operators\nWhich operator is used to check equality without type conversion?",
    options: ["A) ===", "B) ==", "C) =", "D) !="],
    answer: 0
  },
  {
    question: "Q31. if...else and else if statements\nWhich keyword is used to provide an alternative block of code if the condition is false?",
    options: ["A) else", "B) if", "C) switch", "D) case"],
    answer: 0
  },
  {
    question: "Q32. Testing sets of conditions\nWhich operator represents logical AND?",
    options: ["A) &&", "B) ||", "C) !", "D) &"],
    answer: 0
  },
  {
    question: "Q33. If statements nested\nWhat do we call an if statement inside another if statement?",
    options: ["A) Nested if", "B) Double if", "C) Multi if", "D) Complex if"],
    answer: 0
  }
];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    optionsEl.innerHTML = '';
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    q.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerText = optionText;
        button.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(button);
    });

    nextBtn.style.display = 'none';
}

function selectOption(selectedIndex) {
    const correctIndex = quizData[currentQuestion].answer;
    const buttons = document.querySelectorAll('.option');

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('wrong');
        }
    });

    if (selectedIndex === correctIndex) score++;  // Score increment

    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.innerText = `Quiz Completed! Your score: ${score}/${quizData.length}`;
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
}

loadQuestion();
