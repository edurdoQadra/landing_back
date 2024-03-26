// document.addEventListener('DOMContentLoaded', function () {
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');
//   const confirmPasswordInput = document.getElementById('confirmPassword');
//   const documentNumberInput = document.getElementById('documentNumber');

//   const form = document.getElementById('registerForm');
//   const alertsContainer = document.querySelector('.alerts');

//   // Función para verificar si hay errores de validación en el formulario
//   function validateForm() {
//       const nameValue = nameInput.value.trim();
//       const emailValue = emailInput.value.trim();
//       const passwordValue = passwordInput.value;
//       const confirmPasswordValue = confirmPasswordInput.value;
//       const documentNumberValue = documentNumberInput.value;

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       let isValid = true;

//       // Validación de nombre
//       if (!nameValue) {
//           showErrorMessage('alert_name', 'Name is required');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_name');
//       }

//       // Validación de email
//       if (!emailRegex.test(emailValue)) {
//           showErrorMessage('alert_email', 'Invalid email address');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_email');
//       }

//       // Validación de contraseña
//       if (passwordValue.length < 8) {
//           showErrorMessage('alert_password', 'Password must be at least 8 characters long');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_password');
//       }

//       // Validación de confirmación de contraseña
//       if (confirmPasswordValue !== passwordValue) {
//           showErrorMessage('alert_confirm_password', 'Passwords do not match');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_confirm_password');
//       }

//       // Validación de número de documento
//       if (documentNumberValue.length < 8) {
//           showErrorMessage('alert_document_number', 'Document number must be at least 8 characters long');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_document_number');
//       }

//       return isValid;
//   }

//   // Función para mostrar mensajes de error
//   function showErrorMessage(alertId, message) {
//       const alertElement = document.querySelector(`.${alertId}`);
//       if (alertElement) {
//           alertElement.textContent = message;
//           alertsContainer.appendChild(alertElement);
//       }
//   }

//   // Función para limpiar mensajes de error
//   function clearErrorMessage(alertId) {
//       const alertElement = document.querySelector(`.${alertId}`);
//       if (alertElement) {
//           alertElement.textContent = '';
//       }
//   }

//   // Evento de envío del formulario
//   form.addEventListener('submit', function (event) {
//       event.preventDefault(); // Prevenir el envío del formulario por defecto

//       // Limpiar los mensajes de error anteriores
//       clearAllErrorMessages();

//       // Validar el formulario antes de enviar los datos
//       if (validateForm()) {
//           // Si el formulario es válido, enviar los datos
//           const formData = {
//               name: nameInput.value,
//               email: emailInput.value,
//               password: passwordInput.value,
//               confirmPassword: confirmPasswordInput.value,
//               documentType: document.getElementById('documentType').value,
//               documentNumber: documentNumberInput.value,
//               over18: document.getElementById('over18').checked
//           };

//           console.log(formData);
//           // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier otra acción necesaria
//       }
//   });

//   // Función para limpiar todos los mensajes de error
//   function clearAllErrorMessages() {
//       const errorAlerts = document.querySelectorAll('.alerts div');
//       errorAlerts.forEach(alert => alert.textContent = '');
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');
//   const confirmPasswordInput = document.getElementById('confirmPassword');
//   const documentNumberInput = document.getElementById('documentNumber');

//   const form = document.getElementById('registerForm');
//   const alertsContainer = document.querySelector('.alerts');

//   // Función para verificar si hay errores de validación en el formulario
//   function validateForm() {
//       const nameValue = nameInput.value.trim();
//       const emailValue = emailInput.value.trim();
//       const passwordValue = passwordInput.value;
//       const confirmPasswordValue = confirmPasswordInput.value;
//       const documentNumberValue = documentNumberInput.value;

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       let isValid = true;

//       // Validación de nombre
//       if (!nameValue) {
//           showErrorMessage('alert_name', 'Name is required');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_name');
//       }

//       // Validación de email
//       if (!emailRegex.test(emailValue)) {
//           showErrorMessage('alert_email', 'Invalid email address');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_email');
//       }

//       // Validación de contraseña
//       if (passwordValue.length < 8) {
//           showErrorMessage('alert_password', 'Password must be at least 8 characters long');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_password');
//       }

//       // Validación de confirmación de contraseña
//       if (confirmPasswordValue !== passwordValue) {
//           showErrorMessage('alert_confirm_password', 'Passwords do not match');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_confirm_password');
//       }

//       // Validación de número de documento
//       if (documentNumberValue.length < 8) {
//           showErrorMessage('alert_document_number', 'Document number must be at least 8 characters long');
//           isValid = false;
//       } else {
//           clearErrorMessage('alert_document_number');
//       }

