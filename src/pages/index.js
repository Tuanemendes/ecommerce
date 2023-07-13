import ItemProduct from '@/components/ItemProduct';
import Layout from '@/components/Layout';
import data from '@/utils/data';


export default function Home() {
  return <Layout title="Home Page">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" >
      {data.products.map((product)=>(
        <ItemProduct product= {product} key={product.slug}>
        </ItemProduct>

  ))}
    </div>
  </Layout>;
}
