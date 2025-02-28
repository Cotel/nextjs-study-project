# 🌟 CF-004 - Comprar Oferta

## 1. 📝 Descripción  
Un comprador adquiere una oferta.

## 2. 🧑‍💻 Actor Principal  
Comprador.

## 3. 📥 Entradas  
Obligatorio:  
* ID de la oferta.  

Opcional:  
* No aplica.

## 4. 📤 Salidas  
La oferta comprada.

## 5. 🔍 Precondiciones 
1. El comprador debe estar registrado e iniciado sesión.

## 6. 🛠 Flujo Principal  
1. El comprador hace clic en el botón "Comprar".  
2. El sistema procesa la solicitud y cambia el estado de la oferta a "sold".

## 7. 🔄 Flujos Alternativos  
* A1:  
  * Si el comprador no está identificado, se le redirige al flujo de inicio de sesión.  
  * Una vez se complete la autenticación, el usuario es redirigido nuevamente al detalle de la oferta.

## 8. ✅ Postcondiciones  
El estado de la oferta se actualiza a "sold".

## 9. ⚠️ Excepciones  
No aplica.
