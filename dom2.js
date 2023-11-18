//Make the 2nd item have green background color
//Make the 3rd item invisible
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';

document.querySelector('ul li:nth-child(3)').style.display = 'none';
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL﻿
var secondItem = document.querySelectorAll('ul li:nth-child(2)');
for (var i = 0; i < secondItem.length; i++) {
  secondItem[i].style.color = 'green';
}
var oddItems = document.querySelectorAll('ul li:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = 'green';
}