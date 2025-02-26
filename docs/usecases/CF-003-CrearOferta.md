# 🌟 CF-003 - Crear oferta

## 1. 🎯 Descripción
Un vendedor crea una oferta.

## 2. 👤 Actor Principal
Vendedor.

## 3. 📥 Entradas
Obligatorio:
* Producto
Opcional:

## 4. 📤 Salidas
Oferta.

## 5. 🔍 Precondiciones
El usuario debe estar registrado e identificado.

## 6. 🛠️ Flujo Básico
1. El sistema presenta un formulario para la introduccion de los campos para crear la oferta.
2. El usuario introduce los campos a rellenar.
3. El sistema valida el formato de los datos introducidos.
4. El usuario envia la solicitud de creación.
5. El sistema recibe la petición, la valida y la procesa.
6. Se crea una oferta en la base de datos.
7. El sistema responde al cliente con el resultado de la operación.
8. La aplicación redirige al creador de la oferta a la pagina de detalles.

## 7. 🔄 Flujos Alternativos
* 3
    * a: Ante la presencia de un campo con un formato no válido, la aplicación se lo refleja al cliente marcando el campo en rojo.
* 5
    * a: Ante la imposibilidad de procesar la petición el sistema responde con un error.

## 8. ✅ Postcondiciones
* La oferta resultante tiene el estado visibile y disponible para el resto de compradores. (status: selling)

## 9. ⚠️ Excepciones
No aplica.
