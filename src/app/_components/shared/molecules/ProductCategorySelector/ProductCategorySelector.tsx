import React, { useEffect, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import styles from './ProductCategorySelector.module.scss';
import { ProductCategory } from '@core/productCategories/entities/ProductCategory';
import { getProductCategories } from '../../../../_queries/productsCategories';

interface ProductCategorySelectorProps {
  setSelectedCategory: (categoryId: string | null) => void; 
}

export const ProductCategorySelector = ({ setSelectedCategory }: ProductCategorySelectorProps) => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategoryLocal] = useState<string | null>(null);

  useEffect(() => {
    getProductCategories().then(result => setCategories(result));
  }, []);

  // Manejar el clic en una categoría
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryLocal(categoryId);  // Actualizar el estado local de la categoría seleccionada
    setSelectedCategory(categoryId);       // Actualizar el estado en el componente padre
  };

  return (
    <div className={styles['product-category-selector']}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={category.id === selectedCategory ? 'solid' : 'outline'} // Cambiar el estilo según la categoría seleccionada
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};
