import { useContext } from "react"
import { ProductContext } from "../Components/ProductContext/ProductContext"

export function useProducts(){
    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("useProducts debe usarse dentro de un <ProductProvider>");
      }
    
      return context;
}