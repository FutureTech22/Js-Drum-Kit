function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
} //skip it if its not transform


function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; // stop the function

  key.classList.add('playing');
  audio.currentTime = 0; //rewind to start
  audio.play();
  
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

////copied and pasted


 // function removeTransition(e) {
   //   if (e.propertyName !== 'transform') return;
     // e.target.classList.remove('playing');
   // }

   // function playSound(e) {
   //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   //   if (!audio) return;

  //    key.classList.add('playing');
  //    audio.currentTime = 0;
  //    audio.play();
  //  }

  //  const keys = Array.from(document.querySelectorAll('.key'));
  //  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  //  window.addEventListener('keydown', playSound);
