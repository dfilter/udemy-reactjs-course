import React, { useEffect, useRef } from 'react'

import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

/**
 * 111. Refs with React Hooks
 * If we wanted to click the toggle button when the page loads for the first time 
 * we can utilize the useRef hook. We pass that hook to the ref prop of the button
 * and run the click method on it within the useEffect hook
 */
const cockpit = (props) => {
  const toggleButtonRef = useRef(null)

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    toggleButtonRef.current.click()
    return () => {
      console.log('[Cockpit.js] cleanup useEffect')
    }
  }, [])

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
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(cockpit)
