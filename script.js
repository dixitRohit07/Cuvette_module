let rulebtn = document.querySelector(".rule");

let rulebox = document.querySelector(".rulebox")

let closes = document.querySelector(".rules2"); 

let items = document.querySelectorAll(".item")

let compscore = document.querySelector(".compscore")

let yourscore = document.querySelector(".yourscore")

let option = document.querySelector(".option")

let main = document.querySelector(".main");

let xBtn= document.querySelector(".x");

let body = document.querySelector(".mainbody")

let nxt = document.querySelector(".next")






let values = ["rock" , "paper" , "scissor"];

let pcval = [];

let userval = [];



let pcscore = 0;

let userscore = 0;

// localStorage.setItem("pcscore","0")
// localStorage.setItem("userscore","0")



rulebtn.addEventListener("click", (e) =>{
    rulebox.classList.remove("hidden");

});

closes.addEventListener("click", (e)=>{
    rulebox.classList.add("hidden");
});

xBtn.addEventListener("click", (e)=>{
    rulebox.classList.add("hidden");
})


// function mainfun(){


function getPcValue () {
    let rand = Math.floor(Math.random()*3);
    pcval.push(values[rand]);

}


function setPcVal(){

    if(pcval == "rock"){
        pcval[0] = "blue";
    }
    else if(pcval == "paper"){
        pcval[0] = "orange";
    }
    else if(pcval == "scissor"){
        pcval[0] = "purple";
    }

}

function setUserVal(){

    if(userval == "rock"){
        userval[0] = "blue";
    }
    else if(userval == "paper"){
        userval[0] = "orange";
    }
    else if(userval == "scissor"){
        userval[0] = "purple";
    }

}

function nextbtn () {
    
    
    nxt.classList.remove("hidden")
    rulebtn.classList.remove("rule")
    rulebtn.classList.add("rulechange")

}

let tiematch = document.querySelector(".mainres2");

function tie(){
    if(userval == "rock"){
        userval[0] = "blue";
        pcval[0] = "blue";
    }
    else if(userval == "paper"){
        userval[0] = "orange";
        pcval[0] = "orange";
    }
    else if(userval == "scissor"){
        userval[0] = "purple";
        pcval[0] = "purple";
    }
    console.log("function gameval",pcval)
    console.log("function userval",userval)

    main.innerHTML =  `<div class="result ">
    <div class="youpick">
        <span class="pick">YOU PICKED</span>
        <img src="./${userval}.png"  class="el1" />
    </div>
    <div class="textresult">
         <span>TIE UP</span>
         <div class="playagain">REPLAY</div>
    </div>
    <div class="pcpick">
        <span class="pick">PC PICKED</span>
        <img src="./${pcval}.png" class="el2" />
    </div>
</div>`
    
playagainn();

 
}

let wonmatch = document.querySelector(".mainres");

function won (){
   
  
    console.log("function gameval",pcval)
    console.log("function userval",userval)


    main.innerHTML = `<div class="result">
    <div class="youpick">
        <span class="pick">YOU PICKED</span>
        <img src="./${userval}.png" class="el1"  />
    </div>
    <div class="textresult">
         <span>YOU WIN</span>
         <span>AGAINST PC</span>
         <div class="playagain">PLAY AGAIN</div>
    </div>
    <div class="pcpick">
        <span class="pick">PC PICKED</span>
        <img src="./${pcval}.png" class="el2" />
    </div>
</div>`



playagainn();
nextbtn();
}

let lostmatch = document.querySelector(".mainres1");

function lost(){
    

    console.log("function gameval:",pcval[0])
    console.log("function userval:",userval[0])


       main.innerHTML = `<div class="result">
            <div class="youpick">
                <span class="pick">YOU PICKED</span>
                <img src="./${userval}.png" class="el1"   />
            </div>
            <div class="textresult">
                 <span>YOU LOST</span>
                 <span>AGAINST PC</span>
                 <div class="playagain">PLAY AGAIN</div>
            </div>
            <div class="pcpick">
                <span class="pick">PC PICKED</span>
                <img src="./${pcval}.png"  class="el2" />
            </div>
        </div>`

        

        playagainn();

        
}


