/*Chatbot*/

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex';
    } else {
        chatbox.style.display = 'none';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        setTimeout(() => {
            handleBotResponse(message);
        }, 1000);
    }
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleBotResponse(userMessage) {
    let botResponse = "I'm sorry, I didn't understand that but soon i'll be able to answer your questions😊 i am under development right now";

    if (userMessage.toLowerCase() === 'hello') {
        botResponse = "How can I assist you?";
    }
    else     if (userMessage.toLowerCase() === 'hii') {
        botResponse = "How can I assist you?";
    }
    else if (userMessage.toLowerCase().includes("prime minister")) {
        botResponse = `it is NARENDRA MODI`;
    }
    else if (userMessage.toLowerCase().includes("help")) {
        botResponse = `i would love to help you babe`;
    }
    

    else if (userMessage.toLowerCase().includes("thank you")) {
        botResponse = `you are welcome 😊`;
    }

    else if (userMessage.toLowerCase().includes("thanks")) {
        botResponse = `you are welcome 😊`;
    }
    else if (userMessage.toLowerCase().includes("capital of india")) {
        botResponse = `the capital of india is delhi`;
    }
    else     if (userMessage.toLowerCase().includes("thank you")) {
        botResponse = "You're welcome! If you have any more questions or need further assistance, feel free to ask. 😊";
    }  
    
    addMessage(botResponse, 'bot');
}



/*Slider Movement*/

const slider=document.querySelector("#slider")
const left=document.querySelector("#left")
const right=document.querySelector("#right");

const img=document.querySelectorAll("#slider img")
        
let slideNumber=1;

right.addEventListener('click',()=>{
    if(slideNumber<img.length){
        slider.style.transform=`translateX(-${slideNumber*100}%)`;
        slideNumber++;
    }
    else{
        slider.style.transform=`translateX(0px)`;
        slideNumber=1;
    }
 })

left.addEventListener('click',()=>{
    if(slideNumber>1){
        slider.style.transform=`translateX(-${(slideNumber-2)*100}%)`;
        slideNumber--;
    }
    else{
        slider.style.transform=`translateX(-${(img.length-1)*100}%)`;
         slideNumber=img.length;
    }
})

  
//Login Page

const login=document.querySelector("#login");
const loginpage=document.querySelector("#login_Page");
const main=document.querySelector("#main");


const closeButton=document.querySelector("#close_login")

login.addEventListener('click',()=>{
    loginpage.style.display="initial";
    // document.querySelector("#main").style.filter="blur(8px)";
})

closeButton.addEventListener('click',()=>{
    loginpage.style.display="none";
})