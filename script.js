console.log("hello");
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let playAudio=document.getElementById('playAudio');
let progressBar=document.getElementById('progressBar');
let songTrack=Array.from(document.getElementsByClassName('songTracks'));
let songs=[
    {songName:"On My Way",filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName:"On & On",filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg"},
    {songName:"Something Just",filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg"},
    {songName:"Nineteen",filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName:"Perfect Strangers",filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
    {songName:"Peaky Blinder",filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg"},
    {songName:"Closer",filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg"},
]
songTrack.forEach((element,i) => {
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
playAudio.addEventListener('click',()=>{
  if(audioElement.paused||audioElement.currentTime<=0)
  {
    audioElement.play();
    playAudio.classList.remove('fa-play-circle');
    playAudio.classList.add('fa-pause-circle');
  }
  else{
    audioElement.pause();
    playAudio.classList.remove('fa-pause-circle');
    playAudio.classList.add('fa-play-circle');  
  }
})
audioElement.addEventListener('timeupdate',()=>{
  console.log("time update");
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=((progressBar.value)*(audioElement.duration))/100;
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  }) 
}
// const makeAllPause=()=>{
//   Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
//     element.classList.remove('fa-pause-circle');
//     element.classList.add('fa-play-circle');
//   }) 
// }
Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      if(!(audioElement.paused))
      {
        audioElement.pause();
        e.target.classList.remove('fa-pause-circle');
     e.target.classList.add('fa-play-circle');
     playAudio.classList.remove('fa-pause-circle');
   playAudio.classList.add('fa-play-circle'); 
      }
      else{
      makeAllPlays();
      songIndex=parseInt(e.target.id);
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   playAudio.classList.remove('fa-play-circle');
   playAudio.classList.add('fa-pause-circle');  
      }
    })
})
// Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
//   element.addEventListener('click',(e)=>{
//     makeAllPause();
//     songIndex=parseInt(e.target.id);
//  e.target.classList.remove('fa-pause-circle');
//  e.target.classList.add('fa-play-circle');
//  audioElement.src=`songs/${songIndex+1}.mp3`;
//  audioElement.currentTime=0;
//  audioElement.play();
//  playAudio.classList.remove('fa-pause-circle');
//  playAudio.classList.add('fa-play-circle');  
//   })
// })
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0)
  {
    songIndex=0;
  }
  else
  {
    songIndex-=1;
  }
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   makeAllPlays();
   document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
   document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
   playAudio.classList.remove('fa-play-circle');
   playAudio.classList.add('fa-pause-circle');

})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=6)
  {
    songIndex=0;
  }
  else
  {
    songIndex+=1;
  }
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   makeAllPlays();
   document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
   document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
   playAudio.classList.remove('fa-play-circle');
   playAudio.classList.add('fa-pause-circle');

})