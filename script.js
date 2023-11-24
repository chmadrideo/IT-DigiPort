let slideIndex = 1;
        //calling slider function, passing slide Index
        showSlides(slideIndex);
        
        // Next/previous slide control
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        //Current image control
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          //getting the slider html and assigning to slides variable
          let slides = document.getElementsByClassName("slide");
          
          //loops back around from right most indexed slide
          if (n > slides.length) {slideIndex = 1}    

          //loops back around from leftmost indexed slide
          if (n < 1) {slideIndex = slides.length}

          //hides slides not in the current index
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          
          //shows slides by displaying them
          slides[slideIndex-1].style.display = "block";  
          
        }