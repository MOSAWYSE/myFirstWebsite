/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function validate()
        {
            //let v = document.getElementById("textInput").value;
            
            var checker = document.getElementById("textInput").value;
            var checkText = document.myForm.Name.value;
            let promptText;
            
            if(checkText == "")
            {
                alert("Text Input must be filled out");
                document.myForm.Name.focus();
                
                return false;
             }
             else if(document.myForm.EMail.value == "")
             {
                 alert("Enter your email address");
                 document.myForm.EMail.focus();
                 return false;
                 
             }
             
            return( true );
            /*if(isNaN(v))
            {
                promptText = "Input is incorrect";
            }
            else
            {
             promptText = "Input was successfully captured";   
            }
            document.getElementById("alertUser").innerHTML = promptText;
            */
        }
        
        
        
  let slideIndex = 1;
        showSlides(slideIndex);

        // Buttons controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }


        function showSlides(n) 
        {
          let i;
          let pictures = document.getElementsByClassName("myPictures");
          let dots = document.getElementsByClassName("cursor");
          let captionText = document.getElementById("caption");
            if (n > pictures.length)
            {
                slideIndex = 1;
            }
            if (n < 1)
            {
                slideIndex = pictures.length;
            }
            for (i = 0; i < pictures.length; i++)
            {
              pictures[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) 
            {
              dots[i].className = dots[i].className.replace(" active", "");
            }
          pictures[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
        


