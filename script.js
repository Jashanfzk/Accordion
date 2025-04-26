function accordion_toggle(sectionId) {
    var allSections = document.querySelectorAll('.accordion-section');
    var section = document.getElementById(sectionId);
  
    
    allSections.forEach(function(s) {
      if (s.id !== sectionId) {
        s.style.display = "none";
      }
    });
  
    
    if (section.style.display === "block") {
      section.style.display = "none";
      console.log("Closed: " + sectionId);
    } else {
      section.style.display = "block";
      console.log("Opened: " + sectionId);
    }
  }
  
  
  window.onload = function() {
    var links = document.querySelectorAll('.accordion-link');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        accordion_toggle(targetId);
      });
    });
  };
  