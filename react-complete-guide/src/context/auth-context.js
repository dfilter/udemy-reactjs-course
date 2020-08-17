import React from 'react'

/**
 * 113. Using the Context API
 * Here we can define values that cane be used globally or in specific components.
 */
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
})

export default authContext
