import React from 'react'

export const CoronaComponent = (props) => {
    const CoronaData=props.Coronalist
    console.log(CoronaData)

  return (
    <>
    <div>
        <h1>Coronalist</h1>
    <ul>
          {CoronaData.map((corona) =><li key={ corona.state}>{corona.state}{corona.total}{corona.active} {corona.recovered} {corona.death}  </li>)}
    </ul>
    </div>
    <div>
    <h1>Coronalist-filtered</h1>
      {CoronaData.filter(corona => corona.total > 1000).map(filteredcorona => (
        <li>
          {filteredcorona.state}
        </li>
      ))}
    </div>

    
</>
  )
}
