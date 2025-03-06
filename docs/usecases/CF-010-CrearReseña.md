# 🌟 CF-011 - Crear Reseña

## 1. 📝 Descripción  
Un comprador crea una reseña para una compra.

## 2. 🧑‍💻 Actor Principal  
Comprador.

## 3. 📥 Entradas  
Obligatorio:  
* Puntuacion.  

Opcional:  
* Comentario.

## 4. 📤 Salidas  
Reseña creada.

## 5. 🔍 Precondiciones 
1. El comprador debe ser el propietario de la compra.

## 6. 🛠 Flujo Principal  
1. El sistema presenta un formulario para que el comprador complete los campos necesarios para crear la reseña.  
2. El comprador introduce la información solicitada.  
3. El sistema valida el formato de los datos introducidos.  
4. El comprador envía la solicitud de creación.  
5. El sistema recibe y valida la solicitud.  
6. Se crea la reseña en la base de datos.  
7. El sistema devuelve una respuesta al comprador con el resultado de la operación.  
8. La aplicación redirige al comprador a la página de detalles del vendedor.

## 7. 🔄 Flujos Alternativos  
* A1:  
    * Si algún campo tiene un formato inválido, la aplicación resalta el campo en rojo y muestra un mensaje de error.  
* A2:  
    * Si no es posible procesar la solicitud, el sistema responde con un mensaje de error.

## 8. ✅ Postcondiciones  
No aplica.

## 9. ⚠️ Excepciones  
No aplica.
