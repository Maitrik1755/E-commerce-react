import React from 'react'
import SearchFilter from '../Components/SearchFilter'
import CategoryFilter from '../Components/CategoryFilter'
import { useCart } from '../Context/CartContext'
import ProductCard from '../Components/ProductCard'

import { useState } from 'react'


const ProductList = () => {
  const {products} = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCategory, setSearchCategory] = useState("All")

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase() );
    const matchesCategory = searchCategory === "All" || product.category === searchCategory;
    return matchesSearchTerm && matchesCategory;
  });

  
  
  return (
    <>
    <div className="container mx-auto px-4 pt-8 md:px-8 ">
    < SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
    < CategoryFilter searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
     <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4">
          Featured Gear ({products.length} Items)
        </h2>

         <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
    </div>
    </>
  )
}

export default ProductList