
// target
// const heading= document.querySelector('.heading')
// const heading2= document.querySelector('#heading2')
// console.log(heading);
// console.log(heading2);

// Dom travers
// parentNode
// const heading=document.querySelector('.heading');

// console.log(heading.parentNode);
// childNodes
// const parent=document.querySelector('.parent');

// console.log(parent.childNodes);

// nextElementSibling and previousElementSibling

// const heading=document.querySelector('.heading');
// const heading2=document.querySelector('#heading2');
// console.log(heading.nextElementSibling);
// console.log(heading2.previousElementSibling);

// Manupulation

// const heading=document.querySelector('.heading');
//   heading.innerHTML=('My Name is Setu Lal Chowhan')
//   heading.style.color='red'
//   heading.style.fontSize='100px'
//   heading.classList.add("Head")
//   heading.classList.remove("Head");

// const para= document.createElement('p');
// para.innerHTML=("Love Everything")

// para.classList.add("p1");

// const parent=document.querySelector('.parent');
// const heading2=document.querySelector('#heading2');
// // parent.appendChild(para)
// heading2.insertAdjacentElement('beforebegin',para);
// para.style.fontWeight='bold';


// bulbproject
const button=document.querySelector('.btn');
const bulb=document.querySelector('#bulbOn');

   button.addEventListener('click',()=>{
      if(bulb.src.match('OFFbulb'))
      {
          bulb.src='./ONbulb.jpg'
          button.innerHTML='Turn Off'
      }
      else{
          bulb.src='./OFFbulb.jpg'
          button.innerHTML="Turn On"

      }
      
   })


