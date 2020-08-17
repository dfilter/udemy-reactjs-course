import React from 'react'

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(control => {
      return <BuildControl key={control.label} label={control.label} />
    })}
  </div>
)

export default buildControls
