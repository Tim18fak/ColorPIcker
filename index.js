const lockButtons =  document.querySelectorAll('.open')
const colorPalette =  document.
querySelectorAll('.color_palette')
const refreshBtn = document.querySelectorAll('.refresh')
const generateColor = document.querySelectorAll('.generate_color')
const rgbValue =  document.querySelectorAll('.color_rgbValue')


const RandomColor = function(num){
 return Math.floor(Math.random() * (num + 1))
}

console.log(generateColor,lockButtons)

// lock color logic
lockButtons.forEach((button,index) => {
 button.addEventListener('click',function(){
  console.log(button.classList)
  if(button.classList == 'open'){
   refreshBtn[index].style.display =  'none'
   button.textContent =  'Locked'
   button.classList =  'lock'
   button.style.backgroundColor =  ' black'
   button.style.color = 'white'
  }else if(button.classList == 'lock'){
   console.log(button.classList)
   refreshBtn[index].style.display =  'block'
   button.style.backgroundColor =  ''
   button.style.color = ''
   button.textContent =  'Opened'
   button.classList =  'open'
   // generateColor.style.display = 'block'
  }
 })
})
//  default color generator
document.querySelector('.generate_color').addEventListener('click',function(e){
 e.stopPropagation()
 console.log(e)
 const colorRgbArray = [RandomColor(255),RandomColor(255),RandomColor(255)];
 colorPalette.forEach((palette,index) => {
  palette.style.backgroundColor = `rgb(${(index + 3) * index + 1 * Math.floor(Math.random() * 1) + 1 },${RandomColor(255)},${RandomColor(255)})`
  lockButtons.forEach((button,index) => {
   button.classList =  'open'
   refreshBtn[index].style.display =  'block'
   button.style.backgroundColor =  ''
   button.style.color = ''
  })

 })
})
//  refresh color 
//  .parentElement is used to access the parent element of any html tag
refreshBtn.forEach((btn,index) => {
 btn.addEventListener('click',function(){
  const colorRgbArray = [RandomColor(255),RandomColor(255),RandomColor(255)];
  console.log(colorRgbArray)
  btn.parentElement.style.backgroundColor = `rgb(${colorRgbArray[0]},${colorRgbArray[1]},${colorRgbArray[2]})`
  rgbValue[index].textContent =  `rgb(${colorRgbArray[0]},${colorRgbArray[1]},${colorRgbArray[2]})`
 })
})


/* 
create a random function that generate the colors for each of the div tag
i. know when the buttons are clicked and lock the color the div has, the color should not change again
11. refresh the color
 */