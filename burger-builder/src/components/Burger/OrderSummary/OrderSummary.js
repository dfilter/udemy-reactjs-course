import React from 'react'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  )
}

export default orderSummary
