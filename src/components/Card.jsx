import React from 'react'

export default function Card(props) {
  console.log(props.product.title)

  return (
    <div className='border mb-8' >
      <h2 className='font-bold'>{props.product.title}</h2>
      <p>{props.product.category}</p>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
    </div>
  )
}
