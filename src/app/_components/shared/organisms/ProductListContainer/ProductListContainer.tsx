"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductCategorySelector } from "../../molecules/ProductCategorySelector/ProductCategorySelector";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { ProductList } from "../ProductList/ProductList";
import { InMemoryProductsRepository } from "@infra/products/InMemoryProductsRepository";
import { Product } from "@core/products/entities/Product";

export const ProductListContainer = () => {
  const [formState, setFormState] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const repository = new InMemoryProductsRepository();
    repository.findAll().then((allProducts) => {
      let filteredProducts = allProducts;

      if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
      }

      if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      setProducts(filteredProducts);
    });
  }, [selectedCategory, searchQuery]); // Dependencias: se vuelve a ejecutar cuando cambia la categoría o la búsqueda

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductCategorySelector setSelectedCategory={setSelectedCategory} />
      <ProductList products={products} />
    </div>
  );
};
