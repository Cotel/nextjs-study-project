# Listing

## Descripción
Representación de una oferta de venta en la plataforma.

## Propiedades
* id: identificador único.
* imageUrl: URL de la imagen principal del producto.
* price: precio del producto utilizando el formato de dinero.
* title: título del producto.
* description: descripción detallada del producto.
* productStatus: estado del producto, puede ser "new", "used" o "veryUsed".
* productCategoryId: identificador de la categoría del producto.
* sellerId: identificador único del vendedor.
* sellingStatus: estado de la venta, puede ser "selling" o "sold".

## Pseudocódigo

```typescript
interface Listing {
  id: string
  imageUrl: string
  price: money
  title: string
  description: string
  productStatus: "new" | "used" | "veryUsed"
  productCategoryId: string
  sellerId: string
  sellingStatus : "selling" | "sold"
}
```
