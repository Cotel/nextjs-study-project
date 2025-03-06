# Transaction

## Descripción
Representación de una compra/venta en la plataforma.

## Propiedades
* productId: Identificador único del producto.
* buyerId: Identificador único del comprador.
* sellerId: Identificador único del vendedor.

## Pseudocódigo
```typescript
interface Transaction {
  productId: string
  buyerId: string
  sellerId: string
}
```
