# Listing

## Descripción
Representación de una oferta de venta en la plataforma.

## Propiedades
* sellerId: Identificador único del vendedor.
* id: Identificador único de la oferta.
* imageUrl: URL de la imagen principal del producto.
* price: Precio del producto, expresado en formato de dinero.
* title: Título del producto.
* status: estado del producto, puede ser "new", "used" o "worn".
* details: Detalles del producto.
* productCategoryId: Identificador de la categoría a la que pertenece el producto.
* sellingStatus: estado de la venta, puede ser "selling" o "sold".

## Pseudocódigo
```typescript
interface ListingOffer {
  sellerId: string
  id: string
  imageUrl: string
  price: money
  title: string
  status: "new" | "used" | "worn"
  details: string
  productCategoryId: string
  sellingStatus : "selling" | "sold"
}
```
