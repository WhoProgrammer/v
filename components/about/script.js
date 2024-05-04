{
    function myFunction() {
      var toggle = document.getElementById("myDIV");
      if (toggle.style.opacity === "0") {
          toggle.style.opacity = "1"
          toggle.style.top = 0
      } else {
          toggle.style.opacity = "0"
          toggle.style.top = "-100%"
      }
      }
  }