//       return isValid;
//   }

//   // Función para mostrar mensajes de error
//   function showErrorMessage(alertId, message) {
//       const alertElement = document.querySelector(`.${alertId}`);
//       if (alertElement) {
//           alertElement.textContent = message;
//           alertsContainer.appendChild(alertElement);
//       }
//       console.error(`Error: ${message}`);
//   }

//   // Función para limpiar mensajes de error
//   function clearErrorMessage(alertId) {
//       const alertElement = document.querySelector(`.${alertId}`);
//       if (alertElement) {
//           alertElement.textContent = '';
//       }
//   }

//   // Evento de envío del formulario
//   form.addEventListener('submit', function (event) {
//       event.preventDefault(); // Prevenir el envío del formulario por defecto

//       // Limpiar los mensajes de error anteriores
//       clearAllErrorMessages();

//       // Validar el formulario antes de enviar los datos
//       if (validateForm()) {
//           // Si el formulario es válido, enviar los datos
//           const formData = {
//               name: nameInput.value,
//               email: emailInput.value,
//               password: passwordInput.value,
//               confirmPassword: confirmPasswordInput.value,
//               documentType: document.getElementById('documentType').value,
//               documentNumber: documentNumberInput.value,
//               over18: document.getElementById('over18').checked
//           };

//           console.log(formData);
//           // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier otra acción necesaria
//       } else {
//           console.error('Error: Form validation failed');
//       }
//   });

//   // Función para limpiar todos los mensajes de error
//   function clearAllErrorMessages() {
//       const errorAlerts = document.querySelectorAll('.alerts div');
//       errorAlerts.forEach(alert => alert.textContent = '');
//   }
// });


document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const documentNumberInput = document.getElementById('documentNumber');

  const form = document.getElementById('registerForm');
  const alertsContainer = document.querySelector('.alerts');

  // Función para verificar si hay errores de validación en el formulario
  function validateForm() {
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value;
      const confirmPasswordValue = confirmPasswordInput.value;
      const documentNumberValue = documentNumberInput.value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let isValid = true;

      // Validación de nombre
      if (!nameValue) {
          showErrorMessage('alert_name', 'Name is required');
          isValid = false;
      } else {
          clearErrorMessage('alert_name');
      }

      // Validación de email
      if (!emailRegex.test(emailValue)) {
          showErrorMessage('alert_email', 'Invalid email address');
          isValid = false;
      } else {
          clearErrorMessage('alert_email');
      }

      // Validación de contraseña
      if (passwordValue.length < 8) {
          showErrorMessage('alert_password', 'Password must be at least 8 characters long');
          isValid = false;
      } else {
          clearErrorMessage('alert_password');
      }

      // Validación de confirmación de contraseña
      if (confirmPasswordValue !== passwordValue) {
          showErrorMessage('alert_confirm_password', 'Passwords do not match');
          isValid = false;
      } else {
          clearErrorMessage('alert_confirm_password');
      }

      // Validación de número de documento
      if (documentNumberValue.length < 8) {
          showErrorMessage('alert_document_number', 'Document number must be at least 8 characters long');
          isValid = false;
      } else {
          clearErrorMessage('alert_document_number');
      }

      return isValid;
  }

  // Función para mostrar mensajes de error dentro del contenedor de alertas
  function showErrorMessage(alertId, message) {
      const alertElement = document.createElement('div');
      alertElement.classList.add('text-red-500', 'text-sm');
      alertElement.textContent = message;
      alertsContainer.appendChild(alertElement);
  }

  // Función para limpiar mensajes de error
  function clearErrorMessage(alertId) {
      const alertElement = document.querySelector(`.${alertId}`);
      if (alertElement) {
          alertElement.remove();
      }
  }

  // Evento de envío del formulario
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto

      // Limpiar los mensajes de error anteriores
      clearAllErrorMessages();

      // Validar el formulario antes de enviar los datos
      if (validateForm()) {
          // Si el formulario es válido, enviar los datos
          const formData = {
              name: nameInput.value,
              email: emailInput.value,
              password: passwordInput.value,
              confirmPassword: confirmPasswordInput.value,
              documentType: document.getElementById('documentType').value,
              documentNumber: documentNumberInput.value,
              over18: document.getElementById('over18').checked
          };

          console.log(formData);
          // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier otra acción necesaria
      }
  });

  // Función para limpiar todos los mensajes de error
  function clearAllErrorMessages() {
      while (alertsContainer.firstChild) {
          alertsContainer.removeChild(alertsContainer.firstChild);
      }
  }
});