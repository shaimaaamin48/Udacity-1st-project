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

link.addEventListener("click", allSections[i].scrollIntoView({behavior: "smooth"})); // add scrollIntoview with the link as llike what instructor said.

link.setAttribute("class", "menu__link"); // this line to  to use the CSS to show the navigation items correctly

listItem.appendChild(link);// append the anchor link to list item

fragment.appendChild(listItem);//append the list item to navMenu ul list.

}; // end of  1st loop.
navMenu.appendChild(fragment);

// Add class 'active' to section when near top of viewport
// assign a variable for the getBounding
let docRect= allSections[""].getBoundingClientRect();
// assign the variable for active sections
let activeSection= allSections[""].getAttribute('data-nav');
// for loop to toop over each section inside the allSections array
  for(let j=0; j<allSections.length; j++) {
    // apply getBoundingClientRect to the ech section by calling its variable
      docRect;
      // check if the active section eaquals to the lintext that was clarified in the first above loop
      if (activeSection===linkText){
        // removing the active class from all Sections
          allSections.classList.remove('your-active-class');
          /*i don't undertsand where is the error in this line
          it was written in the instructor presentation remove active classes from all sections*/
          //adding the active class to the active sections
          allSection[j].classList.add('your-active-class');
      }
  };// end of 2nd loop


// Scroll to anchor ID using scrollTO event
// done in the fisrt method inside the loop.

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
