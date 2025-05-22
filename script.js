// Collapsible sections
function toggleSection(id) {
    const sections = document.querySelectorAll('.collapsible');
    sections.forEach(section => {
      if (section.id === id) {
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  // Contact form validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (!name || !email || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields.";
      return;
    }
  
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! We'll contact you soon.";
    this.reset();
  });

  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Save to DB or send email
    res.send('Message received!');
  });
  
  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  // Optional: Close when clicking outside the modal
  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }


<script>
  // Disable right-click
  document.addEventListener("contextmenu", event => event.preventDefault());

  // Disable key combos (like PrintScreen or Ctrl+S)
  document.addEventListener("keydown", function(e) {
    if (e.key === "PrintScreen" || 
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.ctrlKey && e.shiftKey && e.key === "i")) {
      e.preventDefault();
    }
  });
</script>

<div style="
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 9999;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.001);
">
</div>

