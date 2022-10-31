import React, { useState } from 'react';
import data from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// iterate over data and find those questions 
// destructure all element in questions 
// const SingleQuestion = (questions, answers) => {
//   return (
//     <section>
//       {questions.map((question) => {
//         return <p>{question}</p>
//       })}

//     </section>
//   )
// };

const SingleQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>{title}</p>
        <button onClick={() => setShow(!show)}>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {show && <p>{info}</p>}
    </div>
  )
}
export default SingleQuestion;
