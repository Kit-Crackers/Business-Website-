// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Simple form validation for the order page
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                alert('Order submitted successfully!');
                orderForm.reset();
            }
        });
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const pickup = document.getElementById('pickup').value;

        if (!name || !email || !phone || !pickup) {
            alert('Please fill in all required fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Simple image carousel for the home page
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        setInterval(() => {
            carousel.scrollBy({
                left: carousel.offsetWidth,
                behavior: 'smooth'
            });

            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                carousel.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }, 5000);
    }
});