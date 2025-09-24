import DOMPurify from 'dompurify';

const inputValue = document.querySelector('#value');
const btTest = document.querySelector("#bt_test");
const message = document.querySelector('#message');

btTest.addEventListener("click", ()=>{
  console.log(inputValue.value);
  //message.innerHTML = DOMPurify.sanitize(inputValue.value);
  console.log(DOMPurify.sanitize(inputValue.value));
});
