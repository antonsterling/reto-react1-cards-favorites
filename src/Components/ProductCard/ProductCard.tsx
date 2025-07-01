import style from './ProductCard.module.css'
import ProductItem from "../ProductItem/ProductItem"
import { useProducts } from "../../hooks/useProducts"; 

export default function ProductCard() {
    const { products } = useProducts();

    return (
        <div className={style.cards}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}></ProductItem>
            ))}
        </div>
    )
}