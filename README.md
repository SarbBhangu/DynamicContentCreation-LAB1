## Dynamic Content Creation
- In this lab, I created a dynamic shopping cart application to practice and reinforce my DOM manipulation skill.

# Folders inside 
- index.html
- style.css
- script.js

# Reflection Questions
1. How did you dynamically create and append new elements to the DOM?
- I used document.createElement() to make a ne li and appendChild () to add it to the cart.

2. What steps did you take to ensure accurate updates to the total price?
- I made a function called updateTotal() that added or subtracted the price whenever a product was added or remove.

3. How did you handle invalid input for product name or price?
- Created an alert that returns 'Please enter a product name!'

4. What challenges did you face when implementing the remove functionality?
- It was a little confusing on how to make the Remove button delete the right item, but understanding e.target and closest (), really made things easier.