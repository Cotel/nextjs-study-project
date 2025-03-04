# 🌟 CF-001 - [Nombre del caso de uso]

## 1. 🎯 Descripción
[Qué hace esta funcionalidad y su propósito, ej. "El usuario puede crear una nueva tarea para organizar su trabajo"].

## 2. 👤 Actor Principal
[Ej. "Usuario"].

## 3. 📥 Entradas
[Datos necesarios, ej. "Título, descripción, fecha límite"].


## 4. 📤 Salidas
[Resultado, ej. "Tarea creada y visible en la lista"].

## 5. 🔍 Precondiciones
[Condiciones previas, ej. "El usuario está autenticado"].

## 6. 🛠️ Flujo Básico
  1. El usuario accede a la sección "Nueva Tarea".
  2. El usuario introduce título, descripción y fecha límite.
  3. El usuario presiona "Guardar".
  4. El sistema confirma la creación con un mensaje.

## 7. 🔄 Flujos Alternativos
  - **A1**: Si falta el título, el sistema muestra "Título requerido" y permite corregir.
  - **A2**: Si hay un error de conexión, se notifica al usuario.

## 8. ✅ Postcondiciones
[Estado final, ej. "La tarea se guarda en la base de datos y aparece en la lista"].


## 9. ⚠️ Excepciones
[Ej. "Fallo del servidor impide guardar la tarea"].
