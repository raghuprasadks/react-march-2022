import React from 'react'

export const Content = () => {
  const course="React"
  const courseList=["Java Script","React",".Net","Angular"]
  const emp={id:1,name:"ravi",dept:'IT'}
  const greet=()=>{

    
    console.log('Welcome to react')
  }
  return (
    <div>
      <h1>Iam learing {course}</h1>
      <h2>Iam planning learn - {courseList}</h2>
      <h2>emp object - {emp.name}</h2>
        
      </div>
  )
}
