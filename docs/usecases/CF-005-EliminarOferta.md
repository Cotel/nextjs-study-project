# 🌟 CF-005 - EliminarOferta

## 1. 🎯 Descripción
Un vendedor elimina una oferta.

## 2. 👤 Actor Principal
Vendedor.

## 3. 📥 Entradas
Obligatorio:
* id de la oferta.
Opcional:

## 4. 📤 Salidas
Oferta eliminada.

## 5. 🔍 Precondiciones
El usuario debe ser dueño de la oferta.
El estado de venta a de ser distinto a "sold".

## 6. 🛠️ Flujo Básico
1. El vendedor inicia el proceso de eliminar una oferta.
2. El sistema presenta una confirmacion de la eliminacion de la oferta.
3. El vendedor acepta la confirmacion y se envia la peticion.
4. Se elimina la oferta en la base de datos.
5. El sistema responde al cliente con la operación completada.
6. La aplicación redirige al creador de la oferta a una pagina neutra.

## 7. 🔄 Flujos Alternativos
No aplica

## 8. ✅ Postcondiciones
No aplica.

## 9. ⚠️ Excepciones
No aplica.
