  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Display the alert message
    alert("Thanks for your inquiry");
    
    // Optionally, you can submit the form data to a server using AJAX or perform other actions here
    
    // Reset the form
    this.reset();
  });


  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetContent = document.getElementById(targetId);
      
      // Toggle the display of the target content
      if (targetContent) {
        targetContent.classList.toggle('show');
      }
    });
  });


  const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const targetModalId = this.getAttribute('data-bs-target');
      const item = this.getAttribute('data-bs-whatever');
      const price = this.getAttribute('data-bs-whatever1');
      const targetModal = document.querySelector(targetModalId);
      
      // Update the modal's content with recipient information
      const modalTitle = targetModal.querySelector('.modal-title');
      const modalInputItem = targetModal.querySelector('.modal-body input[name="item1"]');
      const modalInputPrice = targetModal.querySelector('.modal-body input[name="price1"');
      
      modalTitle.textContent = `Checkout item ${item}`;
      modalInputItem.value = item;
      modalInputPrice.value = price;
    });
  });

  const checkoutForms = document.querySelectorAll('#checkout-form');
  checkoutForms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (form.checkValidity()) {
        // All required fields are filled, perform submission
        alert('Thanks for buying our Products');
        // You can submit the form to a server or perform other actions here
        const modal = form.closest('.modal');
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();
        form.reset();
      } else {
        alert('Please complete the required fields');
      }
    });
  });
  
  
  