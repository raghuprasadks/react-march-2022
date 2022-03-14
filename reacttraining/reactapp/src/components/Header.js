import React from 'react'

export const Header = () => {

    let course='React'
    let currhour = new Date().getHours()
    let elem = <h1>Course - {course} - Hours - {currhour}</h1>
    
  return (
    <div>
        <h1>Current Hour is {currhour}</h1>
        <h2>{elem}</h2>
        </div>
  )
}
