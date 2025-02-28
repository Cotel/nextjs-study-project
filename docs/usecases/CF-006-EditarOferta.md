# 🌟 CF-006 - Editar Oferta

## 1. 📝 Descripción  
Un vendedor edita los detalles de una oferta previamente creada.

## 2. 🧑‍💻 Actor Principal  
Vendedor.

## 3. 📥 Entradas  
Obligatorio:  
* Campos de la oferta a modificar.  

Opcional:  
* No aplica.

## 4. 📤 Salidas  
Oferta actualizada.

## 5. 🔍 Precondiciones 
1. El usuario debe ser el propietario de la oferta.  
2. El estado de la oferta debe ser diferente a "sold".

## 6. 🛠 Flujo Principal  
1. El sistema presenta un formulario con los campos de la oferta para su edición.  
2. El vendedor modifica los campos que desea actualizar.  
3. El sistema valida el formato de los datos introducidos.  
4. El vendedor envía la solicitud de modificación.  
5. El sistema recibe, valida y procesa la solicitud.  
6. La oferta se actualiza en la base de datos.  
7. El sistema devuelve una respuesta al vendedor con el resultado de la operación.  
8. La aplicación redirige al vendedor a la página de detalles de la oferta actualizada.

## 7. 🔄 Flujos Alternativos  
* A1:  
    * Si algún campo tiene un formato inválido, la aplicación resalta el campo en rojo y muestra un mensaje de error.  
* A2:  
    * Si no es posible procesar la solicitud, el sistema responde con un mensaje de error.

## 8. ✅ Postcondiciones  
No aplica.

## 9. ⚠️ Excepciones  
No aplica.
