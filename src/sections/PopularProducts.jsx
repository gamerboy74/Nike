import React from 'react'
import {products} from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className='text-4xl font-palanquin font-bold'>Our 
         <span className='text-coral-red'> Popular</span> products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat voluptas dicta minima nostrum laborum sed, nulla, nihil iure placeat cupiditate esse vel ipsum, adipisci commodi recusandae alias assumenda. Perspiciatis.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 mid:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
          {products.map((product) => (
            <PopularProductsCard 
            key = {product.name} {...product}/>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default PopularProducts
