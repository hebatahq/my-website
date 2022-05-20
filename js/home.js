let btn=document.querySelector("button");
let notifictionContent=document.querySelector("audio");
btn.addEventListener("click",function(){

    let notifiction=document.createElement("audio");
    notifiction.classList.add("audio");
    notifiction.textContent="notifiction2";
    notifictionContent.appendChild(notifiction)

    setTimeout(function() {
        notifiction.classList.add("remove")
        setTimeout(function(){notifiction.remove()},200)
    },3000);
   
})
import React from 'react';
import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';

export default function Notifications() {
  const playSound = () => {
    const audio = new Audio(url);
    audio.addEventListener('canplaythrough', (event) => {
      // the audio is now playable; play it if permissions allow
      audio.play();
    });
  };
  return (
    <MagicBell
      apiKey="MAGICBELL_API_KEY"
      userEmail="mary@example.com"
      onNewNotification={playSound}
    >
      {(props) => <FloatingNotificationInbox height={500} {...props} />}
    </MagicBell>
  );
}
function playAudio(){
document.getElementById("audio").play();
}