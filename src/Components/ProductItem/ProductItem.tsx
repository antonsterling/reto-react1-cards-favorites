import FavoriteButton from "../FavoriteButton/FavoriteButton";
import style from './ProductItem.module.css';
import type { Product } from "../ProductContext/ProductContext";

interface Props {
    product: Product
}

export default function ProductItem({ product }: Props) {
    return (
        <div className={style.card}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className={style.img} />
            <div className={style.divPrecio}>
                <h4>Precio: </h4>
                <p>${product.price}</p>
            </div>
            <div className={style.divDescripcion}>
                <h4>Descripción: </h4>
                <p>{product.description}</p>
            </div>
            <FavoriteButton productId={product.id} />
        </div>
    )
}