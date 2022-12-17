import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title={''} className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage
            className='custom-image'
          />
          <ProductTitle
            className='text-bold'
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ backgroundColor: '#70D1F8' }}
        >
          <ProductImage style={{ boxShadow: '1rem 1rem 1rem rgb(0, 0, 0, 0.2)' }} />
          <ProductTitle
            style={{ fontWeight: '700' }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}
