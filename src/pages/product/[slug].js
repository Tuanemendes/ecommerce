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
        <div className='card p-5 shadow-md '>
        <div className='grid md:grid-cols-2 md:gap-10'>
            <div className='md:col-span-1'>
                <Image
                src = {product.image}
                alt = {product.name}
                width = {640}
                height = {640}
                layout = 'responsive'
                className='rounded-xl shadow-md'
                ></Image>         
            </div>
            <div>
            <div className='p-5 text-brow-coffee '>
                <ul>
                <li><h1 className='text-xl'>{product.name}</h1></li>
                <li>{product.rating} Estrelas ({product.numReviews} Avaliações)</li>
                <li>Categoria: {product.category}</li>
                <li>Tipo: {product.type}</li>
                </ul>
            </div>
            <div className='card p-5   text-brow-coffee'>
                <div className='mb-2 flex justify-between'>
                    <div>Preço</div>
                    <div>R${product.price}</div>
                </div>
                <div className='mb-2 flex justify-between'>
                    <div>Status</div>
                    <div>{product.countInStock > 0 ? 'Produto Disponível' : 'Produto Indisponível'}</div>
                </div>
                <div className=' flex justify-between'>
                <button className='primary-button m-1'>Adicionar ao carrinho</button>
                <button className='primary-button m-1'>
                <Link href='/'>Comprar</Link>
                </button>
                </div>
            </div>    
            <div className='p-5 text-brow-coffee '>
               <ul>   
           
                <li><h1 className='text-lg'>Descrição</h1> {product.description}</li>
               </ul> 
            </div>
            </div>
        </div>
        </div>
     
    </Layout>


  
}