function check () {
    if (userval == "rock" && pcval == "rock"){
        console.log("match tie");
        tie();
    }
    else if(userval == "rock" && pcval == "scissor"){
        console.log("User won");
        setPcVal();
        setUserVal();
    
        userscore++;
        won();
    }
    else if(userval == "rock" && pcval == "paper"){
        console.log("PC won");
        setPcVal();
        setUserVal();
    
        pcscore++;
        lost();
    }
    else if(userval == "scissor" && pcval == "scissor"){
        console.log("match tie");
        tie();
    }
    else if(userval == "scissor" && pcval == "rock"){
        console.log("PC won");
        setPcVal();
        setUserVal();
    
        pcscore++;
        lost();
    }
    else if (userval == "scissor" && pcval == "paper"){
        console.log("User won");
        setPcVal();
        setUserVal();
    
        userscore++;
        won();
    }
    else if (userval == "paper" && pcval == "paper"){
        console.log("match tie");
        setPcVal();
        setUserVal();
    
        tie();
    }
    else if (userval == "paper" && pcval == "rock"){
        console.log("User won");
        setPcVal();
        setUserVal();
    
        userscore++;
        won();
    }
    else if (userval == "paper" && pcval == "scissor"){
        console.log("PC won");
        setPcVal();
        setUserVal();    
        pcscore++;
        lost();
    }

    yourscore.innerText = userscore;

    compscore.innerText = pcscore;

    

    // yourscore.innerText = localStorage.getItem("userscore");

    // compscore.innerText = localStorage.getItem("pcscore");

   
}


for(i of items){
    i.addEventListener("click" , (e)=>{
        userval =[]
        pcval = []
        getPcValue();
        let value = e.target.attributes.value.nodeValue;
        // console.log(e.target.attributes)
        userval.push(value)
      
        console.log("PC value :", pcval);
        console.log("USER value :", userval); 
        check();
        option.classList.add("hidden");

       
    })
}


// }

// mainfun();

function playagainn(){
    let playagain = document.querySelector(".playagain")
    playagain.addEventListener("click", ()=>{
        main.innerHTML = `<div class="option ">
        <img src="./blue.png" class="item blue" value="rock" />
        <img src="./Line 1.png" class="line1" />
        <img src="./purple.png" class="item purple" value="scissor" />
        <img src="./Line 3.png" class="line3" />
        <img src="./Line 2.png" class="line2" />
        <img src="./orange.png" class="item orange" value="paper" />
      </div>`
    
      let items = document.querySelectorAll(".item")

    for(i of items){
        i.addEventListener("click" , (e)=>{
            userval =[]
            pcval = []
            getPcValue();
            let value = e.target.attributes.value.nodeValue;
            // console.log(e.target.attributes)
            userval.push(value)
          
            console.log("PC value :", pcval);
            console.log("USER value :", userval); 
            check();
            option.classList.add("hidden");
    
           
        })
    // mainfun();
    
}

nxt.classList.add("hidden")
rulebtn.classList.remove("rulechange")
rulebtn.classList.add("rule")

    })

    

}

let container = document.querySelector(".container")

nxt.addEventListener("click", ()=>{
    container.classList.remove("hidden")
    body.classList.add("hidden")
    let playagain1 = document.querySelector(".playagain1")
    playagain1.addEventListener("click",()=>{
        
        yourscore.innerText = 0;

    compscore.innerText = 0;

        container.classList.add("hidden")
        body.classList.remove("hidden")
        // playagainn();
        main.innerHTML = `<div class="option ">
        <img src="./blue.png" class="item blue" value="rock" />
        <img src="./Line 1.png" class="line1" />
        <img src="./purple.png" class="item purple" value="scissor" />
        <img src="./Line 3.png" class="line3" />
        <img src="./Line 2.png" class="line2" />
        <img src="./orange.png" class="item orange" value="paper" />
      </div>`
    
      let items = document.querySelectorAll(".item")

    for(i of items){
        i.addEventListener("click" , (e)=>{
            userval =[]
            pcval = []
            getPcValue();
            let value = e.target.attributes.value.nodeValue;
            // console.log(e.target.attributes)
            userval.push(value)
          
            console.log("PC value :", pcval);
            console.log("USER value :", userval); 
            check();
            option.classList.add("hidden");
    
           
        })
    // mainfun();
    
}


    })



})
