import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const operators = ["+", "-"]
  const prevElement = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextElement = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const randomNumber = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * people.length)
      if (newIndex === index) {
        let sign = Math.floor(Math.random() * 2)
        console.log(sign)

        if (sign == 0) {
          newIndex = index + 1
        }
        if (sign == 1) {
          newIndex = index - 1
        }
      }
      return checkNumber(newIndex)
    })
  }
  const checkNumber = (newIndex) => {
    if (newIndex > people.length - 1) {
      // console.log(people.length)

      return 0
    }
    if (newIndex < 0) {
      return people.length - 1
    }
    return newIndex
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img'></img>
        <span
          className='quote-icon'>
          <FaQuoteRight />
        </span>
        <div className='title author'>{name}</div>
      </div>
      <p className='job'>{job}</p>
      <p className='review'>{text}</p>
      <FaChevronLeft className='prev-btn' onClick={prevElement} />
      <FaChevronRight className='next-btn' onClick={nextElement} />
      <button style={{ display: 'flex', margin: '0 auto' }} className='random-btn' onClick={randomNumber}>Surprise Me</button>
    </article>
  )
};

export default Review;
