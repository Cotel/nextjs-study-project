# Review

## Descripción
Representación de una resenya en la plataforma.

## Propiedades
* id: Identificador único de la reseña.
* buyerId: Identificador único del comprador.
* score: Puntuación de la reseña (1-5).
* productId: Identificador único del producto.
* content: Texto de la reseña, que describe la experiencia del comprador con la oferta.
* date: Fecha en la que se escribió la reseña.

## Pseudocódigo
```typescript
interface Review {
  id: string
  buyerId: string
  score: number
  productId: string
  content: string
  date: string
}
```
