const FAQs = [
    {
        question: "What is HTML?",
        answer: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
    },
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
    },
    {
        question: "What is React?",
        answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
        question: "What is Bootstrap?",
        answer: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
    }
]

let article;
for (let i = 0; i < FAQs.length; i++) {
    articleContainer = document.createElement('div');
    articleContainer.innerHTML = `
    <article class="question">
            <div class="question-title">
                <span>${FAQs[i].question}</span>
                <span class="toggle-answer">
                    <span class="expandFAQ">▼</span>
                    <span class="closeFAQ">▲</span>
                </span>
            </div>
            <div class="question-text">
                <span>${FAQs[i].answer}</span>
            </div>
        </article>`
    document.getElementById('FAQs').append(articleContainer);
}


const buttons = document.querySelectorAll('.toggle-answer');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-FAQ");
    })
})