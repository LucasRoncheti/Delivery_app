    var header = document.getElementById('header')
    var body = document.getElementById('body')
    var mn = document.getElementById('main')
    var bg_enviar = document.getElementById('bg_enviar')
    var form_enviar = document.getElementById('form_enviar')
    var button_close_enviar_pedido = document.getElementById('buttonX')


function fechar(){

    //açaí cremoso -------------
    var acai_cremoso = "Açaí cremoso"
    var enviar_acai_cremoso = false;
  //tamanho
    var tamanho = "";
    var tmn = document.getElementsByName('tamanho2');
    for(var i=0;i<tmn.length;i++){
       if(tmn[i].checked){
          tamanho= ('Tamanho=>'+'('+'*'+tmn[i].value+'*'+')'+'<br></br>')
          enviar_acai_cremoso = true;
          
          break;
       }
    }


    if(enviar_acai_cremoso==false){
        pedido_acai_cremoso=""
        
    }else{

    

   //FRUTAS 
    var frutas = new Array();

    //Reference the Table.
    var tblFruits = document.getElementById("frutas2");

    //Reference all the CheckBoxes in Table.
    var chks = tblFruits.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            frutas.push(chks[i].value);
        }
    }

    //Display the selected CheckBox values.
    if (frutas.length > 0) {
        frutas_acai_cremoso = ('Frutas=>'+ '('+'*'+frutas.join(",")+'*'+')'+'<br></br>')
    }else{
        frutas_acai_cremoso="";
    }
    
    
    //COMPLEMENTOS 
    var complementos2 = new Array()
    var tbComplementos = document.getElementById('complementos2')
    var chk_comp = tbComplementos.getElementsByTagName('INPUT')

    for(var i= 0; i < chk_comp.length;i++){
        if(chk_comp[i].checked){
            complementos2.push(chk_comp[i].value);
        }

    }
    if(complementos2.length > 0){
        complementos_acai_cremoso = ('Complementos=>'+ '('+'*'+complementos2.join(",")+'*'+')'+'<br></br>')
    }else{
        complementos_acai_cremoso="";
    }

   
   //coberturas
    var cobertura = "";
    var cbt = document.getElementsByName('coberturas2');
    for(var i=0;i<cbt.length;i++){
        if(cbt[i].checked){
            cobertura = ('Cobertura=>'+'('+'*'+cbt[i].value+'*'+')'+'<br></br>')
            
            break;
            
        }
    }

    
    //acrescimos açaí cremoso

    var acrescimo_cremoso_2=""
    var acrescimo_cremoso = document.getElementById('nutela')
    if(acrescimo_cremoso.checked==true){
        acrescimo_cremoso_2 = ('Acréscimo=>'+'('+'*'+acrescimo_cremoso.value+'*'+')')
    }else{
        acrescimo_cremoso_2=""
    }


   

     pedido_acai_cremoso =[acai_cremoso,tamanho,frutas_acai_cremoso,complementos_acai_cremoso,cobertura,acrescimo_cremoso_2];
     console.log(pedido_acai_cremoso)
    }



    
    //AÇAÍ TRADICIONAL

     //açaí tradicional -------------
     var acai_tradicional = "Açaí tradicional"
     var enviar_acai_tradicional = false;
   //tamanho
     var tamanho_trad = "";
     var tmn_trad = document.getElementsByName('tamanho');
     for(var i=0;i<tmn_trad.length;i++){
        if(tmn_trad[i].checked){
           tamanho_trad= ('Tamanho=>'+'('+'*'+tmn_trad[i].value+'*'+')'+'<br></br>');
           enviar_acai_tradicional = true;
           
           break;
        }
     }
 
 
     if(enviar_acai_tradicional==false){
         pedido_acai_tradicional=""
         
     }else{
 
     
 
    //FRUTAS 
     var frutas_trad = new Array();
 
     //Reference the Table.
     var tblFruits_trad = document.getElementById("frutas1");
 
     //Reference all the CheckBoxes in Table.
     var chks_trad = tblFruits_trad.getElementsByTagName("INPUT");
 
     // Loop and push the checked CheckBox value in Array.
     for (var i = 0; i < chks_trad.length; i++) {
         if (chks_trad[i].checked) {
             frutas_trad.push(chks_trad[i].value);
         }
     }
 
     //Display the selected CheckBox values.
     if (frutas_trad.length > 0) {
         frutas_acai_tradicional = ('Frutas=>'+ '('+'*'+frutas_trad.join(",")+'*'+')'+'<br></br>')
     }else{
         frutas_acai_tradicional="";
     }
     
     
     //COMPLEMENTOS 
     var complementos_trad = new Array()
     var tbComplementos_trad = document.getElementById('complementos')
     var chk_comp_trad = tbComplementos_trad.getElementsByTagName('INPUT')
 
     for(var i= 0; i < chk_comp_trad.length;i++){
         if(chk_comp_trad[i].checked){
             complementos_trad.push(chk_comp_trad[i].value);
         }
 
     }
     if(complementos_trad.length > 0){
         complementos_acai_tradicional = ('Complementos=>'+ '('+'*'+complementos_trad.join(",")+'*'+')'+'<br></br>')
     }else{
         complementos_acai_tradicional="";
     }
 
    
    //coberturas
     var cobertura_trad = "";
     var cbt_trad = document.getElementsByName('coberturas');
     for(var i=0;i<cbt_trad.length;i++){
         if(cbt_trad[i].checked){
             cobertura_trad = ('Cobertura=>'+'('+'*'+cbt_trad[i].value+'*'+')'+'<br></br>');
             
             break;
             
         }
     }
 
     
     //acrescimos açaí tradicional
 
     var acrescimo_tradicional=""
     var acrescimo_tradicional = document.getElementById('nutela_trad')
     if(acrescimo_tradicional.checked==true){
         acrescimo_tradicional = ('Acréscimo=>'+'('+'*'+acrescimo_tradicional.value+'*'+')'+'<br></br>')
     }else{
         acrescimo_tradicional=""
     }
 
 
    
 
      pedido_acai_tradicional =[acai_tradicional,tamanho_trad,frutas_acai_tradicional,complementos_acai_tradicional,cobertura_trad,acrescimo_tradicional];
      console.log(pedido_acai_tradicional)
     }


     //HOT DOG 

      //hot dog 
      var hot_dog = new Array()
      var hot_dog_list = document.getElementById('hot_dog')
      var chk_hot_dog = hot_dog_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_hot_dog.length;i++){
          if(chk_hot_dog[i].checked){
              hot_dog.push(chk_hot_dog[i].value);
          }
  
      }
      if(hot_dog.length > 0){
          hot_dog_pedido = ('Hot Dog=>'+ '('+'*'+hot_dog.join(",")+'*'+')'+'<br></br>')
          console.log(hot_dog_pedido)
      }else{
          hot_dog_pedido="";
      }

     //Salgados 

      //Salgados
      var salgados = new Array()
      var salgados_list = document.getElementById('salgados')
      var chk_salgados = salgados_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_salgados.length;i++){
          if(chk_salgados[i].checked){
              salgados.push(chk_salgados[i].value);
          }
  
      }
      if(salgados.length > 0){
          salgados_pedido = ('Salgados=>'+ '('+'*'+salgados.join(",")+'*'+')'+'<br></br>')
          console.log(salgados_pedido)
      }else{
          salgados_pedido="";
      }


     //Bebidas 

      //Bebidas
      var bebidas = new Array()
      var bebidas_list = document.getElementById('bebidas')
      var chk_bebidas = bebidas_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_bebidas.length;i++){
          if(chk_bebidas[i].checked){
              bebidas.push(chk_bebidas[i].value);
          }
  
      }
      if(bebidas.length > 0){
          bebidas_pedido = ('Bebidas=>'+ '('+'*'+bebidas.join(",")+'*'+')'+'<br></br>')
          console.log(bebidas_pedido)
      }else{
          bebidas_pedido="";
      }


      //POlpa de frutas

      var polpa = new Array()
      var polpa_list = document.getElementById('polpa')
      var chk_polpa = polpa_list.getElementsByTagName('INPUT')

      for(var i = 0;i< chk_polpa.length;i++){
        if(chk_polpa[i].checked){
            polpa.push(chk_polpa[i].value)
        }
    }

        if(polpa.length > 0){
            polpa_pedido=('Polpa de Frutas=>'+ '('+'*'+polpa.join(",")+'*'+')'+'<br></br>')
            console.log(polpa_pedido)
        }else{
            polpa_pedido=""
        }
      


        // reunindo os dados para mostrar na tela de enviar pedido
        

        document.getElementById('pedido_cremoso').innerHTML = pedido_acai_cremoso+'<br></br>'
        document.getElementById('pedido_tradicional').innerHTML = pedido_acai_tradicional+'<br></br>'
        document.getElementById('pedido_hotdog').innerHTML = hot_dog_pedido+'<br></br>'
        document.getElementById('pedido_salgados').innerHTML = salgados_pedido+'<br></br>'
        document.getElementById('pedido_bebidas').innerHTML = bebidas_pedido+'<br></br>'
        document.getElementById('pedido_polpas').innerHTML = polpa_pedido


        button_close_enviar_pedido.classList.remove('display_none')
        button_close_enviar_pedido.classList.add('buttonX')
        bg_enviar.classList.remove('display_none')
        bg_enviar.classList.add('display_block')
        form_enviar.classList.remove('display_none')
        form_enviar.classList.add('display_block')
        header.classList.add('blur')
        mn.classList.add('blur')

        body.classList.add('overflow-hidden')
        
        scrollTo(0,0)
        
        
   
}
function enviar(){

    //açaí cremoso -------------
    var acai_cremoso = "*Açaí cremoso*"
    var enviar_acai_cremoso = false;
  //tamanho
    var tamanho = "";
    var tmn = document.getElementsByName('tamanho2');
    for(var i=0;i<tmn.length;i++){
       if(tmn[i].checked){
          tamanho= ('Tamanho=>'+'('+'_'+tmn[i].value+'_'+')')
          enviar_acai_cremoso = true;
          
          break;
       }
    }


    if(enviar_acai_cremoso==false){
        pedido_acai_cremoso=""
        
    }else{

    

   //FRUTAS 
    var frutas = new Array();

    //Reference the Table.
    var tblFruits = document.getElementById("frutas2");

    //Reference all the CheckBoxes in Table.
    var chks = tblFruits.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            frutas.push(chks[i].value);
        }
    }

    //Display the selected CheckBox values.
    if (frutas.length > 0) {
        frutas_acai_cremoso = ('Frutas=>'+ '('+'_'+frutas.join(",")+'_'+')')
    }else{
        frutas_acai_cremoso="";
    }
    
    
    //COMPLEMENTOS 
    var complementos2 = new Array()
    var tbComplementos = document.getElementById('complementos2')
    var chk_comp = tbComplementos.getElementsByTagName('INPUT')

    for(var i= 0; i < chk_comp.length;i++){
        if(chk_comp[i].checked){
            complementos2.push(chk_comp[i].value);
        }

    }
    if(complementos2.length > 0){
        complementos_acai_cremoso = ('Complementos=>'+ '('+'_'+complementos2.join(",")+'_'+')')
    }else{
        complementos_acai_cremoso="";
    }

   
   //coberturas
    var cobertura = "";
    var cbt = document.getElementsByName('coberturas2');
    for(var i=0;i<cbt.length;i++){
        if(cbt[i].checked){
            cobertura = ('Cobertura=>'+'('+'_'+cbt[i].value+'_'+')')
            
            break;
            
        }
    }

    
    //acrescimos açaí cremoso

    var acrescimo_cremoso_2=""
    var acrescimo_cremoso = document.getElementById('nutela')
    if(acrescimo_cremoso.checked==true){
        acrescimo_cremoso_2 = ('Acréscimo=>'+'('+'_'+acrescimo_cremoso.value+'_'+')')
    }else{
        acrescimo_cremoso_2=""
    }


   

     pedido_acai_cremoso =[acai_cremoso,tamanho,frutas_acai_cremoso,complementos_acai_cremoso,cobertura,acrescimo_cremoso_2];
    
    }



    
    //AÇAÍ TRADICIONAL

     //açaí tradicional -------------
     var acai_tradicional = "*Açaí tradicional*"
     var enviar_acai_tradicional = false;
   //tamanho
     var tamanho_trad = "";
     var tmn_trad = document.getElementsByName('tamanho');
     for(var i=0;i<tmn_trad.length;i++){
        if(tmn_trad[i].checked){
           tamanho_trad= ('Tamanho=>'+'('+'_'+tmn_trad[i].value+'_'+')');
           enviar_acai_tradicional = true;
           
           break;
        }
     }
 
 
     if(enviar_acai_tradicional==false){
         pedido_acai_tradicional=""
         
     }else{
 
     
 
    //FRUTAS 
     var frutas_trad = new Array();
 
     //Reference the Table.
     var tblFruits_trad = document.getElementById("frutas1");
 
     //Reference all the CheckBoxes in Table.
     var chks_trad = tblFruits_trad.getElementsByTagName("INPUT");
 
     // Loop and push the checked CheckBox value in Array.
     for (var i = 0; i < chks_trad.length; i++) {
         if (chks_trad[i].checked) {
             frutas_trad.push(chks_trad[i].value);
         }
     }
 
     //Display the selected CheckBox values.
     if (frutas_trad.length > 0) {
         frutas_acai_tradicional = ('Frutas=>'+ '('+'_'+frutas_trad.join(",")+'_'+')')
     }else{
         frutas_acai_tradicional="";
     }
     
     
     //COMPLEMENTOS 
     var complementos_trad = new Array()
     var tbComplementos_trad = document.getElementById('complementos')
     var chk_comp_trad = tbComplementos_trad.getElementsByTagName('INPUT')
 
     for(var i= 0; i < chk_comp_trad.length;i++){
         if(chk_comp_trad[i].checked){
             complementos_trad.push(chk_comp_trad[i].value);
         }
 
     }
     if(complementos_trad.length > 0){
         complementos_acai_tradicional = ('Complementos=>'+ '('+'_'+complementos_trad.join(",")+'_'+')')
     }else{
         complementos_acai_tradicional="";
     }
 
    
    //coberturas
     var cobertura_trad = "";
     var cbt_trad = document.getElementsByName('coberturas');
     for(var i=0;i<cbt_trad.length;i++){
         if(cbt_trad[i].checked){
             cobertura_trad = ('Cobertura=>'+'('+'_'+cbt_trad[i].value+'_'+')');
             
             break;
             
         }
     }
 
     
     //acrescimos açaí tradicional
 
     var acrescimo_tradicional=""
     var acrescimo_tradicional = document.getElementById('nutela_trad')
     if(acrescimo_tradicional.checked==true){
         acrescimo_tradicional = ('Acréscimo=>'+'('+'_'+acrescimo_tradicional.value+'_'+')')
     }else{
         acrescimo_tradicional=""
     }
 
 
    
 
      pedido_acai_tradicional =[acai_tradicional,tamanho_trad,frutas_acai_tradicional,complementos_acai_tradicional,cobertura_trad,acrescimo_tradicional];
      console.log(pedido_acai_tradicional)
     }


     //HOT DOG 

      //hot dog 
      var hot_dog = new Array()
      var hot_dog_list = document.getElementById('hot_dog')
      var chk_hot_dog = hot_dog_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_hot_dog.length;i++){
          if(chk_hot_dog[i].checked){
              hot_dog.push(chk_hot_dog[i].value);
          }
  
      }
      if(hot_dog.length > 0){
          hot_dog_pedido = ('*Hot Dog*=>'+ '('+'_'+hot_dog.join(",")+'_'+')')
          
      }else{
          hot_dog_pedido="";
      }

     //Salgados 

      //Salgados
      var salgados = new Array()
      var salgados_list = document.getElementById('salgados')
      var chk_salgados = salgados_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_salgados.length;i++){
          if(chk_salgados[i].checked){
              salgados.push(chk_salgados[i].value);
          }
  
      }
      if(salgados.length > 0){
          salgados_pedido = ('*Salgados*=>'+ '('+'_'+salgados.join(",")+'_'+')')
          
      }else{
          salgados_pedido="";
      }


     //Bebidas 

      //Bebidas
      var bebidas = new Array()
      var bebidas_list = document.getElementById('bebidas')
      var chk_bebidas = bebidas_list.getElementsByTagName('INPUT')
  
      for(var i= 0; i < chk_bebidas.length;i++){
          if(chk_bebidas[i].checked){
              bebidas.push(chk_bebidas[i].value);
          }
  
      }
      if(bebidas.length > 0){
          bebidas_pedido = ('*Bebidas*=>'+ '('+'_'+bebidas.join(",")+'_'+')')
          
      }else{
          bebidas_pedido="";
      }


      //POlpa de frutas

      var polpa = new Array()
      var polpa_list = document.getElementById('polpa')
      var chk_polpa = polpa_list.getElementsByTagName('INPUT')

      for(var i = 0;i< chk_polpa.length;i++){
        if(chk_polpa[i].checked){
            polpa.push(chk_polpa[i].value)
        }
    }

        if(polpa.length > 0){
            polpa_pedido=('*Polpa de Frutas*=>'+ '('+'_'+polpa.join(",")+'_'+')')
           
        }else{
            polpa_pedido=""
        }
      
        // variáveis dados para entrega

        var nome_ = document.getElementById('nome')
        var nome= nome_.value
        var cidade_ = document.getElementById('cidade')
        var cidade = cidade_.value
        var rua_ = document.getElementById('rua')
        var rua= ' rua '+rua_.value
        var referencia_ = document.getElementById('referencia')
        var referencia = 'Ponto de referência:'+referencia_.value
        var observacoes_ = document.getElementById('observacoes')
        var observacoes ='Observações:'+ observacoes_.value
        var forma_pagamento_ = document.getElementById('forma_pagamento')
        var forma_pagamento = forma_pagamento_.value

        // reunindo os dados para enviar no link 
        var pedido_final = [pedido_acai_cremoso,'%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F',pedido_acai_tradicional,'%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F',hot_dog_pedido,'%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F',salgados_pedido,'%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F',bebidas_pedido,'%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F%E3%80%B0%EF%B8%8F',polpa_pedido]

        if(nome.length < 1){
            let mySound = new Audio('sounds/errror.mp3')
            mySound.play()
            document.getElementById('nome_error').innerHTML="Qual seu nome ?"
            setTimeout(remove_text,3000)
            function remove_text(){
                document.getElementById('nome_error').innerHTML=""
            }
        }
        
        if(cidade_.value == "Cidade"){
            let mySound = new Audio('sounds/errror.mp3')
            mySound.play()
            document.getElementById('cidade_error').innerHTML="Não se esqueça da cidade :)"
            setTimeout(remove_text,3000)
            function remove_text(){
                document.getElementById('cidade_error').innerHTML=""
            }
        }

        if(rua_.value.length < 1){
            let mySound = new Audio('sounds/errror.mp3')
            mySound.play()
            document.getElementById('rua_error').innerHTML="Precisamos saber em qual rua entregar..."
            setTimeout(remove_text,3000)
            function remove_text(){
                document.getElementById('rua_error').innerHTML=""
            }
        }
        if(referencia_.value.length < 1){
            let mySound = new Audio('sounds/errror.mp3')
            mySound.play()
            document.getElementById('referencia_error').innerHTML="Uma referência ajuda muito :)"
            setTimeout(remove_text,3000)
            function remove_text(){
                document.getElementById('referencia_error').innerHTML=""
            }
        }
        
        
        
        
        else{
             window.open('https://api.whatsapp.com/send?phone=5527998166112&text=*Nome*%3A'+nome+'%20*Entrega*%3A'+cidade+','+rua+','+referencia+'%20*_Pedido_*%3A'+pedido_final+'%20Forma%20de%20pagamento%3A'+forma_pagamento+''+observacoes+'')

             let mySound = new Audio('sounds/send.mp3')
             mySound.play()

        }

      
        
        
        
        
   
}

function button_close(){

        button_close_enviar_pedido.classList.add('display_none')
        button_close_enviar_pedido.classList.remove('buttonX')
        bg_enviar.classList.add('display_none')
        bg_enviar.classList.remove('display_block')
        form_enviar.classList.add('display_none')
        form_enviar.classList.remove('display_block')
        header.classList.remove('blur')
        mn.classList.remove('blur')
        body.classList.remove('overflow-hidden')
}




      












