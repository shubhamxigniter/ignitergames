let userArray = [];
let maxlength = 0;

function ArrayLengthSet(){
    maxlength = parseInt(document.getElementById("arrayLengthInput").value);
    if(isNaN(maxlength) || maxlength<=0){
        alert("invalid input");
    }
    else{
        document.getElementById("userarrayinput").disabled = false;
        document.getElementById("addbutton").disabled = false;
        document.getElementById("arrayLengthInput").disabled = true;
         document.getElementById("sizeButton").disabled = true;
    }

}

function addtoarray(){
if(userArray.length >= maxlength){
    alert('you have entered the maximux number of players! ');
    document.getElementById("userarrayinput").disabled = true;
    document.getElementById("addbutton").disabled = true;
   
}

    let userinput = document.getElementById("userarrayinput").value;

    if(userinput.trim() === ""){
        return;
    }

    userArray.push(userinput);

    document.getElementById("userarrayinput").value = '';

    displayArr();
    
    if(userArray.length === maxlength){
            document.getElementById("userarrayinput").disabled = true;
    document.getElementById("addbutton").disabled = true;
    }
}

function displayArr(){
    let list = document.getElementById('displayArr');
    list.innerHTML = '';

    for(let i = 0; i<userArray.length; i++){
        let li = document.createElement('li');
        li.textContent = userArray[i];
        list.appendChild(li);
    }

}

// let arr = [1,2,3,4,5,6,7,8,9];

// for(let i = arr.length -1; i>0; i--){
//     let j = Math.floor(Math.random()*(i+1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// let n = arr;
// console.log(n);

function displayRandom(){
    let list = document.getElementById('displayRandom2');
    list.innerHTML = '';
     
    let suffled = [...userArray];

    for(let i = 0; i<suffled.length; i++){
    //   let li = document.createElement('li');
      let j = Math.floor(Math.random()*(i+1));
      [suffled[i], suffled[j]] = [suffled[j], suffled[i]]
    //   li.textContent = suffled[i];
    //   list.appendChild(li);
}
  document.getElementById("displayButton").disabled = true;
for(let i = 0; i<suffled.length; i++){
    let li = document.createElement('li');
    li.textContent = `${'is '}: ${suffled[i]}`;
    list.appendChild(li);
}
}
