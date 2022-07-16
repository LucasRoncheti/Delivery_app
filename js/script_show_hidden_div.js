
 
       var animation = '0.6s';            
     
       var main=document.getElementById('main')
       var acaiCremoso = document.getElementById('container01')

       
     

// função para mostrar/esconder container dos produtos
       
     //açaí cremoso
     function show(){
       let div=document.querySelector('#container01')
       let arrow = document.querySelector('.arrow')//seta do botão 
       
       
       
       if(div.style.height !== '930px'){
              
              div.style.height = '930px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,200)
              function top(){
                    const container01 = document.getElementById('container01')
                    container01.scrollIntoView({behavior:'smooth'});
                    
              }

              
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 

       //açaí tradicional
     function show2(){
       let div=document.querySelector('#container02')
       let arrow = document.querySelector('.a2')//seta do botão 
       let tmn="930px"
       
       
       
       if(div.style.height !== tmn){
              
              div.style.height = tmn;
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,200)
              function top(){
                     const container02 = document.getElementById('container02')
                     container02.scrollIntoView({behavior:'smooth'});
              }
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 
       //Hot dog
     function show3(){
       let div=document.querySelector('#container03')
       let arrow = document.querySelector('.a3')//seta do botão 
       let tmn="454px"
       
       
       
       if(div.style.height !== tmn){
              
              div.style.height = tmn;
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,200)
              function top(){
                     const container03 = document.getElementById('container03')
                    container03.scrollIntoView({behavior:'smooth'});}
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 
       //Salgados
     function show4(){
       let div=document.querySelector('#container04')
       let arrow = document.querySelector('.a4')//seta do botão 
       let tmn="330px"
       
       
       
       if(div.style.height !== tmn){
              
              div.style.height = tmn;
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,400)
              function top(){
                     const container04 = document.getElementById('container04')
                     container04.scrollIntoView({behavior:'smooth'});}
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 
     
       //Bebidas
     function show5(){
       let div=document.querySelector('#container05')
       let arrow = document.querySelector('.a5')//seta do botão 
       let tmn="900px"
       
       
       
       if(div.style.height !== tmn){
              
              div.style.height = tmn;
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,400)
              function top(){
                     const container05 = document.getElementById('container05')
                     container05.scrollIntoView({behavior:'smooth'});}
              
             
             
            
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
            
              
       }
     
       
              
             
              
       } 
       //Polpas de frutas
     function show6(){
       let div=document.querySelector('#container06')
       let arrow = document.querySelector('.a6')//seta do botão 
       let tmn="220px"
       
       
       
       if(div.style.height !== tmn){
              
              div.style.height = tmn;
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,400)
              function top(){
                     const container06 = document.getElementById('container06')
                     container06.scrollIntoView({behavior:'smooth'});}
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 
     



 
      
          






 


