import React from 'react'
import Signup from './../components/Signup'

const ReactTasks = () => {
  const handleSubmit = (props) => {
    console.log(props)
  }

  return (
    <>
      <Signup onSubmit={handleSubmit} />
    </>
  )
}

export default ReactTasks
