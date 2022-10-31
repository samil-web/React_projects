import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
// Now we have data.js which is a list of dictionaries
// We need to render this data into html elements and display in the app.js
function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
