
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch all forms with the `needs-validation` class
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over each form to apply custom validation
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  });
  

