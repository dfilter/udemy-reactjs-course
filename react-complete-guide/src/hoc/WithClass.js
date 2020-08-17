import React from 'react'

/**
 * Another example of a higher order component where we define a passed class
 * and wrap the passed child props within
 * Yet another form of a higher order component is passed two parameters
 * the first MUST be capitalized any number of other parameters can be passed
 * here className for the css class that is being passed in.
 * To allow the WrappedComponent to have access to its props we need to pass it 
 * using an object and spread the props variable
 */ 
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClass
