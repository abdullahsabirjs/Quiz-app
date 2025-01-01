const quizData = {
    HTML: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None of the above"],
          correct: 0
        },
        {
          question: "Which of the following is a valid HTML tag?",
          options: ["<div>", "<section>", "<span>", "<all of the above>"],
          correct: 3
        },
        {
          question: "What is the correct HTML tag for inserting a line break?",
          options: ["<break>", "<br>", "<lb>", "<hr>"],
          correct: 1
        },
        {
          question: "Which attribute is used to define the background color in HTML?",
          options: ["bgcolor", "background", "color", "bg"],
          correct: 0
        },
        {
          question: "Which tag is used to create a hyperlink in HTML?",
          options: ["<a>", "<link>", "<href>", "<url>"],
          correct: 0
        },
        {
          question: "What is the correct HTML tag for inserting an image?",
          options: ["<image>", "<src>","<img>", "<picture>"],
          correct: 2
        },
        {
          question: "Which tag is used for creating an unordered list?",
          options: ["<ul>", "<ol>", "<li>", "<list>"],
          correct: 0
        },
        {
          question: "Which tag is used for creating an ordered list?",
          options: ["<ul>", "<ol>", "<li>", "<list>"],
          correct: 1
        },
        {
          question: "Which HTML element is used to define important text?",
          options: ["<b>", "<i>","<strong>", "<important>"],
          correct: 2
        },
        {
          question: "What is the correct HTML tag for inserting a table?",
          options: ["<table>", "<tab>", "<tr>", "<thead>"],
          correct: 0
        },
        {
          question: "Which HTML tag is used to define the largest heading?",
          options: ["<h2>","<h1>", "<h3>", "<h4>"],
          correct: 1
        },
        {
          question: "What does the <meta> tag define in HTML?",
          options: ["Metadata about the document", "Styles of the document", "Content of the document", "None of the above"],
          correct: 0
        },
        {
          question: "Which HTML tag is used to define a paragraph?",
          options: ["<p>", "<para>", "<text>", "<div>"],
          correct: 0
        },
        {
          question: "What is the purpose of the <form> tag in HTML?",
          options: ["To display text", "To add an image", "To link to another page","To create a form for user input"],
          correct: 3
        },
        {
          question: "Which attribute is used to specify the source of an image in HTML?",
          options: ["href","src", "link", "url"],
          correct: 1
        }
      ],      
    
      CSS: [
        {
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Creative Style Sheets", "None of the above","Cascading Style Sheets"],
          correct: 3
        },
        {
          question: "Which property is used to change the background color in CSS?",
          options: ["bgcolor", "background-color", "color", "background"],
          correct: 1
        },
        {
          question: "Which property is used to change the font size in CSS?",
          options: ["font-size", "text-size", "font", "size"],
          correct: 0
        },
        {
          question: "Which property is used to change the text color in CSS?",
          options: ["text-color","color", "font-color", "bg-color"],
          correct: 1
        },
        {
          question: "Which CSS property is used to add space between elements?",
          options: ["padding", "spacing", "margin", "gap"],
          correct: 2
        },
        {
          question: "Which CSS property is used to set the font family?",
          options: ["font-family", "font-style", "font-type", "text-font"],
          correct: 0
        },
        {
          question: "Which CSS property is used to control the spacing between lines of text?",
          options: ["text-spacing", "line-height","letter-spacing", "text-line"],
          correct: 1
        },
        {
          question: "How do you add a background image in CSS?",
          options: ["background-image: url('image.jpg')", "bg-image: url('image.jpg')", "background: url('image.jpg')", "image-background: url('image.jpg')"],
          correct: 0
        },
        {
          question: "Which property is used to create a border around an element in CSS?",
          options: ["border", "border-style", "border-color", "outline"],
          correct: 0
        },
        {
          question: "Which CSS property is used to change the display of an element?",
          options: ["visibility", "show", "position","display"],
          correct: 3
        },
        {
          question: "Which CSS property is used to align text in the center?",
          options: ["text-align", "align-text", "center-align", "align"],
          correct: 0
        },
        {
          question: "Which CSS selector is used to select all paragraphs in a document?",
          options: [".p", "#p","p", "all-p"],
          correct: 2
        },
        {
          question: "Which CSS property is used to make text bold?",
          options: ["font-weight", "text-weight", "font-style", "text-bold"],
          correct: 0
        },
        {
          question: "Which CSS property is used to set the width of an element?",
          options: ["width", "height", "size", "dimension"],
          correct: 0
        },
        {
          question: "How do you create a comment in CSS?",
          options: ["// comment", "# comment", "<!-- comment -->","/* comment */"],
          correct: 3
        }
      ],      
      JavaScript: [
        {
          question: "What is the correct syntax to print a message in JavaScript?",
          options: ["echo('Hello World')", "console.log('Hello World')", "print('Hello World')", "None of the above"],
          correct: 1
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Netscape", "Microsoft", "Google", "Oracle"],
          correct: 0
        },
        {
          question: "What is the correct way to create a variable in JavaScript?",
          options: ["var x;", "let x;", "const x;", "All of the above"],
          correct: 3
        },
        {
          question: "Which operator is used to assign a value to a variable in JavaScript?",
          options: ["=", "==", "===", ":="],
          correct: 0
        },
        {
          question: "Which of the following is a JavaScript data type?",
          options: ["String", "Integer", "Boolean", "All of the above"],
          correct: 3
        },
        {
          question: "Which method is used to add an element at the end of an array in JavaScript?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correct: 0
        },
        {
          question: "Which of the following is a loop in JavaScript?",
          options: ["for", "while", "do-while", "All of the above"],
          correct: 3
        },
        {
          question: "Which function is used to parse a string into an integer in JavaScript?",
          options: ["parseFloat()","parseInt()", "toInt()", "toNumber()"],
          correct: 1
        },
        {
          question: "What is the correct syntax for a function in JavaScript?",
          options: ["function myFunction() {}", "function: myFunction() {}", "def myFunction() {}", "None of the above"],
          correct: 0
        },
        {
          question: "Which keyword is used to create a constant in JavaScript?",
          options: ["var", "let", "const", "constant"],
          correct: 2
        },
        {
          question: "Which of the following is not a JavaScript framework?",
          options: ["React", "Angular", "Vue", "Node.js"],
          correct: 3
        },
        {
          question: "Which method is used to remove the last element from an array in JavaScript?",
          options: ["pop()", "shift()", "unshift()", "push()"],
          correct: 0
        },
        {
          question: "Which of the following is used to call a function in JavaScript?",
          options: ["()", "{}", "[]", "<>"],
          correct: 0
        },
        {
          question: "What is the correct way to define a class in JavaScript?",
          options: ["class MyClass {}", "class: MyClass {}", "define MyClass {}", "None of the above"],
          correct: 0
        },
        {
          question: "What does 'this' refer to in JavaScript?",
          options: ["The parent object", "The global object","The current object",  "None of the above"],
          correct: 2
        }
      ],      
      Python: [
        {
          question: "What is the correct way to define a function in Python?",
          options: ["function myFunction()", "def myFunction():", "func myFunction():", "None of the above"],
          correct: 1
        },
        {
          question: "Which of the following is used to declare a variable in Python?",
          options: ["var", "let", "const", "None of the above"],
          correct: 3
        },
        {
          question: "What is the correct syntax to output 'Hello World' in Python?",
          options: ["echo('Hello World')", "print('Hello World')", "console.log('Hello World')", "write('Hello World')"],
          correct: 1
        },
        {
          question: "Which of the following is not a valid data type in Python?",
          options: ["int", "float", "boolean", "real"],
          correct: 3
        },
        {
          question: "Which keyword is used to create a function in Python?",
          options: ["def", "function", "func", "define"],
          correct: 0
        },
        {
          question: "Which of the following is used to create a list in Python?",
          options: ["[]", "{}", "()", "<>", ],
          correct: 0
        },
        {
          question: "Which of the following is used to comment in Python?",
          options: ["//", "/* */", "#", "<!-- -->"],
          correct: 2
        },
        {
          question: "Which function is used to find the length of a list in Python?",
          options: ["len()", "length()", "size()", "count()"],
          correct: 0
        },
        {
          question: "Which of the following is a correct way to open a file in Python?",
          options: ["open('file.txt')", "open('file.txt', 'r')", "file.open('file.txt')", "open('file.txt', 'read')"],
          correct: 1
        },
        {
          question: "Which of the following methods is used to remove an item from a list in Python?",
          options: ["remove()", "pop()", "del()", "All of the above"],
          correct: 3
        },
        {
          question: "Which of the following is used to create a dictionary in Python?",
          options: ["{}", "[]", "()", "<>"],
          correct: 0
        },
        {
          question: "Which of the following is used to import a module in Python?",
          options: ["include module", "using module", "import module", "require module"],
          correct: 2
        },
        {
          question: "Which function is used to get the current working directory in Python?",
          options: ["os.getcwd()", "os.getwd()", "os.current()", "os.getdir()"],
          correct: 0
        },
        {
          question: "Which of the following is used to check if a value exists in a list in Python?",
          options: ["exist","in", "contains", "has"],
          correct: 1
        }
      ]      
  };
  
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 300; // 15 minutes
  let timerInterval;
  function startQuiz(category) {
    currentCategory = category;
    document.getElementById("category-selection").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    // Show the reset button
  const resetButton = document.getElementById('reset-btn');
  resetButton.style.visibility = 'visible';
    
    startTimer();
    showQuestion();
  }
  
  
  function startTimer() {
    const timerElement = document.getElementById("timer");
  
    timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        showTimeOver(); // Call the function to show "Time Over" message
        showResults();
      }
    }, 1000);
  }
  
  function showTimeOver() {
    // Show a "Time Over" message
    const timeOverMessage = document.createElement("div");
    timeOverMessage.textContent = "Time Over!";
    timeOverMessage.classList.add("time-over-message");
    document.getElementById("quiz-container").appendChild(timeOverMessage);
  }
  
  function showQuestion() {
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1; // Adding 1 to start from 1 instead of 0
    document.getElementById("question-number").textContent = `Q.${questionNumber}`; // Display question number
    document.getElementById("question").textContent = currentQuestion.question;
  
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectOption(index, button));
      optionsElement.appendChild(button);
    });
  
    document.getElementById("next-btn").classList.add("hidden");
  }
  
  function selectOption(selectedIndex, button) {
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
  
    // Disable all options after selection and prevent hover
    const options = document.querySelectorAll("#options button");
    options.forEach((btn) => {
      btn.disabled = true; // Disable button
      btn.classList.add("no-hover"); // Prevent hover
    });
  
    // Check if the selected answer is correct or wrong
    if (selectedIndex === currentQuestion.correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
  
      // Highlight the correct answer in green
      const correctButton = options[currentQuestion.correct];
      correctButton.classList.add("correct");
    }
  
    // Show the next button
    document.getElementById("next-btn").classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData[currentCategory].length) {
      showQuestion();
    } else {
      clearInterval(timerInterval);
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").textContent = `Your score is ${score} out of ${quizData[currentCategory].length}`;
  }
  
  // Theme toggle functionality
  document.getElementById("toggle-theme").addEventListener("change", (e) => {
    const body = document.body;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  });
  function resetQuiz() {
    // Reset all variables and hide/show necessary elements
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 900; // 15 minutes
    clearInterval(timerInterval);
    
    // Hide quiz and result containers
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.add("hidden");
    
    // Show category selection
    document.getElementById("category-selection").classList.remove("hidden");
    
    // Reset timer display
    document.getElementById("timer").textContent = "Time Left: 15:00";
    
    // Reset question number and question text
    document.getElementById("question-number").textContent = "";
    document.getElementById("question").textContent = "";
    
    // Reset options
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    
    const resetButton = document.getElementById('reset-btn');
    resetButton.style.visibility = 'hidden';
    
    // Hide the next button
    document.getElementById("next-btn").classList.add("hidden");
  }
  