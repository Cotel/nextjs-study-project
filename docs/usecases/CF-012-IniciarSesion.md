# 🌟 CF-011 - Iniciar Sesión

## 1. 📝 Descripción  
Un usuario inicia sesión.

## 2. 🧑‍💻 Actor Principal  
Usuario.

## 3. 📥 Entradas  
Obligatorio:  
* Inicio sesión.  

Opcional:  
* No aplica.

## 4. 📤 Salidas  
Inicio de sesión.

## 5. 🔍 Precondiciones 
No aplica.

## 6. 🛠 Flujo Principal  
1. El sistema presenta un formulario para que el usuario complete los campos necesarios para iniciar sesión.  
2. El usuario introduce la información solicitada.  
3. El sistema valida el formato de los datos introducidos.  
4. El usuario envía la solicitud del inicio de sesión.  
5. El sistema recibe y valida la solicitud.  
6. El sistema devuelve una respuesta al usuario con el resultado de la operación.  
7. La aplicación redirige al usuario a la página en la que se encontraba o en su defecto a la página principal.

## 7. 🔄 Flujos Alternativos  
* A1:  
    * Si algún campo tiene un formato inválido, la aplicación resalta el campo en rojo y muestra un mensaje de error.  
* A2:  
    * Si no es posible procesar la solicitud, el sistema responde con un mensaje de error.

## 8. ✅ Postcondiciones  
No aplica

## 9. ⚠️ Excepciones  
No aplica.
