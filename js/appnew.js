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
for (let i=0; i< allSections.length; i++) { // 1st note form the reviewer- has been corrected  " was typing lenght rather that length , Thanks:)

let listItem= document.createElement("li");// creating a list

let link= document.createElement("a");// creating link anchor

let sectionId= allSections[i].getAttribute("id");
// as written in tip3 get the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #.
link.innerHTML = 'href= "#sectionId"'  ; // add href content to the anchor as wirtten in tip 3

let linkText= allSections[i].getAttribute("data-nav");
 // here i got the data-nave value from the each element by using its index -tip 3

link.textContent= linkText; // add the text to the anchor rather than creating a textnode i prefered to use textContent- tip 3

link.addEventListener("click", allSections[i].scrollIntoView({behavior: "smooth"})); // add scrollIntoview with the link as llike what instructor said.
// 2nd note from the reviwer- has been corrected in the above line- (i typed allSections[i] instead of section)

link.setAttribute("class", "menu__link"); // 3rd note from the reviwer- thois line to  to use the CSS to show the navigation items correctly

listItem.appendChild(link);// append the anchor link to list item

fragment.appendChild(listItem);//append the list item to navMenu ul list.
}; // end of the loop.

navMenu.appendChild(fragment); /* append fragment to the ul list nave menu variable created at te beginning
/ the nav menu appears now locally on my webpage, Many thanks for the notes & feedback it helps me a lot.*/

// Add class 'active' to section when near top of viewport

// for of loop to toop over each section inside the allSections array
  for(const section of allSections) {
  let docRect= section.getBoundingClientRect(); // assign a variable for the getBounding
  if (docRect.top>0 && docRect.top<= 300){
      section.classlist.add("your-active-class");
      }
      else {
      section.classlist.remove("your-active-class");
      }
};

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
