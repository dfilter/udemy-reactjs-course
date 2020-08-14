import React, { useEffect } from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    const timer = setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000)
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup useEffect')
    }
  }, [])
  
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] 2nd cleanup useEffect')
    }
  })

  let btnClass = ''
  if (props.showPerson) {
    btnClass = classes.Red
  }

  const assignedClasses = []
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>It's working!</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}

export default cockpit
