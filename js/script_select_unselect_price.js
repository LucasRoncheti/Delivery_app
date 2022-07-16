



//for(var i= 0; i < chk_comp.length;i++){
  // if(chk_comp[i].checked){
 //      complementos2.push(chk_comp[i].value);
//   }

//}

//variáveis com tamanho dos açaís  CREMOSO

var _300ml = document.getElementById('300ml');
var _500ml = document.getElementById('500ml');
var _700ml = document.getElementById('700ml');
var _1L = document.getElementById('1L');
var _nutela = document.getElementById('nutela')


//variáveis com os preços 
var _R$8 = document.getElementById('preco300mlCremoso')
var _R$10 = document.getElementById('preco500mlCremoso')
var _R$14 = document.getElementById('preco700mlCremoso')
var _R$20 = document.getElementById('preco1LCremoso')
var _R$3 = document.getElementById('precoAcrescimoCremoso')


//evento de click
_300ml.addEventListener('click',selecionarPreco)
_500ml.addEventListener('click',selecionarPreco1)
_700ml.addEventListener('click',selecionarPreco2)
_1L.addEventListener('click',selecionarPreco3)
_nutela.addEventListener('click',selecionarPreco4)


//função audio dos inputs
function play_audio(){

   console.log('audio')
}

//funções que seleciona os preços cremoso

