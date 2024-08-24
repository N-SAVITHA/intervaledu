const popupButton = document.getElementById("popup-btn");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-btn");

// Function to open the popup
function openPopup() {
  popup.classList.remove("hidden"); // Assuming you have a class "hidden" for hidden state (or modify as needed)
}

// Function to close the popup
function closePopup() {
  popup.classList.add("hidden");
}

// Add click event listener to the button
popupButton.addEventListener("click", openPopup);

// Add click event listener to the close button
closeButton.addEventListener("click", closePopup);

<div id="popup" class="popup">
            <div class="popupcontent">
                <span class="close-btn" id="close-btn">&times;</span>
                <div class="ptitle"><h5><b>Book Your Free Demo</b></h5></div>
                <div>
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>