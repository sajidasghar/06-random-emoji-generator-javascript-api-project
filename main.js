const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = []; 


async   function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=1befd30ebf7e93f28321c6e2eb9e61bfd5921aba")
     data = await response.json();


    for(i=0; i<1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}

getEmoji();
console.log(emoji)

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})