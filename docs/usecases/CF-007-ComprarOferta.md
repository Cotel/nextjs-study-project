# 🌟 CF-007 - Comprar Oferta

## 1. 🎯 Descripción
Un usuario compra una oferta.

## 2. 👤 Actor Principal
Comprador.

## 3. 📥 Entradas
Obligatorio:
* Id de la oferta.
Opcional:

## 4. 📤 Salidas
La oferta.

## 5. 🔍 Precondiciones
Que el comprador este registrado y logeado.

## 6. 🛠️ Flujo Básico
1. El comprador hace click en comprar.
2. El sistema procesa la peticion y transiciona el estado de la oferta a "sold".

## 7. 🔄 Flujos Alternativos
* 1
    * a: Si el usuario no está identificado se le redirige al flujo de identificación. Al terminarlo se le manda de vuelta al detalle de la oferta.

## 8. ✅ Postcondiciones
El estado de la oferta pasa a "sold".

## 9. ⚠️ Excepciones
No aplica.
