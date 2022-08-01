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