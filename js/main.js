'use strict' 
{
  // 定義
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];     
    target.textContent = word;
  }
  const target = document.getElementById('target');
  const words = ['yowanehaki','vaundy','yorusikasikakatan','zuttomayonakadeiinoni'];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  // 時間表示
  
  // カウントダウン
  // const timer = document.getElementById('timer');
  
  // function countdown () {
    //   const now = new Date();
    //   const later = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHoursours(),now.getMinutes(),now.getSeconds()+10);
    //   const differ = later.getTime() - now.getTime();
    
    //   const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    // const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
    // const hour=Math.floor(differ/1000/60/60);
    
    //   document.getElementById("sec").textContent=String(sec).padStart(2,"0");
    
    //   if(sec > 0){
      //   setTimeout(countdown,1000);
      //   }
      
      // }
      
      // timer.textContent = countdown();
      
      
      
      // クリックされたら
      document.onkeydown = function(event)  {    
        if(event.key === 'Enter'){
        
        if(isPlaying === true){
          return;
        }
        isPlaying = true;
        startTime = Date.now();
        setWord();
      }
      };
      
      
      // 入力
      
      document.addEventListener('keydown',e => {
        if(e.key !== word[loc]){
          return;
        }
        loc++;
        target.textContent = '.'.repeat(loc) + word.substring(loc);
        
        if(loc === word.length){
          loc = 0;
          if(words.length === 0){
            const result = document.getElementById('result');
            const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2) ;
            result.textContent = `Your time is ${elapsedTime}s.`;

       
          }
          setWord();
        }
        
      });
      
    }