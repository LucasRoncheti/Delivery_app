




//variáveis com tamanho dos açaís  CREMOSO

var _300ml = document.getElementById('300ml');
var _500ml = document.getElementById('500ml');
var _700ml = document.getElementById('700ml');
var _1L = document.getElementById('1L');
var _barca = document.getElementById('barca');

//variáveis com acréscimos 
var _nutela = document.getElementById('nutela')
var _doce_de_leite = document.getElementById('doce-de-leite')
var _tortuguita = document.getElementById('tortuguita')
var _pacoca = document.getElementById('pacoca')


//variáveis com os preços 
var _R$8 = document.getElementById('preco300mlCremoso')
var _R$10 = document.getElementById('preco500mlCremoso')
var _R$14 = document.getElementById('preco700mlCremoso')
var _R$20 = document.getElementById('preco1LCremoso')
var _R$25 = document.getElementById('preco_barca')

//preços acréscimos
var _R$3 = document.getElementById('precoAcrescimoCremoso')
var _R$3_ = document.getElementById('precoAcrescimoCremoso_doce')
var _R$2 = document.getElementById('precoAcrescimoCremoso_tortuguita')
var _R$1 = document.getElementById('precoAcrescimoCremoso_pacoca')


//evento de click
_300ml.addEventListener('click',selecionarPreco)
_500ml.addEventListener('click',selecionarPreco1)
_700ml.addEventListener('click',selecionarPreco2)
_1L.addEventListener('click',selecionarPreco3)
_barca.addEventListener('click',selecionarPrecoBarca)

_nutela.addEventListener('click',selecionarPrecoNutela)
_doce_de_leite.addEventListener('click',selecionarPrecoDoce)
_tortuguita.addEventListener('click',selecionarPrecoTortuguita)
_pacoca.addEventListener('click',selecionarPrecoPacoca)



//funções que seleciona os preços cremoso

