// Used to toggle the menu on small screens when clicking on the menu button
function toggleDropdown() {
    var x = document.getElementById("navDropdown");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
function showModal () {
    document.getElementById('ticketModal').style.display='block';
}

function hideModal () {
    document.getElementById('ticketModal').style.display='none';
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


