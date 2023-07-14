import Layout from '@/components/Layout'
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function ProductScreen() {
  
    const {query} = useRouter();   
    const {slug} = query;
    const product = data.products.find((a) => a.slug === slug);

    if(!product){
        return <div>Produto não encontrado!</div>
    }

    return <Layout title={product.name}>
        {/* <h1 className=' text-brow-coffee'>{product.name}</h1> */}

        <div className='py-2 text-brow-coffee'>
            <Link href='/'>Voltar para produtos</Link>
        </div>
        <div className='grid md:grid-cols-4 md:gap-3'>
            <div className='md:col-span-2'>
                <Image
                src = {product.image}
                alt = {product.name}
                width = {640}
                height = {640}
                layout = 'responsive'
                ></Image>         
            </div>
            <div className=' text-brow-coffee '>
               <ul>
                <li>
                <h1 className='text-lg'>{product.name}</h1>
                </li>
                <li>Categoria: {product.category}</li>
                <li>Tipo: {product.type}</li>
                <li>{product.rating} Estrelas ({product.numReviews} Avaliações)</li>
                <li>Descrição: {product.description}</li>
               </ul> 
            </div>
            <div>
                <div className='card p-5  text-brow-coffee'>
                    <div className='mb-2 flex justify-between'>
                        <div>Preço</div>
                        <div>R${product.price}</div>
                    </div>
                    <div className='mb-2 flex justify-between'>
                        <div>Status</div>
                        <div>{product.countInStock > 0 ? 'Produto Disponível' : 'Produto Indisponível'}</div>
                    </div>
                    <button className='primary-button w-full'>Adicionar ao carrinho</button>
                </div>
            </div>
            
        </div>
    </Layout>


  
}
