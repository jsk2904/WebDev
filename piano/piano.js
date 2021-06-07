'use strict';

const play = (name) => {
 document.querySelector(`#${name}`).play();
}

const col = document.querySelector('#favcolor');
const whtBtn = document.getElementsByClassName('white');
const blkBtn = document.querySelector('.black');
col.addEventListener('input', () => {
 console.log(whtBtn);
 for (let item of whtBtn) {
  // item.setAttribute('style', `background-color:${col.value}`);
  item.style.backgroundColor = col.value;
 }
})