import ProductCard from './Components/ProductCard/ProductCard'
import { ProductProvider } from './Components/ProductContext/ProductContext'
import { useProducts } from './hooks/useProducts'

 
function Counter() {
  const { favorites, products } = useProducts()

  const style: React.CSSProperties = {
    textAlign: "center", 
    margin: "20px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "white"
  }

  return (
    <p style={style}>Favoritos: {favorites.length} de {products.length} </p>
  )

}


function App() {


  return (
    <>
      <ProductProvider>
        <Counter></Counter>
        <ProductCard />
      </ProductProvider>
    </>
  )
}

export default App