function selecionarPreco(){

   if(_300ml.value='300ml' || _500ml.checked || _700ml.checked || _1L.checked || _barca.checked){
     
         _R$8.classList.remove('fcp_unselected')
         _R$8.classList.add('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         _R$25.classList.add('fcp_unselected')
         _R$25.classList.remove('fcp')

         
     
   }


}


function selecionarPreco1(){

   if(_500ml.value='500ml' || _300ml.checked || _700ml.checked || _1L.checked|| _barca.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.remove('fcp_unselected')
         _R$10.classList.add('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         _R$25.classList.add('fcp_unselected')
         _R$25.classList.remove('fcp')
        
     
   }


}
function selecionarPreco2(){

   if(_700ml.value='700ml' || _300ml.checked || _500ml.checked || _1L.checked||_barca.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.remove('fcp_unselected')
         _R$14.classList.add('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         _R$25.classList.add('fcp_unselected')
         _R$25.classList.remove('fcp')
         
     
   }


}
function selecionarPreco3(){

   if( _1L.value='1L' || _300ml.checked || _500ml.checked || _700ml.checked ||_barca.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.remove('fcp_unselected')
         _R$20.classList.add('fcp')
         _R$25.classList.add('fcp_unselected')
         _R$25.classList.remove('fcp')
       
     
   }


}
function selecionarPrecoBarca(){

   if( _barca.value='Barca' || _300ml.checked || _500ml.checked || _700ml.checked ||_1L.checked){
     
         _R$8.classList.add('fcp_unselected')
         _R$8.classList.remove('fcp')

         _R$10.classList.add('fcp_unselected')
         _R$10.classList.remove('fcp')
         _R$14.classList.add('fcp_unselected')
         _R$14.classList.remove('fcp')
         _R$20.classList.add('fcp_unselected')
         _R$20.classList.remove('fcp')
         _R$25.classList.remove('fcp_unselected')
         _R$25.classList.add('fcp')
       
     
   }


}

function selecionarPrecoNutela(){

   if(_nutela.checked == true){
     
         _R$3.classList.add('fcp')
         _R$3.classList.remove('fcp_unselected')
         
     
   }else{
            _R$3.classList.remove('fcp')
            _R$3.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoDoce(){

   if(_doce_de_leite.checked == true){
     
         _R$3_.classList.add('fcp')
         _R$3_.classList.remove('fcp_unselected')
         
     
   }else{
            _R$3_.classList.remove('fcp')
            _R$3_.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoTortuguita(){

   if(_tortuguita.checked == true){
     
         _R$2.classList.add('fcp')
         _R$2.classList.remove('fcp_unselected')
         
     
   }else{
            _R$2.classList.remove('fcp')
            _R$2.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoPacoca(){

   if(_pacoca.checked == true){
     
         _R$1.classList.add('fcp')
         _R$1.classList.remove('fcp_unselected')
         
     
   }else{
            _R$1.classList.remove('fcp')
            _R$1.classList.add('fcp_unselected')
      
   }


}

//---------------------------------------------------------



//variáveis com tamanho dos açaís  TRADICIONAL

var _300ml_trad = document.getElementById('300ml_trad');
var _500ml_trad = document.getElementById('500ml_trad');
var _700ml_trad = document.getElementById('700ml_trad');
var _1L_trad = document.getElementById('1L_trad');
var _barca_trad = document.getElementById('barca_trad');

//acréscimos tradicionais
var _nutela_trad = document.getElementById('nutela_trad')
var _doce_de_leite_trad = document.getElementById('doce-de-leite_trad')
var _tortuguita_trad = document.getElementById('tortuguita_trad')
var _pacoca_trad = document.getElementById('pacoca_trad')

//variáveis com os preços tradicional
var _R$8_trad = document.getElementById('preco300ml_trad')
var _R$10_trad = document.getElementById('preco500ml_trad')
var _R$14_trad = document.getElementById('preco700ml_trad')
var _R$20_trad = document.getElementById('preco1L_trad')
var _R$25_trad = document.getElementById('preco_barca_trad')

//preços com acréscimos tradicionais 
var _R$3_trad = document.getElementById('precoAcrescimo_trad')
var _R$3__trad = document.getElementById('precoAcrescimo_trad_Doce')
var _R$2_trad = document.getElementById('precoAcrescimo_trad_tortuguita')
var _R$1_trad = document.getElementById('precoAcrescimo_trad_pacoca')

//evento de click
_300ml_trad.addEventListener('click',selecionarPreco5)
_500ml_trad.addEventListener('click',selecionarPreco6)
_700ml_trad.addEventListener('click',selecionarPreco7)
_1L_trad.addEventListener('click',selecionarPreco8)
_barca_trad.addEventListener('click',selecionarPrecoBarcaTrad)


_nutela_trad.addEventListener('click',selecionarPreco9)
_doce_de_leite_trad.addEventListener('click',selecionarPrecoDoceTrad)
_tortuguita_trad.addEventListener('click',selecionarPrecoTortuguitaTrad)
_pacoca_trad.addEventListener('click',selecionarPrecoPacocaTrad)


//funções que seleciona os preços TRADICIONAL

function selecionarPreco5(){

   if(_300ml_trad.value='300ml' || _500ml_trad.checked || _700ml_trad.checked || _1L_trad.checked||_barca_trad.checked){
     
         _R$8_trad.classList.remove('fcp_unselected')
         _R$8_trad.classList.add('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         _R$25_trad.classList.add('fcp_unselected')
         _R$25_trad.classList.remove('fcp')
         
     
   }


}
function selecionarPreco6(){

   if(_500ml_trad.value='500ml' || _300ml_trad.checked || _700ml_trad.checked || _1L_trad.checked||_barca_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.remove('fcp_unselected')
         _R$10_trad.classList.add('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         _R$25_trad.classList.add('fcp_unselected')
         _R$25_trad.classList.remove('fcp')
       
     
   }


}
function selecionarPreco7(){

   if(_700ml_trad.value='700ml' || _300ml_trad.checked || _500ml_trad.checked || _1L_trad.checked||_barca_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.remove('fcp_unselected')
         _R$14_trad.classList.add('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         _R$25_trad.classList.add('fcp_unselected')
         _R$25_trad.classList.remove('fcp')
         
     
   }


}
function selecionarPreco8(){

   if( _1L_trad.value='1L' || _300ml_trad.checked || _500ml_trad.checked || _700ml_trad.checked||_barca_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.remove('fcp_unselected')
         _R$20_trad.classList.add('fcp')
         _R$25_trad.classList.add('fcp_unselected')
         _R$25_trad.classList.remove('fcp')
        
     
   }


}
function selecionarPrecoBarcaTrad(){

   if( _barca_trad.value='Barca' || _300ml_trad.checked || _500ml_trad.checked || _700ml_trad.checked||_barca_trad.checked){
     
         _R$8_trad.classList.add('fcp_unselected')
         _R$8_trad.classList.remove('fcp')

         _R$10_trad.classList.add('fcp_unselected')
         _R$10_trad.classList.remove('fcp')
         _R$14_trad.classList.add('fcp_unselected')
         _R$14_trad.classList.remove('fcp')
         _R$20_trad.classList.add('fcp_unselected')
         _R$20_trad.classList.remove('fcp')
         _R$25_trad.classList.remove('fcp_unselected')
         _R$25_trad.classList.add('fcp')
        
     
   }


}


function selecionarPreco9(){

   if(_nutela_trad.checked == true){
     
         _R$3_trad.classList.add('fcp')
         _R$3_trad.classList.remove('fcp_unselected')
         
   }else{
            _R$3_trad.classList.remove('fcp')
            _R$3_trad.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoDoceTrad(){

   if(_doce_de_leite_trad.checked == true){
     
         _R$3__trad.classList.add('fcp')
         _R$3__trad.classList.remove('fcp_unselected')
         
   }else{
            _R$3__trad.classList.remove('fcp')
            _R$3__trad.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoTortuguitaTrad(){

   if(_tortuguita_trad.checked == true){
     
         _R$2_trad.classList.add('fcp')
         _R$2_trad.classList.remove('fcp_unselected')
         
   }else{
            _R$2_trad.classList.remove('fcp')
            _R$2_trad.classList.add('fcp_unselected')
      
   }


}
function selecionarPrecoPacocaTrad(){

   if(_pacoca_trad.checked == true){
     
         _R$1_trad.classList.add('fcp')
         _R$1_trad.classList.remove('fcp_unselected')
         
   }else{
            _R$1_trad.classList.remove('fcp')
            _R$1_trad.classList.add('fcp_unselected')
      
   }


}





//--------------------------------------------------------

//variáveis com tamanho hot dog

//hot dog tradicional
var hdt = document.getElementById('hdt')
//hot dog gourmet clabresa
var hdgc = document.getElementById('hdgc')
//Hambuerguer
var hambuerguer = document.getElementById('hamburguer')
//misto quente
var mistoquente=document.getElementById('mistoquente')
//Xbacon
var xbacon=document.getElementById('xbacon')
//Xeggbacon
var xeggbacon=document.getElementById('xeggbacon')
//Xtudo
var xtudo=document.getElementById('xtudo')
//Xtudoduplo
var xtudoduplo=document.getElementById('xtudoduplo')

//variáveis com os preços hotdog
var R$_hdt = document.getElementById('hdtp')
var R$_hdgc = document.getElementById('hdgcp')
var R$_hamburguer = document.getElementById('hamburguerPreco')
var R$_mistoquente = document.getElementById('mistoquentePreco')
var R$_xbacon = document.getElementById('xbaconPreco')
var R$_xeggbacon = document.getElementById('xeggbaconPreco')
var R$_xtudo = document.getElementById('xtudoPreco')
var R$_xtudoduplo = document.getElementById('xtudoduploPreco')


//variáveis com as descrições hotdog
var hd01_desc = document.getElementById('hd01_desc')
var hd02_desc = document.getElementById('hd02_desc')
var hamburguer_desc = document.getElementById('hamburguer_desc')
var mistoquente_desc = document.getElementById('mistoquente_desc')
var xbacon_desc = document.getElementById('xbacon_desc')
var xeggbacon_desc = document.getElementById('xeggbacon_desc')
var xtudo_desc = document.getElementById('xtudo_desc')
var xtudoduplo_desc = document.getElementById('xtudoduplo_desc')

//funções que seleciona os preços tradicional

function selecionarPrecoHotDogTradicional(){

   if(hdt.checked==true){
     
      
      R$_hdt.classList.add('fcp_color')
      
      hd01_desc.classList.add('fcp_color')
      hd01_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
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
      
      

     
   }else{
      R$_hdgc.classList.remove('fcp_color')
      hd02_desc.classList.remove('fcp_color')
      hd02_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}

function selecionarPrecoHamburguer(){

   if(hambuerguer.checked==true){
     
      
      R$_hamburguer.classList.add('fcp_color')
      
      hamburguer_desc.classList.add('fcp_color')
      hamburguer_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_hamburguer.classList.remove('fcp_color')
      hamburguer_desc.classList.remove('fcp_color')
      hamburguer_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
function selecionarPrecoMistoQuente(){

   if(mistoquente.checked==true){
     
      
      R$_mistoquente.classList.add('fcp_color')
      
      mistoquente_desc.classList.add('fcp_color')
      mistoquente_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_mistoquente.classList.remove('fcp_color')
      mistoquente_desc.classList.remove('fcp_color')
      mistoquente_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
function selecionarPrecoXeggbacon(){

   if(xeggbacon.checked==true){
     
      
      R$_xeggbacon.classList.add('fcp_color')
      
      xeggbacon_desc.classList.add('fcp_color')
      xeggbacon_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_xeggbacon.classList.remove('fcp_color')
      xeggbacon_desc.classList.remove('fcp_color')
      xeggbacon_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
function selecionarPrecoXbacon(){

   if(xbacon.checked==true){
     
      
      R$_xbacon.classList.add('fcp_color')
      
      xbacon_desc.classList.add('fcp_color')
      xbacon_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_xbacon.classList.remove('fcp_color')
      xbacon_desc.classList.remove('fcp_color')
      xbacon_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
function selecionarPrecoXtudoduplo(){

   if(xtudoduplo.checked==true){
     
      
      R$_xtudoduplo.classList.add('fcp_color')
      
      xtudoduplo_desc.classList.add('fcp_color')
      xtudoduplo_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_xtudoduplo.classList.remove('fcp_color')
      xtudoduplo_desc.classList.remove('fcp_color')
      xtudoduplo_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}
function selecionarPrecoXtudo(){

   if(xtudo.checked==true){
     
      
      R$_xtudo.classList.add('fcp_color')
      
      xtudo_desc.classList.add('fcp_color')
      xtudo_desc.classList.remove('p_ingredientes_hot_dog_unselected')
      
      

     
   }else{
      R$_xtudo.classList.remove('fcp_color')
      xtudo_desc.classList.remove('fcp_color')
      xtudo_desc.classList.add('p_ingredientes_hot_dog_unselected')
   }


}

//evento de click
hdt.addEventListener('click',selecionarPrecoHotDogTradicional)
hdgc.addEventListener('click',selecionarPrecoHotDogGourmet)
hambuerguer.addEventListener('click',selecionarPrecoHamburguer)
mistoquente.addEventListener('click',selecionarPrecoMistoQuente)
xbacon.addEventListener('click',selecionarPrecoXbacon)
xeggbacon.addEventListener('click',selecionarPrecoXeggbacon)
xtudo.addEventListener('click',selecionarPrecoXtudo)
xtudoduplo.addEventListener('click',selecionarPrecoXtudoduplo)




//--------------------------------------------------------

//SALGAOS

var salgado01 = document.getElementById('efr')
var salgado02 = document.getElementById('eqp')
var salgado03 = document.getElementById('bauru')


//variáveis com preços sagados

var salg_preco01 = document.getElementById('salg_preco01')
var salg_preco02 = document.getElementById('salg_preco02')
var salg_preco03 = document.getElementById('salg_preco03')


//evento click

salgado01.addEventListener('click',selecionarPrecoSalgado01)
salgado02.addEventListener('click',selecionarPrecoSalgado02)
salgado03.addEventListener('click',selecionarPrecoSalgado03)



// funções

function selecionarPrecoSalgado01(){

   if(salgado01.checked==true){
     
      
      salg_preco01.classList.add('fcp_color')
     
   
   }else{
      salg_preco01.classList.remove('fcp_color')
   }


}
function selecionarPrecoSalgado02(){

   if(salgado02.checked==true){
     
      
      salg_preco02.classList.add('fcp_color')
      
   
   }else{
      salg_preco02.classList.remove('fcp_color')
   }


}
function selecionarPrecoSalgado03(){

   if(salgado03.checked==true){
     
      
      salg_preco03.classList.add('fcp_color')
     
   
   }else{
      salg_preco03.classList.remove('fcp_color')
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
     
   
   }else{
      Bebida01_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida02(){

   if(Bebida02.checked==true){
     
      
      Bebida02_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida02_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida03(){

   if(Bebida03.checked==true){
     
      
      Bebida03_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida03_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida04(){

   if(Bebida04.checked==true){
     
      
      Bebida04_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida04_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida05(){

   if(Bebida05.checked==true){
     
      
      Bebida05_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida05_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida06(){

   if(Bebida06.checked==true){
     
      
      Bebida06_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida06_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida07(){

   if(Bebida07.checked==true){
     
      
      Bebida07_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida07_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida08(){

   if(Bebida08.checked==true){
     
      
      Bebida08_preco.classList.add('fcp_color')
    
   
   }else{
      Bebida08_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida09(){

   if(Bebida09.checked==true){
     
      
      Bebida09_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida09_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida10(){

   if(Bebida10.checked==true){
     
      
      Bebida10_preco.classList.add('fcp_color')
     
   
   }else{
      Bebida10_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida11(){

   if(Bebida11.checked==true){
     
      
      Bebida11_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida11_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida12(){

   if(Bebida12.checked==true){
     
      
      Bebida12_preco.classList.add('fcp_color')
     
   
   }else{
      Bebida12_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida13(){

   if(Bebida13.checked==true){
     
      
      Bebida13_preco.classList.add('fcp_color')
     
   
   }else{
      Bebida13_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida14(){

   if(Bebida14.checked==true){
     
      
      Bebida14_preco.classList.add('fcp_color')
     
   
   }else{
      Bebida14_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida15(){

   if(Bebida15.checked==true){
     
      
      Bebida15_preco.classList.add('fcp_color')
      
   
   }else{
      Bebida15_preco.classList.remove('fcp_color')
   }


}
function selecionarPrecoBebida16(){

   if(Bebida16.checked==true){
     
      
      Bebida16_preco.classList.add('fcp_color')
      
   
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
     
   
   }else{
      polpa01P.classList.remove('fcp_color')
   }


}
function selecionarPrecoPolpa02(){

   if(polpa02.checked==true){
     
      
      polpa02P.classList.add('fcp_color')
      
   
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







   
     


