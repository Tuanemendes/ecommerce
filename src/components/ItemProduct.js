/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'

export default function ItemProduct({product}) {
  return (
    <div className="card">
        <Link href={`/product/${product.slug}`}>
            <img className="rounded shadow" src={product.image} alt={product.name}/> 
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product/${product.slug}`}>
                <h2 className='text-lg text-brow-coffee'>{product.name}</h2>
                
            </Link>
            <p className='text-sm text-brow-coffee '>{product.type}</p>
            <p className='mb-2 text-brow-coffee'>R${product.price}</p>
            <button className='primary-button text-brow-coffee rounded p-1' type='button'>Comprar</button>
        </div>
    </div>
  )
}
