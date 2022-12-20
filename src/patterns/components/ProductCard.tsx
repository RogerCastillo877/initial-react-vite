import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (arg: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
};
