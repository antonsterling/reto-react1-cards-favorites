import { useState, createContext } from "react";

// 1.  Definir el tipo de un producto
export interface Product {
    id: number
    image: string;
    title: string;
    price: number;
    description: string;
}

// 2. Definicion del tipo del contexto
export interface ProductContextType {
    products: Product[];
    addProduct: (Product: Product) => void;
    removeProduct: (id: number) => void;
    favorites: number[];
    toggleFavorite: (id: number) => void;

}

// 3.  Crear el contexto
export const ProductContext = createContext<ProductContextType | undefined>(undefined);


// 4. Valores Iniciales
export const initialProducts: Product[] = [
    {
        id: 1,
        image: `${import.meta.env.BASE_URL}/img/hp.png`,
        title: "Computador HP",
        price: 2500000,
        description: "Computador Hp, ryzen 5, 8gb de ram, 256gb de ssd"
    },
    {
        id: 2,
        image: `${import.meta.env.BASE_URL}img/iphone.webp`,
        title: "Iphone 15",
        price: 7500000,
        description: "Iphone 15, 128gb, 8gb de ram"
    },
    {
        id: 3,
        image: `${import.meta.env.BASE_URL}img/tv.webp`,
        title: "TV Samsung",
        price: 2500000,
        description: "Televisor Samsung, 55 pulgadas, 4k"
    },
    {
        id: 4,
        image: `${import.meta.env.BASE_URL}img/sony.webp`,
        title: "Auriculares Sony",
        price: 300000,
        description: "Auriculares Sony, inalambricos, 30 horas de bateria"
    }
]

// 5. Creando el provider
interface Props {
    children: React.ReactNode;
}

export function ProductProvider({ children }: Props) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [favorites, setFavorites] = useState<number[]>([])

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product])
    }

    const removeProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
          prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
      };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct, favorites, toggleFavorite }}>
            {children}
        </ProductContext.Provider>
    )
}