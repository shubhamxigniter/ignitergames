const cardArray = [
    {
        name: 'fries',
        Image: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        Image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        Image: 'images/hotdog.png',
    },
    {
        name: 'shake',
        Image: 'images/shake.png',
    },
    {
        name: 'ice-cream',
        Image: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        Image: 'images/pizza.png',
    },
    {
        name: 'fries',
        Image: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        Image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        Image: 'images/hotdog.png',
    },
    {
        name: 'shake',
        Image: 'images/shake.png',
    },
    {
        name: 'ice-cream',
        Image: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        Image: 'images/pizza.png',
    }      
]

function shuffleArr(arr){
    for(let i=arr.length-1; i>0; i--){
       let j = Math.floor(Math.random()*(i+1));
       [arr[i] , arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
shuffleArr(cardArray)
// console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
function createboard(){
    for(let i=0; i<12; i++){
        const card = document.createElement('img')
        card.setAttribute('data-id', i)
        card.setAttribute('src', 'images/blank.png')
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)

        // console.log(card, i)
    }
}
createboard()

let cardChoosen = []
let cardChoosenId =[]
const cardswon = []
const resultDisplay = document.querySelector('#result')
const clicksDisplay = document.getElementById('clicks')
let clickCounter = 0
let banner = document.getElementById('resultt')

function checkmatch(){
   const cards = document.querySelectorAll('img')
   const option1id = cardChoosenId[0]
   const option2id = cardChoosenId[1]

   if(option1id === option2id){
    alert('you clicked the same image twice')
    return;
   }

    console.log('check for match')
    if(cardChoosen[0] === cardChoosen[1]){
        // alert('you found a match')
        cards[option1id].setAttribute('src', 'images/white.png')
        cards[option2id].setAttribute('src', 'images/white.png')

        //to make this selected cards tranparent instead of blank white image
        cards[option1id].style.opacity = '0'
        cards[option2id].style.opacity = '0'

        cards[option1id].removeEventListener('click', flipcard)
        cards[option2id].removeEventListener('click', flipcard) 
        cardswon.push(cardChoosen)       
    } else{

         
            cards[cardChoosenId[0]].setAttribute('src', 'images/blank.png');
            cards[cardChoosenId[1]].setAttribute('src', 'images/blank.png');
            resetSelection();
            return;
            }
    resultDisplay.innerHTML = cardswon.length

    resetSelection();

    if(cardswon.length == cardArray.length/2){
                resultDisplay.innerHTML = "congratulations you got me💋!"
    }
}
  if(cardswon.length == 6){
    if(clickCounter ==12){
        banner.innerHTML ='A perfect win!'
    } else{
        banner.innerHTML = 'You won but was not a perfect win. Better luck next time'
    }
  }

// cardChoosen = []
// cardChoosenId = []

function resetSelection(){
    cardChoosen = []
    cardChoosenId = []    
}
function flipcard(){
    let cardId = this.getAttribute('data-id')

    
    cardChoosen.push(cardArray[cardId].name)

    if(cardChoosenId.includes(cardId)){
        alert('you clicked the same image twice')
        
    }
    

    // console.log('clicked', cardId)
    // console.log(cardChoosen)

    cardChoosenId.push(cardId)

    // console.log(cardChoosen)
    // console.log(cardChoosenId)

    this.setAttribute('src', cardArray[cardId].Image)

    clickCounter ++;
    clicksDisplay.innerHTML = clickCounter

    if(cardChoosen.length ===2){
        setTimeout(checkmatch, 500)
    }

}