# Profile

## Descripción
Representación de un perfil de usuario.

## Propiedades
* userId: Identificador único del usuario.
* avatarUrl: URL de la imagen principal del usuario.
* fullName: Nombre completo del usuario.
* userName: Nick del usuario.
* biography: Biografía del usuario.
* score: Puntuación media del usuario en base a sus reseñas.

## Pseudocódigo
```typescript
interface Product {
  userId: string
  avatarUrl: string
  fullName: string
  userName: string
  biography?: string
  score: number
}
```