function selecionarPreco(){

   if(_300ml.value='300ml' || _500ml.checked || _700ml.checked || _1L.checked){
     
         _R$8.classList.remove('fcp_unselected')
         _R$8.classList.add('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')

         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}


function selecionarPreco1(){

   if(_500ml.value='500ml' || _300ml.checked || _700ml.checked || _1L.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.remove('fcp_unselected')
         _R$10.classList.add('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco2(){

   if(_700ml.value='700ml' || _300ml.checked || _500ml.checked || _1L.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.remove('fcp_unselected')
         _R$14.classList.add('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco3(){

   if( _1L.value='1L' || _300ml.checked || _500ml.checked || _700ml.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.remove('fcp_unselected')
         _R$20.classList.add('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco4(){

   if(_nutela.checked == true){
     
         _R$3.classList.add('fcp')
         _R$3.classList.remove('fcp_unselected')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }else{
            _R$3.classList.remove('fcp')
            _R$3.classList.add('fcp_unselected')
      
   }


}

//---------------------------------------------------------



//variáveis com tamanho dos açaís  TRADICIONAL

var _300ml_trad = document.getElementById('300ml_trad');
var _500ml_trad = document.getElementById('500ml_trad');
var _700ml_trad = document.getElementById('700ml_trad');
var _1L_trad = document.getElementById('1L_trad');
var _nutela_trad = document.getElementById('nutela_trad')

//variáveis com os preços tradicional
var _R$8_trad = document.getElementById('preco300ml_trad')
var _R$10_trad = document.getElementById('preco500ml_trad')
var _R$14_trad = document.getElementById('preco700ml_trad')
var _R$20_trad = document.getElementById('preco1L_trad')
var _R$3_trad = document.getElementById('precoAcrescimo_trad')

//evento de click
_300ml_trad.addEventListener('click',selecionarPreco5)
_500ml_trad.addEventListener('click',selecionarPreco6)
_700ml_trad.addEventListener('click',selecionarPreco7)
_1L_trad.addEventListener('click',selecionarPreco8)
_nutela_trad.addEventListener('click',selecionarPreco9)


//funções que seleciona os preços TRADICIONAL

function selecionarPreco5(){

   if(_300ml_trad.value='300ml' || _500ml_trad.checked || _700ml_trad.checked || _1L_trad.checked){
     
         _R$8_trad.classList.remove('fcp_unselected')
         _R$8_trad.classList.add('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco6(){

   if(_500ml_trad.value='500ml' || _300ml_trad.checked || _700ml_trad.checked || _1L_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.remove('fcp_unselected')
         _R$10_trad.classList.add('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco7(){

   if(_700ml_trad.value='700ml' || _300ml_trad.checked || _500ml_trad.checked || _1L_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.remove('fcp_unselected')
         _R$14_trad.classList.add('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco8(){

   if( _1L_trad.value='1L' || _300ml_trad.checked || _500ml_trad.checked || _700ml_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.remove('fcp_unselected')
         _R$20_trad.classList.add('fcp')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }


}
function selecionarPreco9(){

   if(_nutela_trad.checked == true){
     
         _R$3_trad.classList.add('fcp')
         _R$3_trad.classList.remove('fcp_unselected')
         let mySound = new Audio('sounds/ploc.mp3')
         mySound.play()
     
   }else{
            _R$3_trad.classList.remove('fcp')
            _R$3_trad.classList.add('fcp_unselected')
      
   }


}





//--------------------------------------------------------

//variáveis com tamanho hot dog

//hot dog tradicional
var hdt = document.getElementById('hdt');
//hot dog gourmet clabresa
var hdgc = document.getElementById('hdgc');
//hot dog prensado
var hdp = document.getElementById('hdp');

//variáveis com os preços hotdog
var R$_hdt = document.getElementById('hdtp')
var R$_hdgc = document.getElementById('hdgcp')
var R$_hdp = document.getElementById('hdpp')

//variáveis com as descrições hotdog
var hd01_desc = document.getElementById('hd01_desc')
var hd02_desc = document.getElementById('hd02_desc')
var hd03_desc = document.getElementById('hd03_desc')

//funções que seleciona os preços tradicional

function selecionarPrecoHotDogTradicional(){

   if(hdt.checked==true){
     
      
      R$_hdt.classList.add('fcp_color')
      
      hd01_desc.classList.add('fcp_color')
      hd01_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
      

     
   }else{
      R$_hdt.classList.remove('fcp_color')
      hd01_desc.classList.remove('fcp_color')
      hd01_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}

//funções que seleciona os preços Gourmet
function selecionarPrecoHotDogGourmet(){

   if(hdgc.checked==true){
     
      
      R$_hdgc.classList.add('fcp_color')
      
      hd02_desc.classList.add('fcp_color')
      hd02_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
      

     
   }else{
      R$_hdgc.classList.remove('fcp_color')
      hd02_desc.classList.remove('fcp_color')
      hd02_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
//funções que seleciona os preços Prensado
function selecionarPrecoHotDogPrensado(){

   if(hdp.checked==true){
     
      
      R$_hdp.classList.add('fcp_color')
      
      hd03_desc.classList.add('fcp_color')
      hd03_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
      

     
   }else{
      R$_hdp.classList.remove('fcp_color')
      hd03_desc.classList.remove('fcp_color')
      hd03_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}

//evento de click
hdt.addEventListener('click',selecionarPrecoHotDogTradicional)
hdgc.addEventListener('click',selecionarPrecoHotDogGourmet)
hdp.addEventListener('click',selecionarPrecoHotDogPrensado)



//--------------------------------------------------------

//SALGAOS

var salgado01 = document.getElementById('efr')
var salgado02 = document.getElementById('eqp')
var salgado03 = document.getElementById('bauru')
var salgado04 = document.getElementById('hamburguer')

//variáveis com preços sagados

var salg_preco01 = document.getElementById('salg_preco01')
var salg_preco02 = document.getElementById('salg_preco02')
var salg_preco03 = document.getElementById('salg_preco03')
var salg_preco04 = document.getElementById('salg_preco04')

//evento click

salgado01.addEventListener('click',selecionarPrecoSalgado01)
salgado02.addEventListener('click',selecionarPrecoSalgado02)
salgado03.addEventListener('click',selecionarPrecoSalgado03)
salgado04.addEventListener('click',selecionarPrecoSalgado04)


// funções

function selecionarPrecoSalgado01(){

   if(salgado01.checked==true){
     
      
      salg_preco01.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      salg_preco01.classList.remove('fcp_color')
   }


}
function selecionarPrecoSalgado02(){

   if(salgado02.checked==true){
     
      
      salg_preco02.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      salg_preco02.classList.remove('fcp_color')
   }


}
function selecionarPrecoSalgado03(){

   if(salgado03.checked==true){
     
      
      salg_preco03.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      salg_preco03.classList.remove('fcp_color')
   }


}
function selecionarPrecoSalgado04(){

   if(salgado04.checked==true){
     
      
      salg_preco04.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      salg_preco04.classList.remove('fcp_color')
   }


}
//--------------------------------------------------------------


//Bebidas

var Bebida01 = document.getElementById('bd01')
var Bebida02 = document.getElementById('bd02')
var Bebida03 = document.getElementById('bd03')
var Bebida04 = document.getElementById('bd04')
var Bebida05 = document.getElementById('bd05')
var Bebida06 = document.getElementById('bd06')
var Bebida07 = document.getElementById('bd07')
var Bebida08 = document.getElementById('bd08')
var Bebida09 = document.getElementById('bd09')
var Bebida10 = document.getElementById('bd10')
var Bebida11 = document.getElementById('bd11')
var Bebida12 = document.getElementById('bd12')
var Bebida13 = document.getElementById('bd13')
var Bebida14 = document.getElementById('bd14')
var Bebida15 = document.getElementById('bd15')
var Bebida16 = document.getElementById('bd16')

//variáveis com preços bebidas

var Bebida01_preco = document.getElementById('bdp01')
var Bebida02_preco = document.getElementById('bdp02')
var Bebida03_preco = document.getElementById('bdp03')
var Bebida04_preco = document.getElementById('bdp04')
var Bebida05_preco = document.getElementById('bdp05')
var Bebida06_preco = document.getElementById('bdp06')
var Bebida07_preco = document.getElementById('bdp07')
var Bebida08_preco = document.getElementById('bdp08')
var Bebida09_preco = document.getElementById('bdp09')
var Bebida10_preco = document.getElementById('bdp10')
var Bebida11_preco = document.getElementById('bdp11')
var Bebida12_preco = document.getElementById('bdp12')
var Bebida13_preco = document.getElementById('bdp13')
var Bebida14_preco = document.getElementById('bdp14')
var Bebida15_preco = document.getElementById('bdp15')
var Bebida16_preco = document.getElementById('bdp16')


//eventos click

Bebida01.addEventListener('click',selecionarPrecoBebida01)
Bebida02.addEventListener('click',selecionarPrecoBebida02)
Bebida03.addEventListener('click',selecionarPrecoBebida03)
Bebida04.addEventListener('click',selecionarPrecoBebida04)
Bebida05.addEventListener('click',selecionarPrecoBebida05)
Bebida06.addEventListener('click',selecionarPrecoBebida06)
Bebida07.addEventListener('click',selecionarPrecoBebida07)
Bebida08.addEventListener('click',selecionarPrecoBebida08)
Bebida09.addEventListener('click',selecionarPrecoBebida09)
Bebida10.addEventListener('click',selecionarPrecoBebida10)
Bebida11.addEventListener('click',selecionarPrecoBebida11)
Bebida12.addEventListener('click',selecionarPrecoBebida12)
Bebida13.addEventListener('click',selecionarPrecoBebida13)
Bebida14.addEventListener('click',selecionarPrecoBebida14)
Bebida15.addEventListener('click',selecionarPrecoBebida15)
Bebida16.addEventListener('click',selecionarPrecoBebida16)

//funções para selecionar preços Bebidas
function selecionarPrecoBebida01(){

   if(Bebida01.checked==true){
     
      
      Bebida01_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida01_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida02(){

   if(Bebida02.checked==true){
     
      
      Bebida02_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida02_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida03(){

   if(Bebida03.checked==true){
     
      
      Bebida03_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida03_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida04(){

   if(Bebida04.checked==true){
     
      
      Bebida04_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida04_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida05(){

   if(Bebida05.checked==true){
     
      
      Bebida05_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida05_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida06(){

   if(Bebida06.checked==true){
     
      
      Bebida06_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida06_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida07(){

   if(Bebida07.checked==true){
     
      
      Bebida07_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida07_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida08(){

   if(Bebida08.checked==true){
     
      
      Bebida08_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida08_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida09(){

   if(Bebida09.checked==true){
     
      
      Bebida09_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida09_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida10(){

   if(Bebida10.checked==true){
     
      
      Bebida10_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida10_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida11(){

   if(Bebida11.checked==true){
     
      
      Bebida11_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida11_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida12(){

   if(Bebida12.checked==true){
     
      
      Bebida12_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida12_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida13(){

   if(Bebida13.checked==true){
     
      
      Bebida13_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida13_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida14(){

   if(Bebida14.checked==true){
     
      
      Bebida14_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida14_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida15(){

   if(Bebida15.checked==true){
     
      
      Bebida15_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida15_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida16(){

   if(Bebida16.checked==true){
     
      
      Bebida16_preco.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      Bebida16_preco.classList.remove('fcp_color')
   }


}
//----------------------------------------
//--------------------------------------

//POlpa fe frutas

var polpa01 = document.getElementById('polpa01')
var polpa02 = document.getElementById('polpa02')

//preços
var polpa01P = document.getElementById('polpa01P')
var polpa02P = document.getElementById('polpa02P')

//eventos click
polpa01.addEventListener('click',selecionarPrecoPolpa01)
polpa02.addEventListener('click',selecionarPrecoPolpa02)

//funções selecionar preços
function selecionarPrecoPolpa01(){

   if(polpa01.checked==true){
     
      
      polpa01P.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      polpa01P.classList.remove('fcp_color')
   }


}
function selecionarPrecoPolpa02(){

   if(polpa02.checked==true){
     
      
      polpa02P.classList.add('fcp_color')
      let mySound = new Audio('sounds/ploc.mp3')
      mySound.play()
   
   }else{
      polpa02P.classList.remove('fcp_color')
   }


}


//função para cancelar todos os itens açaí tradicional

function unselected(){
   
   let mySound = new Audio('sounds/cancel_item.mp3')
   mySound.play()
    let radioButtonArray = document.getElementsByName('tamanho2');
    let radioButtonArray2 = document.getElementsByName('frutas2');
    let radioButtonArray3 = document.getElementsByName('complementos2');
    let radioButtonArray4 = document.getElementsByName('coberturas2');
    let radioButtonArray5 = document.getElementsByName('acrescimo');
   
    for (var i=0; i<radioButtonArray.length; i++)
    {
     var radioButton = radioButtonArray[i];
     radioButton.checked = false;
    }

    for (var i=0; i<radioButtonArray2.length; i++)
    {
     var radioButton = radioButtonArray2[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray3.length; i++)
    {
     var radioButton = radioButtonArray3[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray4.length; i++)
    {
     var radioButton = radioButtonArray4[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray5.length; i++)
    {
     var radioButton = radioButtonArray5[i];
     radioButton.checked = false;
    }

    
  
  
  }
function unselected2(){
   

    var radioButtonArray = document.getElementsByName('tamanho');
    var radioButtonArray2 = document.getElementsByName('frutas');
    var radioButtonArray3 = document.getElementsByName('complementos');
    var radioButtonArray4 = document.getElementsByName('coberturas');
    var radioButtonArray5 = document.getElementsByName('acrescimo_trad');
   
    for (var i=0; i<radioButtonArray.length; i++)
    {
     var radioButton = radioButtonArray[i];
     radioButton.checked = false;
    }

    for (var i=0; i<radioButtonArray2.length; i++)
    {
     var radioButton = radioButtonArray2[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray3.length; i++)
    {
     var radioButton = radioButtonArray3[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray4.length; i++)
    {
     var radioButton = radioButtonArray4[i];
     radioButton.checked = false;
    }
    for (var i=0; i<radioButtonArray5.length; i++)
    {
     var radioButton = radioButtonArray5[i];
     radioButton.checked = false;
    }
  
  
  }
// variável para sons dos inputs






   
     


