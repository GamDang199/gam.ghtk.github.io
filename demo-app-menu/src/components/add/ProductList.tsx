import React from 'react'
import { useParams } from 'react-router-dom'

const ProductList = () => {
    let {id} = useParams();
  return (
    <div>
        ProductList
        {id}
    </div>
  )
}

export default ProductList