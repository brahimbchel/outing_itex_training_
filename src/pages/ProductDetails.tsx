// import { useEffect } from 'react'
// import { useLocation, useParams } from 'react-router'
import { useParams } from 'react-router'


const ProductDetails = () => {
  const params = useParams()
  // const location = useLocation()

  // useEffect(() => {
  //   console.log(params)
  //   console.log(location)
  // }, [params, location])

  return (
    <div>Product Details {params.id}</div>
  )
}

export default ProductDetails