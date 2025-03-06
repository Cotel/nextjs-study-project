## 🌟 CF-005 - Crear Oferta

## 1. 📝 Descripción  
Un vendedor crea una nueva oferta para un producto.

## 2. 🧑‍💻 Actor Principal  
Vendedor.

## 3. 📥 Entradas  
Obligatorio:  
* Producto.  

Opcional:  
* No aplica.

## 4. 📤 Salidas  
Oferta creada.

## 5. 🔍 Precondiciones 
1. El usuario debe estar registrado e identificado en el sistema.

## 6. 🛠️ Flujo Principal 
1. El sistema presenta un formulario para que el vendedor complete los campos necesarios para crear la oferta.  
2. El vendedor introduce la información solicitada.  
3. El sistema valida el formato de los datos introducidos.  
4. El vendedor envía la solicitud de creación.  
5. El sistema recibe y valida la solicitud.  
6. Se crea la oferta en la base de datos.  
7. El sistema devuelve una respuesta al vendedor con el resultado de la operación.  
8. La aplicación redirige al vendedor a la página de detalles de la oferta creada.

## 7. 🔄 Flujos Alternativos  
* A1:  
    * Si algún campo tiene un formato inválido, la aplicación resalta el campo en rojo y muestra un mensaje de error.  
* A2:  
    * Si no es posible procesar la solicitud, el sistema responde con un mensaje de error.

## 8. ✅ Postcondiciones  
* La oferta creada tiene el estado "selling" (es visible).

## 9. ⚠️ Excepciones  
No aplica.
