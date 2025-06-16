
'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



// Query form 



document.getElementById('covidForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  
  // Simulate form submission
  setTimeout(() => {
    // Show success message
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.className = 'status-message success';
    statusMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your health assessment has been submitted successfully. A healthcare professional will contact you soon.';
    
    // Reset form
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Health Assessment';
    
    // Scroll to message
    statusMessage.scrollIntoView({ behavior: 'smooth' });
  }, 1500);
});



// JS Logic 
    function openModal(type) {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('queryForm').style.display = type === 'query' ? 'block' : 'none';
      document.getElementById('appointmentForm').style.display = type === 'appointment' ? 'block' : 'none';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    function submitQuery() {
      const name = document.getElementById('queryName').value;
      const text = document.getElementById('queryText').value;

      if (!name || !text) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Your query has been submitted. A doctor will get back to you soon.");
      closeModal();
    }

    function submitAppointment() {
      const name = document.getElementById('appointmentName').value;
      const phone = document.getElementById('appointmentPhone').value;

      if (!name || !phone || !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid name and 10-digit phone number.");
        return;
      }

      alert("Your appointment has been booked. You will receive a confirmation call.");
      closeModal();
    }
  