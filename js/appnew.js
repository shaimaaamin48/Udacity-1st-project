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
for (let i=0; i< allSections.lenght; i++) {

let listItem= document.createElement("li");// creating a list

let link= document.createElement("a");// creating link anchor

let sectionId= allSections[i].getAttribute("id");
// as written in tip3 get the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #.
link.innerHTML = 'href= "#sectionId"'  ; // add href content to the anchor as wirtten in tip 3

let linkText= allSections[i].getAttribute("data-nav");
 // here i got the data-nave value from the each element by using its index -tip 3

link.textContent= linkText; // add the text to the anchor rather than creating a textnode i prefered to use textContent- tip 3

link.addEventListener("click", section.scrollIntoView({behavior: "smooth"})); // add scrollIntoview with the link as llike what instructor said.

listItem.appendChild(link);// append the anchor link to list item

fragment.appendChild(listItem);//append the list item to navMenu ul list.
}; // end of the loop.

navMenu.appendChild(fragment); // append fragment to the ul list nave menu variable created at te beginning
/*end of creating nav Menu but I have no idea why it dosen't appear on my webpage.
This is frustrating, I was working for a long time and change some code to make it appear
In the beginning i uesd foreach and it doesn't work , i uesd for of loop and also it doesn't work at the end i decided to use old for loop
and also it doesn't work!!!!
*/

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
