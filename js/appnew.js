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
for (const section of allSections) { // using for of loop ad recommended from the reviwer

let link= document.createElement("a");// creating link anchor

let listItem= document.createElement("li");// creating a list
//when moving the line to up before the for of loop the navMenu list items display as block(vertical) & that's why i'll keep it here.

let sectionId= section.getAttribute("id");
// as written in tip3 get the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #.
link.innerHTML = 'href= "#sectionId"'  ; // add href content to the anchor as wirtten in tip 3

let linkText= section.getAttribute("data-nav");
 // here i got the data-nave value from the each element by using its index -tip 3

link.textContent= linkText; // add the text to the anchor rather than creating a textnode i prefered to use textContent- tip 3

// Scroll to anchor ID using scrollIntoView event
link.addEventListener("click", ()=>{ // here we used an arrow function to put the scrollIntoView method to it
  event.preventDefault(); // to avoid taking the action from href
  section.scrollIntoView({behavior: "smooth", block: "center"}); // add scrollIntoView as wriiten in udacity presentation tip 8
}); //it works- thank god

link.setAttribute("class", "menu__link"); // this line to  to use the CSS to show the navigation items correctly

listItem.appendChild(link);// append the anchor link to list item

fragment.appendChild(listItem);//append the list item to navMenu ul list.

}; // end of  1st loop.
navMenu.appendChild(fragment);

/*part 2
Add class 'active' to section when near top of viewport
 my code*/
window.addEventListener("scroll",() => {
  // for loop to toop over each section inside the allSections array
    for(const section of allSections) { // use a for of loop as recommended
      // assign a variable for the getBounding
      let docRect= section.getBoundingClientRect();
      // assign the variable for active sections
      let activeSection= section.getAttribute('data-nav');
      // assign a variable for links
      let links= document.querySelectorAll("a");
     // 1st check the result of getBoundingClientRect
      if (docRect.top>=0 && docRect.top<=300){ //checking the dimention of current view
            section.classList.add('your-active-class'); //adding the active class to the active section
            // loop over the links
            for (const link of links){ // 2nd check if the active section equals to the link text.
              if (link.textContent===activeSection){
                link.classList.add('your-active-class');
                link.setAttribute('style', 'background-color: red;'); // adding a highlights to the link when it's active
              }// end of link if statement
              else {
                link.classList.remove('your-active-class');// removing active class from non-active link
                link.setAttribute('style', 'background-color:blue;'); // removing the highlights from the link when is  not active
              } //end of else statement
            }// end of links loop
      }// end of 1st if statement
      else {
          // removing the active class from all other Sections
          section.classList.remove('your-active-class');
        }//end of else statement
    }// end of second loop

}); // end of window event listener

/*Part 3 make navmenu responsive
after editing some parts in the html file & css file now i should connect javascript code to them
 my code is */

 // assign a variable for the div toggle menu
  let toggleMenu= document.getElementById('toggle');
// assiagn a variable for the nav tag that includes the ul &li of the navmenu
  const navBar= document.getElementById('navbar');

// add aclick event listener for the toggle menu
 toggleMenu.addEventListener("click", ()=>{ // an arrow function for the toggleMenu

  // the following line just for testing the click event
  //alert("the click event works");-- it works.

  // changing the display of nav from none to block - thank God it works beacuse 
    navBar.setAttribute('style', 'display:block;');

});// end of event listener toggle function

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu--done

// Scroll to section on link click-- done

// Set sections as active--done
