//animação no cabeçalho (só pq eu gosto de graça rsrs) vou começar a por comentario p organizar pq sim
function anim(){
    // anim do menuzin
    var menuf=document.getElementsByClassName("menuf")
    var botao=document.getElementById("bleia")

    for (let i=0;i<menuf.length;i++){ 
        if (menuf[i].name==document.getElementsByClassName("page")[0].id) {
            menuf[i].style.textDecoration="underline";
        }
        else{ 
            menuf[i].addEventListener("mouseenter",function(){       
                menuf[i].style.textDecoration="underline";
            })

            menuf[i].addEventListener("mouseout",function(){
                menuf[i].style.textDecoration="none";
            })
        } 
    }
}
//esse daqui abre o popupzin de sugestão
function sugest(){
    var popup=document.getElementById("popup_sugest")
    var but1=window.document.getElementById("sugest")
    var input=window.document.getElementById("sugt")
    var pinput=window.document.getElementById('sgtexto')
    function clicked(){
            popup.style.display="flex"
    }

    
    function changed(){
        if (input.value==""){
            pinput.innerText="Seu texto vai aparecer aqui."
        }else{
            pinput.innerText=input.value
        }
        
    }

    but1.addEventListener("click",clicked)
    input.addEventListener("input",changed)
}

//esse aqui vai roda os bagui básico do site
Main()
function Main(){
    anim()
    sugest()
}