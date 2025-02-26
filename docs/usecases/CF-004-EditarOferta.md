# 🌟 CF-004 - Editar Oferta

## 1. 🎯 Descripción
Un vendedor edita una oferta.

## 2. 👤 Actor Principal
Vendedor.

## 3. 📥 Entradas
Obligatorio:
* Campos de la oferta que se vayan a editar.
Opcional:

## 4. 📤 Salidas
Oferta editada.

## 5. 🔍 Precondiciones
El usuario debe ser dueño de la oferta.
El estado de venta a de ser distinto a "sold".

## 6. 🛠️ Flujo Básico
1. El sistema presenta un formulario para la edicion de los campos para editar la oferta.
2. El usuario modifica los campos que se quieran cambiar.
3. El sistema valida el formato de los datos introducidos.
4. El usuario envia la solicitud de modificacion de los datos.
5. El sistema recibe la petición, la valida y la procesa.
6. Se actualiza la oferta en la base de datos.
7. El sistema responde al cliente con el resultado de la operación.
8. La aplicación redirige al creador de la oferta a la pagina de detalles.

## 7. 🔄 Flujos Alternativos
* 3
    * a: Ante la presencia de un campo con un formato no válido, la aplicación se lo refleja al cliente marcando el campo en rojo.
* 5
    * a: Ante la imposibilidad de procesar la petición el sistema responde con un error.

## 8. ✅ Postcondiciones
No aplica.

## 9. ⚠️ Excepciones
No aplica.
