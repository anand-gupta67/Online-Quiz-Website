const quizData = {
    java: [
        {q: "What is the size of int in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], correct: 1},
        {q: "Which keyword is used for inheritance in Java?", options: ["implements", "extends", "inherits", "super"], correct: 1},
        {q: "What is the default value of boolean in Java?", options: ["true", "false", "null", "0"], correct: 1},
        {q: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "init()"], correct: 1},
        {q: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Verified Mode", "Java Version Manager"], correct: 0},
        {q: "Which is not a primitive data type?", options: ["int", "String", "char", "boolean"], correct: 1},
        {q: "What is used to create an object in Java?", options: ["new", "create", "make", "build"], correct: 0},
        {q: "Which collection allows duplicate elements?", options: ["Set", "Map", "List", "HashSet"], correct: 2},
        {q: "What is the parent class of all classes?", options: ["System", "Main", "Object", "Class"], correct: 2},
        {q: "Which keyword prevents inheritance?", options: ["static", "final", "private", "sealed"], correct: 1},
        {q: "What is used for exception handling?", options: ["if-else", "try-catch", "switch", "loop"], correct: 1},
        {q: "Which is a marker interface?", options: ["Runnable", "Serializable", "Comparable", "Cloneable"], correct: 1},
        {q: "What does == compare in objects?", options: ["Values", "References", "Content", "Types"], correct: 1},
        {q: "Which keyword is used for multithreading?", options: ["async", "thread", "synchronized", "parallel"], correct: 2},
        {q: "What is the range of byte?", options: ["-128 to 127", "0 to 255", "-256 to 255", "0 to 127"], correct: 0},
        {q: "Which is not an access modifier?", options: ["public", "private", "protected", "package"], correct: 3},
        {q: "What is method overloading?", options: ["Same name, different parameters", "Different name, same parameters", "Same everything", "Different return type"], correct: 0},
        {q: "Which loop checks condition at end?", options: ["for", "while", "do-while", "foreach"], correct: 2},
        {q: "What is autoboxing?", options: ["Auto imports", "Primitive to wrapper", "Exception handling", "Garbage collection"], correct: 1},
        {q: "Which keyword creates a constant?", options: ["const", "final", "static", "immutable"], correct: 1}
    ],
    cpp: [
        {q: "What does C++ support that C doesn't?", options: ["Pointers", "OOP", "Functions", "Loops"], correct: 1},
        {q: "Which operator is used for dynamic memory?", options: ["malloc", "new", "alloc", "create"], correct: 1},
        {q: "What is the size of pointer in 64-bit system?", options: ["4 bytes", "8 bytes", "16 bytes", "2 bytes"], correct: 1},
        {q: "Which is the default access specifier?", options: ["public", "private", "protected", "internal"], correct: 1},
        {q: "What is a pure virtual function?", options: ["virtual void f()", "virtual void f() = 0", "void f() = 0", "pure void f()"], correct: 1},
        {q: "Which header file for input/output?", options: ["stdio.h", "iostream", "io.h", "stream.h"], correct: 1},
        {q: "What is the scope resolution operator?", options: ["::", ".", "->", "::>"], correct: 0},
        {q: "Which is used for exception handling?", options: ["try-catch", "if-else", "switch", "handle"], correct: 0},
        {q: "What is a friend function?", options: ["Member function", "Non-member accessing private", "Static function", "Virtual function"], correct: 1},
        {q: "Which keyword prevents inheritance?", options: ["sealed", "final", "private", "const"], correct: 1},
        {q: "What is polymorphism?", options: ["One form", "Many forms", "No form", "Two forms"], correct: 1},
        {q: "Which is correct syntax for destructor?", options: ["~ClassName()", "delete ClassName()", "destroy()", "free()"], correct: 0},
        {q: "What does endl do?", options: ["End file", "New line and flush", "Just new line", "End loop"], correct: 1},
        {q: "Which is an STL container?", options: ["array", "vector", "list", "All of these"], correct: 3},
        {q: "What is function overloading?", options: ["Same name, different parameters", "Different name, same parameters", "Same everything", "Different classes"], correct: 0},
        {q: "Which is used for inheritance?", options: ["extends", ":", "implements", "inherits"], correct: 1},
        {q: "What is a reference variable?", options: ["Alias", "Pointer", "Copy", "Constant"], correct: 0},
        {q: "Which access is most restrictive?", options: ["public", "protected", "private", "internal"], correct: 2},
        {q: "What is multiple inheritance?", options: ["One parent", "Many parents", "No parents", "Two children"], correct: 1},
        {q: "Which is correct for namespace?", options: ["using namespace std;", "import std;", "include std;", "namespace std;"], correct: 0}
    ],
    python: [
        {q: "Which is the correct extension for Python?", options: [".py", ".python", ".pt", ".pyt"], correct: 0},
        {q: "What is used for comments in Python?", options: ["//", "/**/", "#", "<!-- -->"], correct: 2},
        {q: "Which is mutable in Python?", options: ["tuple", "string", "list", "int"], correct: 2},
        {q: "What is the output of print(type([]))?", options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"], correct: 1},
        {q: "Which keyword defines a function?", options: ["function", "def", "func", "define"], correct: 1},
        {q: "What is used for floor division?", options: ["/", "//", "%", "div"], correct: 1},
        {q: "Which is not a Python data type?", options: ["list", "dictionary", "array", "tuple"], correct: 2},
        {q: "What does len() return for 'Hello'?", options: ["4", "5", "6", "Error"], correct: 1},
        {q: "Which is used for exception handling?", options: ["try-except", "try-catch", "if-error", "handle"], correct: 0},
        {q: "What is self in Python?", options: ["Keyword", "Instance reference", "Static variable", "Function"], correct: 1},
        {q: "Which creates a set?", options: ["[]", "{}", "()", "set()"], correct: 3},
        {q: "What is lambda in Python?", options: ["Loop", "Anonymous function", "Variable", "Class"], correct: 1},
        {q: "Which is correct for list slicing?", options: ["list[1:3]", "list{1:3}", "list(1:3)", "list<1:3>"], correct: 0},
        {q: "What does ** operator do?", options: ["Multiply", "Power", "Divide", "Concatenate"], correct: 1},
        {q: "Which is used for importing?", options: ["include", "import", "require", "use"], correct: 1},
        {q: "What is None in Python?", options: ["0", "Empty string", "Null value", "False"], correct: 2},
        {q: "Which method adds to list end?", options: ["add()", "append()", "push()", "insert()"], correct: 1},
        {q: "What is __init__?", options: ["Destructor", "Constructor", "Method", "Variable"], correct: 1},
        {q: "Which is correct for dictionary?", options: ["{'a': 1}", "['a': 1]", "('a': 1)", "<'a': 1>"], correct: 0},
        {q: "What does range(5) produce?", options: ["1 to 5", "0 to 4", "0 to 5", "1 to 4"], correct: 1}
    ],
    javascript: [
        {q: "Which is used to declare a variable?", options: ["var", "int", "string", "variable"], correct: 0},
        {q: "What is the output of typeof []?", options: ["array", "object", "list", "Array"], correct: 1},
        {q: "Which is not a JavaScript data type?", options: ["undefined", "number", "float", "boolean"], correct: 2},
        {q: "What does === check?", options: ["Value only", "Type only", "Value and type", "Reference"], correct: 2},
        {q: "Which method adds to array end?", options: ["add()", "push()", "append()", "insert()"], correct: 1},
        {q: "What is closure in JavaScript?", options: ["Loop", "Function with lexical scope", "Class", "Object"], correct: 1},
        {q: "Which is correct for function?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "fn myFunc()"], correct: 0},
        {q: "What is NaN?", options: ["Not a Number", "Null and None", "New Array Number", "Not Available"], correct: 0},
        {q: "Which is used for iteration?", options: ["for", "foreach", "iterate", "All of these"], correct: 0},
        {q: "What does JSON stand for?", options: ["JavaScript Object Notation", "JavaScript Online Network", "Java Standard Object Notation", "JavaScript Order Number"], correct: 0},
        {q: "Which is asynchronous?", options: ["setTimeout()", "console.log()", "Math.random()", "parseInt()"], correct: 0},
        {q: "What is arrow function syntax?", options: ["=> {}", "-> {}", "() => {}", "function() {}"], correct: 2},
        {q: "Which is not a loop?", options: ["for", "while", "foreach", "repeat"], correct: 3},
        {q: "What does 'this' refer to?", options: ["Current object", "Previous object", "Global object", "Window object"], correct: 0},
        {q: "Which creates an object?", options: ["{}", "[]", "()", "new Object()"], correct: 0},
        {q: "What is hoisting?", options: ["Variable declaration moved up", "Function execution", "Loop iteration", "Event handling"], correct: 0},
        {q: "Which is correct for string?", options: ["'Hello'", "Hello", "<Hello>", "[Hello]"], correct: 0},
        {q: "What does .map() do?", options: ["Creates new array", "Modifies original", "Filters array", "Sorts array"], correct: 0},
        {q: "Which is falsy value?", options: ["0", "1", "'false'", "[]"], correct: 0},
        {q: "What is Promise used for?", options: ["Loops", "Async operations", "Variables", "Functions"], correct: 1}
    ]
};
let currentLang = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;
let totalTime = 0;
let answered = false;
let startTime;
function startQuiz(lang) {
    currentLang = lang;
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 0;
    startTime = Date.now();
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('quizSection').classList.add('active');
    document.getElementById('totalQ').textContent = quizData[lang].length;
    loadQuestion();
    startTimer();
}
function loadQuestion() {
    answered = false;
    timeLeft = 60;
    const question = quizData[currentLang][currentQuestionIndex];
    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.q;
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.onclick = () => selectOption(index);
        optionsContainer.appendChild(div);
    });
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === quizData[currentLang].length - 1 ? 'Finish Quiz' : 'Next Question';
}
function selectOption(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const question = quizData[currentLang][currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    options.forEach((opt, idx) => {
        if (idx === question.correct) {
            opt.classList.add('correct');
        }
        if (idx === selectedIndex && idx !== question.correct) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });
    if (selectedIndex === question.correct) {
        score++;
        feedback.textContent = '✅ Correct! Great job!';
        feedback.className = 'feedback show correct';
    } else {
        feedback.textContent = `❌ Incorrect. The correct answer is: ${question.options[question.correct]}`;
        feedback.className = 'feedback show incorrect';
    }
}
function nextQuestion() {
    if (!answered) {
        alert('Please select an answer first!');
        return;
    }
    
    if (currentQuestionIndex < quizData[currentLang].length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}
function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').textContent = timeLeft;
        if (timeLeft <= 10) {
            document.getElementById('timeLeft').style.color = '#dc3545';
        } else {
            document.getElementById('timeLeft').style.color = 'white';
        }
        
        if (timeLeft <= 0) {
            if (!answered) {
                answered = true;
                document.getElementById('feedback').textContent = '⏰ Time\'s up!';
                document.getElementById('feedback').className = 'feedback show incorrect';
                
                const question = quizData[currentLang][currentQuestionIndex];
                const options = document.querySelectorAll('.option');
                options.forEach((opt, idx) => {
                    if (idx === question.correct) {
                        opt.classList.add('correct');
                    }
                    opt.style.pointerEvents = 'none';
                });
            }
        }
    }, 1000);
}
function finishQuiz() {
    clearInterval(timer);
    totalTime = Math.floor((Date.now() - startTime) / 1000);
    
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('resultsSection').classList.add('active');
    
    const percentage = Math.round((score / quizData[currentLang].length) * 100);
    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = quizData[currentLang].length - score;
    
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeDisplay = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    document.getElementById('timeTaken').textContent = timeDisplay;
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Outstanding! You\'re a master!';
    } else if (percentage >= 70) {
        message = '🎉 Great job! Keep it up!';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Practice more!';
    } else {
        message = '📚 Keep learning! You\'ll improve!';
    }
    document.getElementById('scoreMessage').textContent = message;
}
function backToLanguages() {
    clearInterval(timer);
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('languageSelection').style.display = 'grid';
}
function restartQuiz() {
    document.getElementById('resultsSection').classList.remove('active');
    document.getElementById('languageSelection').style.display = 'grid';
}
document.addEventListener('keydown', (event) => {
    if (!document.getElementById('quizSection').classList.contains('active')) {
        return;
    }
    if (event.key >= '1' && event.key <= '4' && !answered) {
        const index = parseInt(event.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[index]) {
            selectOption(index);
        }
    }
    if (event.key === 'Enter' && answered) {
        nextQuestion();
    }
});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
document.addEventListener('contextmenu', (event) => {
    if (document.getElementById('quizSection').classList.contains('active')) {
        event.preventDefault();
    }
});
document.addEventListener('visibilitychange', () => {
    if (document.hidden && document.getElementById('quizSection').classList.contains('active')) {
        console.log('User switched tabs');   
    }
});

console.log('Quiz App Loaded Successfully! 🎯');