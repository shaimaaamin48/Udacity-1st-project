/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
let allSections= document.querySelectorAll("section"); // select all  sections tip 1.

let navMenu= document.getElementById("navbar__list"); // create a variable for nav menu to aapend the fragment to it al the end of this part.

const fragment= document.createDocumentFragment(); // tip2 create the fragment for performance

// tip3 ceatre a loop to loop over the items "sections" that are declared in the variable (allSections)
for (let i=0; i< allSections.length; i++) {

let listItem= document.createElement("li");// creating a list

let link= document.createElement("a");// creating link anchor

let sectionId= allSections[i].getAttribute("id");
// as written in tip3 get the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #.
link.innerHTML = 'href= "#sectionId"'  ; // add href content to the anchor as wirtten in tip 3

let linkText= allSections[i].getAttribute("data-nav");
 // here i got the data-nave value from the each element by using its index -tip 3

link.textContent= linkText; // add the text to the anchor rather than creating a textnode i prefered to use textContent- tip 3

// after editing according to instructor advice
link.addEventListener("click", ()=>{ // here we used an arrow function to put the scrollIntoView method to it
  event.preventDefault(); // to avoid taking the action from href
  allSections[i].scrollIntoView({behavior: "smooth", block: "center"}); // add scrollIntoView as wriiten in udacity presentation tip 8
}); //it works- thank god

link.setAttribute("class", "menu__link"); // this line to  to use the CSS to show the navigation items correctly

listItem.appendChild(link);// append the anchor link to list item

fragment.appendChild(listItem);//append the list item to navMenu ul list.

}; // end of  1st loop.
navMenu.appendChild(fragment);

// Add class 'active' to section when near top of viewport
// my code
window.addEventListener("scroll",() => {
  // for loop to toop over each section inside the allSections array
    for(let j=0; j<allSections.length; j++) {
      // assign a variable for the getBounding
      let docRect= allSections[j].getBoundingClientRect();
      // assign the variable for active sections
      let activeSection= allSections[j].getAttribute('data-nav');
      // assign a variable for links
      let links= document.querySelectorAll("a");
     // 1st check the result of getBoundingClientRect
      if (docRect.top>=0 && docRect.top<=300){ //checking the dimention of current view
            allSections[j].classList.add('your-active-class'); //adding the active class to the active section
            // loop over the links
            for (const link of links){ // 2nd check if the active section equals to the link text.
              if (link.textContent===activeSection){
                link.classList.add('your-active-class');
              }// end of link if statement
              else {
                link.classList.remove('your-active-class');// removing active class from non-active link
              } //end of else statement
            }// end of links loop
      }// end of 1st if statement
      else {
          // removing the active class from all other Sections
          allSections[j].classList.remove('your-active-class');
        }//end of else statement
    }// end of second loop

}); // end of window event listener

// Scroll to anchor ID using scrollTO event
// it is done in the fisrt loop
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu--done

// Scroll to section on link click-- done

// Set sections as active--done
