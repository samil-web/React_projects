import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Experience from './Experience'
import Loading from './Loading'
import Sidebar from './Sidebar'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)
  const [jobs, setJobs] = useState([])
  const fetchExperience = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchExperience()
  }, [])
  if (loading) {
    return (
      <main className='section loading'>
        <Loading />
      </main>
    )
  }
  console.log(jobs)
  return (
    <div>
      <main className='section'>
        <div className='title'>
          <h1>Experience</h1>
          <div className='underline'></div>
        </div>
        <Sidebar jobs={jobs} value={value} setValue={setValue} />
        <Experience experience={jobs} value={value} />
      </main>
    </div>
  )
}

export default App