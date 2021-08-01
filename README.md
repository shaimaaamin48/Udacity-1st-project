# Landing Page Project

## Table of Contents

## Basic project information
landing page- Udacity professional track 1st project

## instruction
In this project we will use 3 file: `index.html`, `js/appnew.js`,`css/styles.css`.

## requirement:
1. change in the HTML Structure by adding 4th section.
2. Building a dynamic navigation Menu
3. Scroll to Anchor: When clicking an item from the navigation menu, the link should scroll to the appropriate section.
4. Section Active State: It should be clear which section is being viewed while scrolling through the page.

## addition features:
* The usability across modern desktop, tablet, and phone browsers.
* highlight functionality when scrolling to active sections & links.

## Techniques used:

 *HTML STRUCTURE* I have added the 4th required section to the page just by just by copying the same previous html code of (section 3)/then edit all the data to section 4 rather than 3.

*Building the dynamic Navigation Menu*:

  **Used Methods**
  1. querySelectorAll
  2. getElementByIdlement
  3. createDocumentFragment
  4. for of loop
  5. createElement
  6. getAttribute
  7. appendChild

*Scroll to Anchor*
  **Used Methods**
  1. addEventListener
  2. event.preventDefault
  3. section.scrollIntoView
  4. setAttribute

*Section Active State*
  **Used Methods**
  1. window.addEventListener
  2. for of loops
  3. getBoundingClientRect
  4. if conditions
  5. classList.add
  6. classList.remove

 *highlight functionality*
  * setAttribute-style

 *Responsive Landing-page (toggle menu)*
   1. In the beginning, made some changes in the `index.html`  by creating a div element for the toggle Menu and `css/styles.css` to use @media query
   2. add part 3 of code in the `js/appnew.js`, to add an event click listener and the function inside the event listener to connect toggleMenu with our navBar


## Challenges:
 * Make the scrolling functionality
 * Highlight functionality- for active links
 * Responsive view

## Links:
 During working on this project, in addition to the course material, I had to use some links as references. My references links are:
1. https://docs.google.com/presentation/d/1JsVWUrJmDcS2l7tDrTnaaJUqEmDSzz6GQnw34HUtu1A/edit#slide=id.g58d3b44f08_1_18

2. https://nfpdiscussions.udacity.com/t/landing-page-project-recap/58293

3. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

4. https://www.youtube.com/watch?v=bIlqqzI4ByE
