 //visualização do produto
 $(document).ready(function(){

    $('#opcImg1').click(function(){
    
        document.getElementById('imgPrd1').style.display = "block";
        document.getElementById('imgPrd2').style.display = "none";
        document.getElementById('imgPrd3').style.display = "none";
        document.getElementById('imgPrd4').style.display = "none";
    });
    
    $('#opcImg2').click(function(){
    
        document.getElementById('imgPrd1').style.display = "none";
        document.getElementById('imgPrd2').style.display = "block";
        document.getElementById('imgPrd3').style.display = "none";
        document.getElementById('imgPrd4').style.display = "none";
    });
    
    $('#opcImg3').click(function(){
    
        document.getElementById('imgPrd1').style.display = "none";
        document.getElementById('imgPrd2').style.display = "none";
        document.getElementById('imgPrd3').style.display = "block";
        document.getElementById('imgPrd4').style.display = "none";
    });
    
    $('#opcImg4').click(function(){
    
        document.getElementById('imgPrd1').style.display = "none";
        document.getElementById('imgPrd2').style.display = "none";
        document.getElementById('imgPrd3').style.display = "none";
        document.getElementById('imgPrd4').style.display = "block";
    });
    
    
    });

        //BOTOES ROLAGEM CARROSSEL
const groupCards = [...document.querySelectorAll('#conjuntoCard')];
const btnAft = [...document.querySelectorAll('#btnAft')];
const btnBef = [...document.querySelectorAll('#btnBef')]

groupCards.forEach((item, i ) =>{
    let groupCardsDimen = item.getBoundingClientRect();
    let groupCardsLength = groupCardsDimen.width;

    btnAft[i].addEventListener('click', () =>{
        item.scrollLeft += groupCardsLength;
    })

    btnBef[i].addEventListener('click', () => {
        item.scrollLeft -= groupCardsLength;
    })
})