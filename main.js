// Get all the radio buttons and box-expanded elements

const radioButtons = document.querySelectorAll('input[type="radio"]');
const expandedBoxes = document.querySelectorAll('.box-expanded');

// Add event listeners to the radio buttons

radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('click', () => {

      // Unchecking all radio buttons
      radioButtons.forEach(rb => {
        rb.checked = false;
      });
  
      // Checking the clicked radio button
      radioButton.checked = true;
  
      // Hiding all expanded boxes
      expandedBoxes.forEach((box) => {
        box.style.display = 'none';
      }); 

    // Showing the clicked box-expanded
    expandedBoxes[index].style.display = 'block';

    // Updating the box styles if the radiobutton is clicked

    expandedBoxes.forEach((box, boxIndex) => {
      if (index === boxIndex) {
        box.parentElement.style.border = '0.904px solid #007F61';
        box.parentElement.style.background = '#F4FBF9';
        box.parentElement.style.height = "161.781px";

        // as the third box has three pairs, increasing the height
        if(index===2){
            box.parentElement.style.height = "195.781px"  
        }

//as the first box has 1 pair, decresing the height
        if(index===0){
            box.parentElement.style.height = "127.781px"
        }
      } else {
        box.parentElement.style.border = '0.904px solid #c8c8c8';
        box.parentElement.style.background = '#fff';
        box.parentElement.style.height = "74.112px"
      }
    });

    // Changing radio button color when clicked
    radioButtons.forEach((rb, rbIndex) => {
        if ( index === rbIndex) {
            rb.parentElement.style.accentColor= '#007F61';   
        } else{
            rb.parentElement.style.stroke='#DADADA';
        }
  });
});

});

