## 🌟 CF-007 - Eliminar Oferta

## 1. 📝 Descripción  
Un vendedor elimina una oferta previamente creada.

## 2. 🧑‍💻 Actor Principal  
Vendedor.

## 3. 📥 Entradas  
Obligatorio:  
* ID de la oferta a eliminar.  

Opcional:  
* No aplica.

## 4. 📤 Salidas  
Oferta eliminada.

## 5. 🔍 Precondiciones 
1. El usuario debe ser el propietario de la oferta.  
2. El estado de la oferta debe ser diferente a "sold".

## 6. 🛠️ Flujo Principal
1. El vendedor inicia el proceso para eliminar una oferta.  
2. El sistema solicita una confirmación para proceder con la eliminación.  
3. El vendedor acepta la confirmación y envía la solicitud.  
4. El sistema elimina la oferta de la base de datos.  
5. El sistema responde al vendedor indicando que la operación se completó.  
6. La aplicación redirige al vendedor a una página neutral.

## 7. 🔄 Flujos Alternativos  
No aplica.

## 8. ✅ Postcondiciones  
No aplica.

## 9. ⚠️ Excepciones  
No aplica.
