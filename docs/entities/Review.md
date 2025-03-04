# Review

## Descripción
Representación de una resenya en la plataforma.

## Propiedades
* id: Identificador único de la reseña.
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
}
```
