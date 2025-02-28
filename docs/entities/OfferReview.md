# OfferReview

## Descripción
Representación de una resenya en la plataforma.

## Propiedades
* id: Identificador único de la reseña.
* buyerId: Identificador único del comprador.
* userImageUrl: URL de la imagen del usuario que escribió la reseña.
* content: Texto de la reseña, que describe la experiencia del comprador con la oferta.
* offerTitle: Título de la oferta sobre la que se realiza la reseña.
* date: Fecha en la que se escribió la reseña.

## Pseudocódigo
```typescript
interface OfferReview {
  id: string
  buyerId: string
  buyerImageUrl: string
  content: string
  offerTitle: string
  date: date
}
```
