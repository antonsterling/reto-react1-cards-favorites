import styles from "./FavoriteButton.module.css";
import { useProducts } from "../../hooks/useProducts";
import { useEffect } from 'react'
import Swal from 'sweetalert2'


interface Props {
  productId: number
}

export default function FavoriteButton({ productId }: Props) {

  const { favorites, toggleFavorite } = useProducts();
  const isFavorite = favorites.includes(productId);

  const handleClick = () => {
    toggleFavorite(productId);
    console.log(favorites)
    if (favorites.includes(productId)){
      Swal.fire({
        title: '¡Se elimino de favoritos!',
        text: 'Eliminado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      })
    }else{
      Swal.fire({
        title: '¡Se añadio como favorito!',
        text: 'Agregado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      })
    }
    
  }

  useEffect(() => {
    if (favorites.length > 0){

    }
    console.log("numero favoritos: " + favorites.length)
  }, [favorites.length])

  const buttonText = isFavorite ? "Favorito 🌟" : "Añadir a favoritos";
  const buttonClass = isFavorite ? styles.buttonFavorite : styles.button;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
}