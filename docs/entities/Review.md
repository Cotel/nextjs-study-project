# Review

## Descripción
Representación de una resenya en la plataforma.

## Propiedades
* id: Identificador único de la reseña.
<<<<<<< HEAD
* score: Puntuación de la oferta, de 1 a 5, siendo 1 la puntuación más baja y 5 la más alta.
* message: Texto de la reseña, que describe la experiencia del comprador con la oferta.
* createdAt: Fecha en la que se escribió la reseña.

## Pseudocódigo
```typescript
interface OfferReview {
  id: string
  score: number
  message: string
  createdAt: date
=======
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
>>>>>>> 86d9cb3d4fb487087b331d19e9440e3ed13cc596
}
```
