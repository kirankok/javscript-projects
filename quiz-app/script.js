const questions = [
  { question: 'Is HTML easy?', answer: ['Hard', 'Average', 'Easy', 'Very Easy'], correct: 'Easy', name: 'q1' },
  { question: 'Who is the current prime minister of India', answer: ['Narendra Modi', 'Rahul Gandhi', 'Sonia Gandhi', 'Amit Shah'], correct: 'Narendra Modi', name: 'q2' },
  { question: 'What is 2 * 2', answer: ['5', '1', '4', '7'], correct: '4', name: 'q3' },
  { question: 'What is the full form of UI', answer: ['Unique Interface', 'Unanimous Interface', 'User Issue', 'User Interface'], correct: 'User Interface', name: 'q4' }
];

const ulElement = document.getElementById('list');

const renderList = () => {
  const list = questions.map(item => {

    return (
      `<div>
        <h2>${item.question}</h2>
        ${item.answer.map(ans => {
        return (
          `<li>
          <input type="radio" id=${ans} value=${ans} name=${item.name} />
          <label for=${ans}>${ans}</label>
        </li>`
        )

      }).join('')}
      </div>`
    )
  }).join('')

  return list
}

const form = document.getElementById('quiz-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let obj = {}
  for (const [name, value] of data) {
    obj[name] = value;
  }

  questions.forEach(item => {
    if (item.correct == obj) {

    }

  })
})

ulElement.innerHTML += renderList();