document.body.innerHTML = `
<h2>Assemble the puzzle</h2> 
<div class="button_volum">
        <button 
        class="button__volume"
        id="button__volume">VolumeOff</button>
        <button 
        class="button__volume"
        id="button__volumeOn">Volume On</button>
    </div>

<div class="game" id="game2">
<div class="gamecontrol">
    <div class="button">
        <button 
        class="button__shufle"
        id="button__shufle">Play and Shyffle</button>
    </div>
    <div class="button">
        <button 
        class="button__control"
        id="button__load">Load</button>
    </div>
    <div class="button">
        <button 
        class="button__control"
        id="button__save">Save</button>
    </div>
    <div class="button">
        <button 
        class="button__control"
        id="button__results">Results</button>
    </div>
    </div>
<div class="indicator">
    <div class="movesnumber" id="movesnumber"></div>
    <div class="timegame" id="timegame"></div>
</div>
<div class="fieldgame" id = "field15"></div>
</div>

<div class="game" id="game1">
            <div class="gamecontrol">
                <div class="button">
                    <button 
                    class="button__shufle"
                    id="button__shufle3">Play and Shyffle</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__load3">Load</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__save3">Save</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__results3">Results</button>
                </div>
                
            </div>
            <div class="indicator">
                <div class="movesnumber" id="movesnumber3"></div>
                <div class="timegame" id="timegame3"></div>
            </div>
            <div class="fieldgame" id = "field9"></div>
            </div>
            
            <div class="game" id="game3">
            <div class="gamecontrol">
                <div class="button">
                    <button 
                    class="button__shufle"
                    id="button__shufle5">Play and Shyffle</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__load5">Load</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__save5">Save</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__results5">Results</button>
                </div>
                
            </div>
            <div class="indicator">
                <div class="movesnumber" id="movesnumber5"></div>
                <div class="timegame" id="timegame5"></div>
            </div>
            <div class="fieldgame" id = "field5"></div>
            </div>
            
            <div class="game" id="game4">
            <div class="gamecontrol">
                <div class="button">
                    <button 
                    class="button__shufle"
                    id="button__shufle6">Play and Shyffle</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__load6">Load</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__save6">Save</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__results6">Results</button>
                </div>
                
            </div>
            <div class="indicator">
                <div class="movesnumber" id="movesnumber6"></div>
                <div class="timegame" id="timegame6"></div>
            </div>
            <div class="fieldgame" id = "field6"></div>
            </div>
            
            <div class="game" id="game5">
            <div class="gamecontrol">
                <div class="button">
                    <button 
                    class="button__shufle"
                    id="button__shufle7">Play and Shyffle</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__load7">Load</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__save7">Save</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__results7">Results</button>
                </div>
                
            </div>
            <div class="indicator">
                <div class="movesnumber" id="movesnumber7"></div>
                <div class="timegame" id="timegame7"></div>
            </div>
            <div class="fieldgame" id = "field7"></div>
            </div>
            
            <div class="game" id="game6">
            <div class="gamecontrol">
                <div class="button">
                    <button 
                    class="button__shufle"
                    id="button__shufle8">Play and Shyffle</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__load8">Load</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__save8">Save</button>
                </div>
                <div class="button">
                    <button 
                    class="button__control"
                    id="button__results8">Results</button>
                </div>
                
            </div>
            <div class="indicator">
                <div class="movesnumber" id="movesnumber8"></div>
                <div class="timegame" id="timegame8"></div>
            </div>
            <div class="fieldgame" id = "field8"></div>
            </div>
            
            <h3 class="sizeTitle">Please select size</h3>
            <div class="replace__size">
            
                        <button class="size" id="size1">3X3</button>
                        <button class="size active" id="size2">4X4</button>
                        <button class="size" id="size3">5X5</button>
                        <button class="size" id="size4">6X6</button>
                        <button class="size" id="size5">7X7</button>
                        <button class="size" id="size6">8X8</button>
                    </div>`

const audio = new Audio();
audio.src='../puzzle/Audio/najatie-knopki-na-sharikovoy-ruchke-ob-stol1.mp3'
const gameField15 = document.getElementById('field15');
let moves = 0;
let times =0;

let countMoves = document.getElementById('movesnumber');
   countMoves.innerHTML = `moves: ${moves}`;

let countTime = document.getElementById('timegame');
    countTime.innerHTML = `time: ${new Date(times*1000).getMinutes()}:${times%60}`
for (let i =1; i<=16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerHTML = i;
        cell.setAttribute('data-cell15', i);
        cell.setAttribute('id', 'a'+i)
        cell.setAttribute('draggable', true)
        gameField15.append(cell);
}

const cells = Array.from(gameField15.querySelectorAll('.cell'));

//Position
cells[15].style.opacity = '0';
let matrix15 = getMatrix15(
    cells.map((item) => Number(item.dataset.cell15))
);

positionCell(matrix15);

function getMatrix15(arr) {
    const matr = [[], [], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=4) {
            y++;
            x=0;
        }
        matr[y][x] = arr[a];
        x++;
    }
    return matr;
}

function positionCell(matrix) {
 for (let y =0; y< matrix.length; y++) {
    for (let x = 0; x<matrix[y].length; x++){
        const value = matrix[y][x];
        const c = cells[value-1];
        stylesCell(c, x, y);
    }
 }
}

function stylesCell(c, x, y) {
    const shiftPs = 100;
    c.style.transform = `translate3D(${x*shiftPs}%, ${y*shiftPs}%, 0)`
}

//Shuffle

let timerCount1= setInterval(()=>{
   countTime.innerHTML = `time: ${new Date(times*1000).getMinutes()}:${times%60}`
}, 1000);

const shuffleNumbers = document.getElementById('button__shufle');
shuffleNumbers.addEventListener('click', ()=>{
    const shuffledArr = shuffleArr(matrix15.flat())
    matrix15 = getMatrix15(shuffledArr);
    positionCell(matrix15);
    moves= 0;
    countMoves.innerHTML = `moves: ${moves}`;
    times=0;
    });
let timerCount = setInterval(()=>{times++}, 1000);

function shuffleArr(arr) {
    let a= arr.sort(() =>Math.random()-0.5);
    let a16 = a.indexOf(16);
    let k=Math.ceil((a16+1)/4);
    
      let kDisorder=0;
    a.splice(a16,1);
    for (let i= 0; i<a.length-1; i++){
            for(let j=i+1; j<a.length; j++) {
            if(a[i]>a[j]) {kDisorder++}
        }
   }
   a.splice(a16,0, 16)
    if (((kDisorder+k)%2) !==0) {return shuffleArr(arr)} 
    
   return  a;
  
}

//Change position by clicke
const emptyCell = 16;
gameField15.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell15);

   const cellPos = findPosition(cellNumber, matrix15);
   const emptyPos = findPosition(emptyCell, matrix15);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move(emptyPos, cellPos, matrix15);
    positionCell(matrix15);
    moves++;
    audio.play();  
    countMoves.innerHTML = `moves: ${moves}`;
   }
  })

function findPosition(number, matrix) {
    for(let y=0; y<matrix.length; y++){
        for(let x=0; x<matrix[y].length; x++) {
            if(matrix[y][x]===number) {
                return {x, y}
            }
        }
    }
    return null;
   }

  function isValidMove(pos1, pos2) {
      const posX = Math.abs(pos1.x-pos2.x);
      const posY = Math.abs(pos1.y-pos2.y);

      return( posX ===1 || posY ===1) && (pos1.x === pos2.x || pos1.y ===pos2.y)
   }

   function move(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin(matrix15)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times*1000).getMinutes()}:${times%60} and ${moves} moves!`)}, 500);
      setTimeout(() =>{
    //     const shuffledArr = shuffleArr(matrix15.flat())
    // matrix15 = getMatrix15(shuffledArr);
    // positionCell(matrix15);
    moves= 0;
    times=0;
    countMoves.innerHTML = `moves: ${moves}`;
      }, 1000);
      

    let arrRecord =JSON.parse(localStorage.getItem('records'))|| [];
        
        let result = {
            times,
            moves,
        };
        
        arrRecord.push(result);
        arrRecord.sort((a, b)=>a.moves-b.moves);
        if(arrRecord.length>10) {arrRecord.pop()}
        let arrRecordSet = JSON.stringify(arrRecord);
        localStorage.setItem('records', arrRecordSet);
        
     }
   }

   const clickRecord = document.getElementById('button__results');

   clickRecord.addEventListener('click', showRecord);
   function showRecord() {
    let arrRecordResult =JSON.parse(localStorage.getItem('records')) ||[];
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);
    for( let i =0; i<arrRecordResult.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult[i].moves}, times ${arrRecordResult[i].times}sec`
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   

//    window.addEventListener('load', ()=>{
//     const shuffledArr = shuffleArr(matrix15.flat())
//     matrix15 = getMatrix15(shuffledArr);
//     positionCell(matrix15);
//    });

   function isWin(matrix) {
    const winPosArr = new Array(16).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }

    return true;
   }

    //Change position by drop

   let drop = document.querySelectorAll('.cell');
   let drop1 = document.getElementById('a16')
   drop.forEach(el=>{
   el.addEventListener('dragstart', e=>{     
    e.dataTransfer.setData('cell15', e.target.dataset.cell15);
    })

   drop1.addEventListener('dragover', e=>{
    e.preventDefault()
   })

   el.addEventListener('drop', e=>{
   const cellNum = e.dataTransfer.getData('cell15')
   
   if(!cellNum) {
    return
   }
    const cellNumber = Number(cellNum);
    const cellPos = findPosition(cellNumber, matrix15);
    const emptyPos = findPosition(emptyCell, matrix15);
    const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move(emptyPos, cellPos, matrix15);
    positionCell(matrix15);
    moves++;
    audio.play();  
    countMoves.innerHTML = `moves: ${moves}`;
    }

   })

})

//    drop.forEach(e=>{
//    // e.draggable = true;
   
//     e.addEventListener('dragstart', e=>{
//         e.dataTransfer.setData('id', e.target.id);
//     })
//     e.addEventListener('dragover', e=>{
//         e.preventDefault();
//     })
//     e.addEventListener('drop', e=>{
//         let v = e.target.innerHTML;
//         let fromEl = document.querySelector('#'+ e.dataTransfer.getData('id'));
//         e.target.innerHTML = fromEl.innerHTML;
//         fromEl.innerHTML = v;
//     })
//    })

   
//    gameField15.addEventListener('dragover', allowDrop);

// function allowDrop(e) {
//     e.preventDefault()
// }
// for (let w=0; w<cells.length; w++) {
// cells[w].addEventListener('dragstrart', drag);
// cells[w].addEventListener('drop', drop);
// }

// function drag(e) {
// e.dataTransfer.setData('cell15', e.target.cell15)
// }

// function drop(e) {
//     let itemData = e.dataTransfer.getData('cell15');
//     e.target.append(document.getElementsByName(itemData))
// }

//Volume off 

const butVolumeOff = document.getElementById('button__volume');

const butVolumeON = document.getElementById('button__volumeOn');
butVolumeON.style.display = 'none';

butVolumeOff.addEventListener('click', ()=>{
            audio.muted = true;
        butVolumeON.style.display = 'block';
        butVolumeOff.style.display = 'none';  

});

butVolumeON.addEventListener('click', 
    () =>{
        audio.muted =false
    butVolumeON.style.display = 'none';
    butVolumeOff.style.display = 'block';
}
)


//Create 3X3

const gameField9 = document.getElementById('field9');
let moves1 = 0;
 let times1 =0;

let countMoves3 = document.getElementById('movesnumber3');
   countMoves3.innerHTML = `moves: ${moves1}`;

let countTime3 = document.getElementById('timegame3');
    countTime3.innerHTML = `time: ${new Date(times1*1000).getMinutes()}:${times1%60}`
for (let i =1; i<=9; i++) {
        const cell3 = document.createElement('div');
        cell3.className = 'cell3';
        cell3.innerHTML = i;
        cell3.setAttribute('data-cell3', i);
        cell3.setAttribute('id', 'b'+i)
        cell3.setAttribute('draggable', true)
        gameField9.append(cell3);
}

const cells3 = Array.from(gameField9.querySelectorAll('.cell3'));

//Position
cells3[8].style.opacity = '0';
let matrix9 = getMatrix9(
    cells3.map((item) => Number(item.dataset.cell3))
);

positionCell3(matrix9);

function getMatrix9(arr) {
    const matr3 = [[], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=3) {
            y++;
            x=0;
        }
        matr3[y][x] = arr[a];
        x++;
    }
    return matr3;
}

function positionCell3(matrix) {
    for (let y =0; y< matrix.length; y++) {
       for (let x = 0; x<matrix[y].length; x++){
           const value3 = matrix[y][x];
           const c = cells3[value3-1];
           stylesCell(c, x, y);
       }
    }
   }


   //Shuffle

let timerCount13= setInterval(()=>{
    countTime3.innerHTML = `time: ${new Date(times1*1000).getMinutes()}:${times1%60}`
 }, 1000);
 
 const shuffleNumbers3 = document.getElementById('button__shufle3');
 shuffleNumbers3.addEventListener('click', ()=>{
     const shuffledArr9 = shuffleArr9(matrix9.flat())
     matrix9 = getMatrix9(shuffledArr9);
     positionCell3(matrix9);
     moves1= 0;
     countMoves3.innerHTML = `moves: ${moves1}`;
     times1=0;
     });
 let timerCount3 = setInterval(()=>{times1++}, 1000);
 
 function shuffleArr9(arr) {
     let a= arr.sort(() =>Math.random()-0.5);
     let a9 = a.indexOf(9);
     let k=Math.ceil((a9+1)/4);
     
     let kDisorder=0;
     a.splice(a9,1);
     for (let i= 0; i<a.length-1; i++){
             for(let j=i+1; j<a.length; j++) {
             if(a[i]>a[j]) {kDisorder++}
         }
    }
    a.splice(a9,0, 9)
    
     if (((kDisorder)%2) !==0) {return shuffleArr9(arr)} 
     
    return  a;
   
 }

 //Change position by clicke
const emptyCell3 = 9;
gameField9.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell3);

   const cellPos = findPosition(cellNumber, matrix9);
   const emptyPos = findPosition(emptyCell3, matrix9);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move9(emptyPos, cellPos, matrix9);
    positionCell3(matrix9);
    moves1++;
    audio.play();  
    countMoves3.innerHTML = `moves: ${moves1}`;
   }
  })

  function move9(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin9(matrix9)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times1*1000).getMinutes()}:${times1%60} and ${moves1} moves!`)}, 500);
      setTimeout(() =>{
        const shuffledArr9 = shuffleArr9(matrix9.flat())
    matrix9 = getMatrix9(shuffledArr9);
    positionCell3(matrix9);
    moves1= 0;
    times1=0;
    countMoves3.innerHTML = `moves: ${moves1}`;
      }, 1000);

      let arrRecord1 =JSON.parse(localStorage.getItem('records1'))|| [];
        
        let result1 = {
            times1,
            moves1,
        };
        
        arrRecord1.push(result1);
        arrRecord1.sort((a, b)=>a.moves1-b.moves1);
        if(arrRecord1.length>10) {arrRecord1.pop()}
        localStorage.setItem('records1', JSON.stringify(arrRecord1));
     }
   }

   const clickRecord1 = document.getElementById('button__results3');

   clickRecord1.addEventListener('click', showRecord1);
   function showRecord1() {
    let arrRecordResult1 =JSON.parse(localStorage.getItem('records1'))||[];
    
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);

    for( let i =0; i<arrRecordResult1.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult1[i].moves1}, times ${arrRecordResult1[i].times1}sec`
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   window.addEventListener('load', ()=>{
    const shuffledArr9 = shuffleArr9(matrix9.flat())
    matrix9 = getMatrix9(shuffledArr9);
    positionCell3(matrix9);
   })

   function isWin9(matrix) {
    const winPosArr = new Array(9).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }

    return true;
   }


//Change position by drop

let drop3 = document.querySelectorAll('.cell3');
let drop13 = document.getElementById('b9')
drop3.forEach(el=>{
el.addEventListener('dragstart', e=>{     
 e.dataTransfer.setData('cell3', e.target.dataset.cell3);
 })

drop13.addEventListener('dragover', e=>{
 e.preventDefault()
})

el.addEventListener('drop', e=>{
const cellNum = e.dataTransfer.getData('cell3')

if(!cellNum) {
 return
}
 const cellNumber = Number(cellNum);
 const cellPos = findPosition(cellNumber, matrix9);
const emptyPos = findPosition(emptyCell3, matrix9);
 const isValid  = isValidMove(cellPos, emptyPos);

if (isValid) {
 move9(emptyPos, cellPos, matrix9);
 positionCell3(matrix9);
 moves1++;
 audio.play();  
 countMoves3.innerHTML = `moves: ${moves1}`;
 }

})

})

//Create 5X5
const gameField5 = document.getElementById('field5');
let moves2 = 0;
let times2 =0;

let countMoves5 = document.getElementById('movesnumber5');
   countMoves5.innerHTML = `moves: ${moves2}`;

let countTime5 = document.getElementById('timegame5');
    countTime5.innerHTML = `time: ${new Date(times2*1000).getMinutes()}:${times2%60}`
for (let i =1; i<=25; i++) {
        const cell5 = document.createElement('div');
        cell5.className = 'cell5';
        cell5.innerHTML = i;
        cell5.setAttribute('data-cell5', i);
        cell5.setAttribute('id', 'c'+i)
        cell5.setAttribute('draggable', true)
        gameField5.append(cell5);
}

const cells5 = Array.from(gameField5.querySelectorAll('.cell5'));

//Position
cells5[24].style.opacity = '0';
let matrix5 = getMatrix5(
    cells5.map((item) => Number(item.dataset.cell5))
);

positionCell5(matrix5);

function getMatrix5(arr) {
    const matr5 = [[], [], [], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=5) {
            y++;
            x=0;
        }
        matr5[y][x] = arr[a];
        x++;
    }
    return matr5;
}

function positionCell5(matrix) {
    for (let y =0; y< matrix.length; y++) {
       for (let x = 0; x<matrix[y].length; x++){
           const value5 = matrix[y][x];
           const c = cells5[value5-1];
           stylesCell(c, x, y);
       }
    }
   }

 //Shuffle

let timerCount15= setInterval(()=>{
    countTime5.innerHTML = `time: ${new Date(times2*1000).getMinutes()}:${times2%60}`
 }, 1000);
 
 const shuffleNumbers5 = document.getElementById('button__shufle5');
 shuffleNumbers5.addEventListener('click', ()=>{
     const shuffledArr5 = shuffleArr5(matrix5.flat())
     matrix5 = getMatrix5(shuffledArr5);
     positionCell5(matrix5);
     moves2= 0;
     countMoves5.innerHTML = `moves: ${moves2}`;
     times2=0;
     });
 let timerCount5 = setInterval(()=>{times2++}, 1000);
 
 function shuffleArr5(arr) {
     let a= arr.sort(() =>Math.random()-0.5);
     let a25 = a.indexOf(25);
      let k=Math.ceil((a25+1)/4);
     
     let kDisorder=0;
     a.splice(a25,1);
     for (let i= 0; i<a.length-1; i++){
             for(let j=i+1; j<a.length; j++) {
             if(a[i]>a[j]) {kDisorder++}
         }
    }
    a.splice(a25,0, 25)
    if (((kDisorder)%2) !==0) {return shuffleArr5(arr)} 
    
    return  a;
   
 }

 //Change position by clicke
const emptyCell5 = 25;
gameField5.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell5);

   const cellPos = findPosition(cellNumber, matrix5);
   const emptyPos = findPosition(emptyCell5, matrix5);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move5(emptyPos, cellPos, matrix5);
    positionCell5(matrix5);
    moves2++;
    audio.play();  
    countMoves5.innerHTML = `moves: ${moves2}`;
   }
  })

  function move5(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin5(matrix5)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times2*1000).getMinutes()}:${times2%60} and ${moves2} moves!`)}, 500);
      setTimeout(() =>{
        const shuffledArr5 = shuffleArr5(matrix5.flat())
    matrix5 = getMatrix5(shuffledArr5);
    positionCell5(matrix5);
    moves2= 0;
    times2=0;
    countMoves5.innerHTML = `moves: ${moves2}`;
      }, 1000);

      let arrRecord2 =JSON.parse(localStorage.getItem('records2'))|| [];
        
        let result2 = {
            times2,
            moves2,
        };
        
        arrRecord2.push(result2);
        arrRecord2.sort((a, b)=>a.moves2-b.moves2);
        if(arrRecord2.length>10) {arrRecord2.pop()}
        localStorage.setItem('records2', JSON.stringify(arrRecord2));
     }
   }

   const clickRecord2 = document.getElementById('button__results5');

   clickRecord2.addEventListener('click', showRecord2);
   function showRecord2() {
    let arrRecordResult2 =JSON.parse(localStorage.getItem('records2'))||[];
    
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);

    for( let i =0; i<arrRecordResult2.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult2[i].moves2}, times ${arrRecordResult2[i].times2}sec`;
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   window.addEventListener('load', ()=>{
    const shuffledArr5 = shuffleArr5(matrix5.flat())
    matrix5 = getMatrix5(shuffledArr5);
    positionCell5(matrix5);
   })

   function isWin5(matrix) {
    const winPosArr = new Array(25).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }

    return true;
   }

   //Change position by drop

let drop5 = document.querySelectorAll('.cell5');
let drop15 = document.getElementById('c25')
drop5.forEach(el=>{
el.addEventListener('dragstart', e=>{     
 e.dataTransfer.setData('cell5', e.target.dataset.cell5);
 })

drop15.addEventListener('dragover', e=>{
 e.preventDefault()
})

el.addEventListener('drop', e=>{
const cellNum = e.dataTransfer.getData('cell5')

if(!cellNum) {
 return
}
 const cellNumber = Number(cellNum);
 const cellPos = findPosition(cellNumber, matrix5);
const emptyPos = findPosition(emptyCell5, matrix5);
 const isValid  = isValidMove(cellPos, emptyPos);

if (isValid) {
 move5(emptyPos, cellPos, matrix5);
 positionCell5(matrix5);
 moves2++;
 audio.play();  
 countMoves5.innerHTML = `moves: ${moves2}`;
 }
})
});

//Create 6X6
const gameField6 = document.getElementById('field6');
let moves3 = 0;
let times3 =0;

let countMoves6 = document.getElementById('movesnumber6');
   countMoves6.innerHTML = `moves: ${moves3}`;

let countTime6 = document.getElementById('timegame6');
    countTime6.innerHTML = `time: ${new Date(times3*1000).getMinutes()}:${times3%60}`
for (let i =1; i<=36; i++) {
        const cell6 = document.createElement('div');
        cell6.className = 'cell6';
        cell6.innerHTML = i;
        cell6.setAttribute('data-cell6', i);
        cell6.setAttribute('id', 'd'+i)
        cell6.setAttribute('draggable', true)
        gameField6.append(cell6);
}

const cells6 = Array.from(gameField6.querySelectorAll('.cell6'));

//Position
cells6[35].style.opacity = '0';
let matrix6 = getMatrix6(
    cells6.map((item) => Number(item.dataset.cell6))
);

positionCell6(matrix6);

function getMatrix6(arr) {
    const matr6 = [[], [], [], [], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=6) {
            y++;
            x=0;
        }
        matr6[y][x] = arr[a];
        x++;
    }
    return matr6;
}

function positionCell6(matrix) {
    for (let y =0; y< matrix.length; y++) {
       for (let x = 0; x<matrix[y].length; x++){
           const value6 = matrix[y][x];
           const c = cells6[value6-1];
           stylesCell(c, x, y);
       }
    }
   }

   //Shuffle

let timerCount16= setInterval(()=>{
    countTime6.innerHTML = `time: ${new Date(times3*1000).getMinutes()}:${times3%60}`
 }, 1000);
 
 const shuffleNumbers6 = document.getElementById('button__shufle6');
 shuffleNumbers6.addEventListener('click', ()=>{
     const shuffledArr6 = shuffleArr6(matrix6.flat())
     matrix6 = getMatrix6(shuffledArr6);
     positionCell6(matrix6);
     moves3= 0;
     countMoves6.innerHTML = `moves: ${moves3}`;
     times3=0;
     });
 let timerCount6 = setInterval(()=>{times3++}, 1000);
 
 function shuffleArr6(arr) {
     let a= arr.sort(() =>Math.random()-0.5);
     let a36 = a.indexOf(36);
      let k=Math.ceil((a36+1)/4);
     
        let kDisorder=0;
     a.splice(a36,1);
     
     for (let i= 0; i<a.length-1; i++){
             for(let j=i+1; j<a.length; j++) {
             if(a[i]>a[j]) {kDisorder++}
         }
    }
    a.splice(a36,0, 36)
     if (((kDisorder+k)%2) !==0) {return shuffleArr6(arr)} 
     
    return  a;
   
 }

 //Change position by clicke
const emptyCell6 = 36;
gameField6.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell6);

   const cellPos = findPosition(cellNumber, matrix6);
   const emptyPos = findPosition(emptyCell6, matrix6);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move6(emptyPos, cellPos, matrix6);
    positionCell6(matrix6);
    moves3++;
    audio.play();  
    countMoves6.innerHTML = `moves: ${moves3}`;
   }
  })

  function move6(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin6(matrix6)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times3*1000).getMinutes()}:${times3%60} and ${moves3} moves!`)}, 500);
      setTimeout(() =>{
        const shuffledArr6 = shuffleArr6(matrix6.flat())
    matrix6 = getMatrix6(shuffledArr6);
    positionCell6(matrix6);
    moves3= 0;
    times3=0;
    countMoves6.innerHTML = `moves: ${moves3}`;
      }, 1000);

      let arrRecord3 =JSON.parse(localStorage.getItem('records3'))|| [];
        
        let result3 = {
            times3,
            moves3,
        };
        
        arrRecord3.push(result3);
        arrRecord3.sort((a, b)=>a.moves3-b.moves3);
        if(arrRecord3.length>10) {arrRecord3.pop()}
        localStorage.setItem('records3', JSON.stringify(arrRecord3));
     }
   }

   const clickRecord3 = document.getElementById('button__results6');

   clickRecord3.addEventListener('click', showRecord3);
   function showRecord3() {
    let arrRecordResult3 =JSON.parse(localStorage.getItem('records3'))||[];
    
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);

    for( let i =0; i<arrRecordResult3.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult3[i].moves3}, times ${arrRecordResult3[i].times3}sec`;
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   window.addEventListener('load', ()=>{
    const shuffledArr6 = shuffleArr6(matrix6.flat())
    matrix6 = getMatrix6(shuffledArr6);
    positionCell6(matrix6);
   })

   function isWin6(matrix) {
    const winPosArr = new Array(36).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }

    return true;
   }

   //Change position by drop

let drop6 = document.querySelectorAll('.cell6');
let drop16 = document.getElementById('d36')
drop6.forEach(el=>{
el.addEventListener('dragstart', e=>{     
 e.dataTransfer.setData('cell6', e.target.dataset.cell6);
 })

drop16.addEventListener('dragover', e=>{
 e.preventDefault()
})

el.addEventListener('drop', e=>{
const cellNum = e.dataTransfer.getData('cell6')

if(!cellNum) {
 return
}
 const cellNumber = Number(cellNum);
 const cellPos = findPosition(cellNumber, matrix6);
const emptyPos = findPosition(emptyCell6, matrix6);
 const isValid  = isValidMove(cellPos, emptyPos);

if (isValid) {
 move6(emptyPos, cellPos, matrix6);
 positionCell6(matrix6);
 moves3++;
 audio.play();  
 countMoves6.innerHTML = `moves: ${moves3}`;
 }
})
});

//Create 7X7
const gameField7 = document.getElementById('field7');
 let moves4 = 0;
let times4 =0;

let countMoves7 = document.getElementById('movesnumber7');
   countMoves7.innerHTML = `moves: ${moves4}`;

let countTime7 = document.getElementById('timegame7');
    countTime7.innerHTML = `time: ${new Date(times4*1000).getMinutes()}:${times4%60}`
for (let i =1; i<=49; i++) {
        const cell7 = document.createElement('div');
        cell7.className = 'cell7';
        cell7.innerHTML = i;
        cell7.setAttribute('data-cell7', i);
        cell7.setAttribute('id', 'e'+i)
        cell7.setAttribute('draggable', true)
        gameField7.append(cell7);
}

const cells7 = Array.from(gameField7.querySelectorAll('.cell7'));

//Position
cells7[48].style.opacity = '0';
let matrix7 = getMatrix7(
    cells7.map((item) => Number(item.dataset.cell7))
);

positionCell7(matrix7);

function getMatrix7(arr) {
    const matr7 = [[], [], [], [], [], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=7) {
            y++;
            x=0;
        }
        matr7[y][x] = arr[a];
        x++;
    }
    return matr7;
}

function positionCell7(matrix) {
    for (let y =0; y< matrix.length; y++) {
       for (let x = 0; x<matrix[y].length; x++){
           const value7 = matrix[y][x];
           const c = cells7[value7-1];
           stylesCell(c, x, y);
       }
    }
   }

   //Shuffle

let timerCount17= setInterval(()=>{
    countTime7.innerHTML = `time: ${new Date(times4*1000).getMinutes()}:${times4%60}`
 }, 1000);
 
 const shuffleNumbers7 = document.getElementById('button__shufle7');
 shuffleNumbers7.addEventListener('click', ()=>{
     const shuffledArr7 = shuffleArr7(matrix7.flat())
     matrix7 = getMatrix7(shuffledArr7);
     positionCell7(matrix7);
     moves4= 0;
     countMoves7.innerHTML = `moves: ${moves4}`;
     times4=0;
     });
 let timerCount7 = setInterval(()=>{times4++}, 1000);
 
 function shuffleArr7(arr) {
     let a= arr.sort(() =>Math.random()-0.5);
     let a49 = a.indexOf(49);
            let k=Math.ceil((a49+1)/4);
     
       let kDisorder=0;
     a.splice(a49,1);
     for (let i= 0; i<a.length-1; i++){
             for(let j=i+1; j<a.length; j++) {
             if(a[i]>a[j]) {kDisorder++}
         }
    }
    a.splice(a49,0, 49)
    if (((kDisorder)%2) !==0) {return shuffleArr7(arr)} 
     
    return  a;
   
 }

 //Change position by clicke
const emptyCell7 = 49;
gameField7.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell7);

   const cellPos = findPosition(cellNumber, matrix7);
   const emptyPos = findPosition(emptyCell7, matrix7);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move6(emptyPos, cellPos, matrix7);
    positionCell7(matrix7);
    moves4++;
    audio.play();  
    countMoves7.innerHTML = `moves: ${moves4}`;
   }
  })

  function move7(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin7(matrix7)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times4*1000).getMinutes()}:${times4%60} and ${moves4} moves!`)}, 500);
      setTimeout(() =>{
        const shuffledArr7 = shuffleArr7(matrix7.flat())
    matrix7 = getMatrix7(shuffledArr7);
    positionCell7(matrix7);
    moves4= 0;
    times4=0;
    countMoves7.innerHTML = `moves: ${moves4}`;
      }, 1000);

      let arrRecord4 =JSON.parse(localStorage.getItem('records4'))|| [];
        
        let result4 = {
            times4,
            moves4,
        };
        
        arrRecord4.push(result4);
        arrRecord4.sort((a, b)=>a.moves4-b.moves4);
        if(arrRecord4.length>10) {arrRecord4.pop()}
        localStorage.setItem('records4', JSON.stringify(arrRecord4));
     }
   }

   const clickRecord4 = document.getElementById('button__results7');

   clickRecord4.addEventListener('click', showRecord4);
   function showRecord4() {
    let arrRecordResult4 =JSON.parse(localStorage.getItem('records4'))||[];
    
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);

    for( let i =0; i<arrRecordResult4.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult4[i].moves4}, times ${arrRecordResult4[i].times4}sec`;
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   window.addEventListener('load', ()=>{
    const shuffledArr7 = shuffleArr7(matrix7.flat())
    matrix7 = getMatrix7(shuffledArr7);
    positionCell7(matrix7);
   })

   function isWin7(matrix) {
    const winPosArr = new Array(49).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }

    return true;
   }

   //Change position by drop

let drop7 = document.querySelectorAll('.cell7');
let drop17 = document.getElementById('e49')
drop7.forEach(el=>{
el.addEventListener('dragstart', e=>{     
 e.dataTransfer.setData('cell7', e.target.dataset.cell7);
 })

drop17.addEventListener('dragover', e=>{
 e.preventDefault()
})

el.addEventListener('drop', e=>{
const cellNum = e.dataTransfer.getData('cell7')

if(!cellNum) {
 return
}
 const cellNumber = Number(cellNum);
 const cellPos = findPosition(cellNumber, matrix7);
const emptyPos = findPosition(emptyCell7, matrix7);
 const isValid  = isValidMove(cellPos, emptyPos);

if (isValid) {
 move7(emptyPos, cellPos, matrix7);
 positionCell7(matrix7);
 moves4++;
 audio.play();  
 countMoves7.innerHTML = `moves: ${moves4}`;
 }
})
});

//Create 8X8

const gameField8 = document.getElementById('field8');
let moves5 = 0;
let times5 =0;

let countMoves8 = document.getElementById('movesnumber8');
   countMoves8.innerHTML = `moves: ${moves5}`;

let countTime8 = document.getElementById('timegame8');
    countTime8.innerHTML = `time: ${new Date(times5*1000).getMinutes()}:${times5%60}`
for (let i =1; i<=64; i++) {
        const cell8 = document.createElement('div');
        cell8.className = 'cell8';
        cell8.innerHTML = i;
        cell8.setAttribute('data-cell8', i);
        cell8.setAttribute('id', 'f'+i)
        cell8.setAttribute('draggable', true)
        gameField8.append(cell8);
}

const cells8 = Array.from(gameField8.querySelectorAll('.cell8'));

//Position
cells8[63].style.opacity = '0';
let matrix8 = getMatrix8(
    cells8.map((item) => Number(item.dataset.cell8))
);

positionCell8(matrix8);

function getMatrix8(arr) {
    const matr8 = [[], [], [], [], [], [], [], []]
    let y =0;
    let x =0;

    for(let a = 0; a <arr.length; a++) {
        if(x>=8) {
            y++;
            x=0;
        }
        matr8[y][x] = arr[a];
        x++;
    }
    return matr8;
}

function positionCell8(matrix) {
    for (let y =0; y< matrix.length; y++) {
       for (let x = 0; x<matrix[y].length; x++){
           const value8 = matrix[y][x];
           const c = cells8[value8-1];
           stylesCell(c, x, y);
       }
    }
   }

   //Shuffle

let timerCount18= setInterval(()=>{
    countTime8.innerHTML = `time: ${new Date(times5*1000).getMinutes()}:${times5%60}`
 }, 1000);
 
 const shuffleNumbers8 = document.getElementById('button__shufle8');
 shuffleNumbers8.addEventListener('click', ()=>{
     const shuffledArr8= shuffleArr8(matrix8.flat())
     matrix8 = getMatrix8(shuffledArr8);
     positionCell8(matrix8);
     moves5= 0;
     countMoves8.innerHTML = `moves: ${moves5}`;
     times5=0;
     });
 let timerCount8 = setInterval(()=>{times5++}, 1000);
 
 function shuffleArr8(arr) {
     let a= arr.sort(() =>Math.random()-0.5);
     let a64 = a.indexOf(64);
            let k=Math.ceil((a64+1)/4);
     
       let kDisorder=0;
     a.splice(a64,1);
      for (let i= 0; i<a.length-1; i++){
             for(let j=i+1; j<a.length; j++) {
             if(a[i]>a[j]) {kDisorder++}
         }
    }
    a.splice(a64,0, 64);
    if (((kDisorder+k)%2) !==0) {return shuffleArr8(arr)} 
     
    return  a;
   
 }

 //Change position by clicke
const emptyCell8 = 64;
gameField8.addEventListener('click', (event) =>{
   const cellNum = event.target.closest('div');
   if(!cellNum) {
    return
   }

   const cellNumber = Number(cellNum.dataset.cell8);
   const cellPos = findPosition(cellNumber, matrix8);
   const emptyPos = findPosition(emptyCell8, matrix8);

   const isValid  = isValidMove(cellPos, emptyPos);

   if (isValid) {
    move6(emptyPos, cellPos, matrix8);
    positionCell8(matrix8);
    moves5++;
    audio.play();  
    countMoves8.innerHTML = `moves: ${moves5}`;
   }
  })

  function move8(pos1, pos2, matrix) {
    const pos1Number = matrix[pos1.y][pos1.x];
     matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
     matrix[pos2.y][pos2.x] = pos1Number;

     if (isWin8(matrix8)) {
      setTimeout(()=> {alert(`Hooray! You solved the puzzle in  ${new Date(times5*1000).getMinutes()}:${times5%60} and ${moves5} moves!`)}, 500);
      setTimeout(() =>{
        const shuffledArr8 = shuffleArr8(matrix8.flat())
    matrix8 = getMatrix8(shuffledArr8);
    positionCell8(matrix8);
    moves5= 0;
    times5=0;
    countMoves8.innerHTML = `moves: ${moves5}`;
      }, 1000);

      let arrRecord5 =JSON.parse(localStorage.getItem('records5'))|| [];
        
        let result5 = {
            times5,
            moves5,
        };
        
        arrRecord5.push(result5);
        arrRecord5.sort((a, b)=>a.moves5-b.moves5);
        if(arrRecord5.length>10) {arrRecord5.pop()}
        localStorage.setItem('records5', JSON.stringify(arrRecord5));
     }
   }

   const clickRecord5 = document.getElementById('button__results8');

   clickRecord5.addEventListener('click', showRecord5);
   function showRecord5() {
    let arrRecordResult5 =JSON.parse(localStorage.getItem('records5'))||[];
    
    let overloy = document.createElement('div');
    overloy.className = 'overloy';
    document.body.append(overloy);

    let showResult = document.createElement('div');
    showResult.className = 'showResult';
    overloy.append(showResult);

    let closeResult = document.createElement('div');
    closeResult.className = 'closeresult';
    closeResult.innerHTML = '&#10006;'
    showResult.appendChild(closeResult);

    let tittleResult = document.createElement('h4');
    tittleResult.className = 'titleresult';
    tittleResult.textContent = 'Records:';
    showResult.appendChild(tittleResult);

    for( let i =0; i<arrRecordResult5.length; i++) {
        let bestResult = document.createElement('p');
        bestResult.className = 'bestresult';
        bestResult.textContent = `${i+1}: Moves ${arrRecordResult5[i].moves5}, times ${arrRecordResult5[i].times5}sec`;
        showResult.appendChild(bestResult)
    }

    let closeRecord = document.querySelector('.closeresult');
   closeRecord.addEventListener('click', ()=>overloy.remove());
   overloy.addEventListener('click', (e)=>{if(!e.target.closest('.showResult')) overloy.remove()})
   }

   window.addEventListener('load', ()=>{
    const shuffledArr8 = shuffleArr8(matrix8.flat())
    matrix8 = getMatrix8(shuffledArr8);
    positionCell8(matrix8);
   })

   function isWin8(matrix) {
    const winPosArr = new Array(64).fill(0).map((_item, i) => i+1);

    const flatMatrix = matrix.flat();
    for(let i = 0; i < winPosArr.length; i++){
        if (flatMatrix[i] !==winPosArr[i]){
            return false;
        }
    }
    return true;
   }

   //Change position by drop

let drop8 = document.querySelectorAll('.cell8');
let drop18 = document.getElementById('f64')
drop8.forEach(el=>{
el.addEventListener('dragstart', e=>{     
 e.dataTransfer.setData('cell8', e.target.dataset.cell8);
 })

drop18.addEventListener('dragover', e=>{
 e.preventDefault()
})

el.addEventListener('drop', e=>{
const cellNum = e.dataTransfer.getData('cell8')
// if(!cellNum) {
//  return
// }
 const cellNumber = Number(cellNum);
 const cellPos = findPosition(cellNumber, matrix8);
const emptyPos = findPosition(emptyCell8, matrix8);
 const isValid  = isValidMove(cellPos, emptyPos);

if (isValid) {
 move8(emptyPos, cellPos, matrix8);
 positionCell8(matrix8);
 moves5++;
 audio.play();  
 countMoves8.innerHTML = `moves: ${moves5}`;
 }
})
});
  
// Replace size

const button1 = document.getElementById('size1');
const button2 = document.getElementById('size2');
const button3 = document.getElementById('size3');
const button4 = document.getElementById('size4');
const button5 = document.getElementById('size5');
const button6 = document.getElementById('size6');

const game1 = document.getElementById('game1');
const game2 = document.getElementById('game2');
const game3 = document.getElementById('game3');
const game4 = document.getElementById('game4');
const game5 = document.getElementById('game5');
const game6 = document.getElementById('game6');

game1.style.display ='none';
game3.style.display ='none';
game4.style.display ='none';
game5.style.display ='none';
game6.style.display ='none';

button1.addEventListener('click', ()=>{
game1.style.display ='block';
game2.style.display ='none';
game3.style.display ='none';
game4.style.display ='none';
game5.style.display ='none';
game6.style.display ='none';

button1.classList.add('active');
button2.classList.remove('active');
button3.classList.remove('active');
button4.classList.remove('active');
button5.classList.remove('active');
button6.classList.remove('active');
});

button2.addEventListener('click', ()=>{
    game1.style.display ='none';
    game2.style.display ='block';
    game3.style.display ='none';
    game4.style.display ='none';
    game5.style.display ='none';
    game6.style.display ='none';
    
    button1.classList.remove('active');
    button2.classList.add('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.remove('active');
    button6.classList.remove('active');
    });

    button3.addEventListener('click', ()=>{
        game1.style.display ='none';
        game2.style.display ='none';
        game3.style.display ='block';
        game4.style.display ='none';
        game5.style.display ='none';
        game6.style.display ='none';
        
        button1.classList.remove('active');
        button2.classList.remove('active');
        button3.classList.add('active');
        button4.classList.remove('active');
        button5.classList.remove('active');
        button6.classList.remove('active');
        
        //times2 = 0;
        });

        button4.addEventListener('click', ()=>{
            game1.style.display ='none';
            game2.style.display ='none';
            game3.style.display ='none';
            game4.style.display ='block';
            game5.style.display ='none';
            game6.style.display ='none';
            
            button1.classList.remove('active');
            button2.classList.remove('active');
            button3.classList.remove('active');
            button4.classList.add('active');
            button5.classList.remove('active');
            button6.classList.remove('active');
            
            //times3 = 0;
            });

 button5.addEventListener('click', ()=>{
    game1.style.display ='none';
    game2.style.display ='none';
    game3.style.display ='none';
    game4.style.display ='none';
    game5.style.display ='block';
    game6.style.display ='none';
                
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.add('active');
    button6.classList.remove('active');
                
    //times4 = 0;
    });

    button6.addEventListener('click', ()=>{
        game1.style.display ='none';
        game2.style.display ='none';
        game3.style.display ='none';
        game4.style.display ='none';
        game5.style.display ='none';
        game6.style.display ='block';
                    
        button1.classList.remove('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
        button5.classList.remove('active');
        button6.classList.add('active');
         //times5 = 0;
        });

        //SaveGame and load 15

        const saveGame15 = document.getElementById('button__save');
        const loadGame15 = document.getElementById('button__load');
        
        saveGame15.addEventListener('click', saveThisGame15);
       
        function saveThisGame15() {
            let Arr15 =JSON.stringify(matrix15);
           localStorage.setItem('saveArr15',Arr15);
            localStorage.setItem('saveTimes', times);
            localStorage.setItem('saveMoves', moves);
        }

        loadGame15.addEventListener('click', loadThisGame15);

    function loadThisGame15() {
        let returnArr15 = JSON.parse(localStorage.getItem('saveArr15'));
        matrix15  = returnArr15;
         positionCell(matrix15);
         times = +localStorage.getItem('saveTimes');
         moves = +localStorage.getItem('saveMoves');
         countMoves.innerHTML = `moves: ${moves}`;
         countTime.innerHTML = `time: ${new Date(times*1000).getMinutes()}:${times%60}`
        }

//SaveGame and load 9

        const saveGame9 = document.getElementById('button__save3');
        const loadGame9 = document.getElementById('button__load3');
        
        saveGame9.addEventListener('click', saveThisGame9);
       
        function saveThisGame9() {
            let Arr9 =JSON.stringify(matrix9);
           localStorage.setItem('saveArr9',Arr9);
            localStorage.setItem('saveTimes1', times1);
            localStorage.setItem('saveMoves1', moves1);
         }

        loadGame9.addEventListener('click', loadThisGame9);

    function loadThisGame9() {
        let returnArr9 = JSON.parse(localStorage.getItem('saveArr9'));
        matrix9  = returnArr9;
         positionCell3(matrix9);
         times1 = +localStorage.getItem('saveTimes1');
         moves1 = +localStorage.getItem('saveMoves1');
         countMoves3.innerHTML = `moves: ${moves1}`;
         countTime3.innerHTML = `time: ${new Date(times1*1000).getMinutes()}:${times1%60}`
        }

        //SaveGame and load 25

        const saveGame25 = document.getElementById('button__save5');
        const loadGame25 = document.getElementById('button__load5');
        
        saveGame25.addEventListener('click', saveThisGame25);
       
        function saveThisGame25() {
            let Arr25 =JSON.stringify(matrix5);
           localStorage.setItem('saveArr25',Arr25);
            localStorage.setItem('saveTimes2', times2);
            localStorage.setItem('saveMoves2', moves2);
        }

        loadGame25.addEventListener('click', loadThisGame25);

    function loadThisGame25() {
        let returnArr25 = JSON.parse(localStorage.getItem('saveArr25'));
        matrix5  = returnArr25;
         positionCell5(matrix5);
         times2 = +localStorage.getItem('saveTimes2');
         moves2 = +localStorage.getItem('saveMoves2');
         countMoves5.innerHTML = `moves: ${moves2}`;
         countTime5.innerHTML = `time: ${new Date(times2*1000).getMinutes()}:${times2%60}`
        }

        //SaveGame and load 36

        const saveGame36 = document.getElementById('button__save6');
        const loadGame36 = document.getElementById('button__load6');
        
        saveGame36.addEventListener('click', saveThisGame36);
       
        function saveThisGame36() {
            let Arr36 =JSON.stringify(matrix6);
           localStorage.setItem('saveArr36',Arr36);
            localStorage.setItem('saveTimes3', times3);
            localStorage.setItem('saveMoves3', moves3);
       }

        loadGame36.addEventListener('click', loadThisGame36);

    function loadThisGame36() {
        let returnArr36 = JSON.parse(localStorage.getItem('saveArr36'));
        matrix6  = returnArr36;
         positionCell6(matrix6);
         times3 = +localStorage.getItem('saveTimes3');
         moves3 = +localStorage.getItem('saveMoves3');
         countMoves6.innerHTML = `moves: ${moves3}`;
         countTime6.innerHTML = `time: ${new Date(times3*1000).getMinutes()}:${times3%60}`
        }

        //SaveGame and load 49

        const saveGame49 = document.getElementById('button__save7');
        const loadGame49 = document.getElementById('button__load7');
        
        saveGame49.addEventListener('click', saveThisGame49);
       
        function saveThisGame49() {
            let Arr49 =JSON.stringify(matrix7);
           localStorage.setItem('saveArr49',Arr49);
            localStorage.setItem('saveTimes4', times4);
            localStorage.setItem('saveMoves4', moves4);
  
        }

        loadGame49.addEventListener('click', loadThisGame49);

    function loadThisGame49() {
        let returnArr49 = JSON.parse(localStorage.getItem('saveArr49'));
        matrix7  = returnArr49;
         positionCell7(matrix7);
         times4 = +localStorage.getItem('saveTimes4');
         moves4 = +localStorage.getItem('saveMoves4');
         countMoves7.innerHTML = `moves: ${moves4}`;
         countTime7.innerHTML = `time: ${new Date(times4*1000).getMinutes()}:${times4%60}`
        }

//SaveGame and load 64

const saveGame64 = document.getElementById('button__save8');
const loadGame64 = document.getElementById('button__load8');

saveGame64.addEventListener('click', saveThisGame64);

function saveThisGame64() {
    let Arr64 =JSON.stringify(matrix8);
   localStorage.setItem('saveArr64',Arr64);
    localStorage.setItem('saveTimes5', times5);
    localStorage.setItem('saveMoves5', moves5);

}
loadGame64.addEventListener('click', loadThisGame64);
function loadThisGame64() {
let returnArr64 = JSON.parse(localStorage.getItem('saveArr64'));
matrix8  = returnArr64;
 positionCell8(matrix8);
 times5 = +localStorage.getItem('saveTimes5');
 moves5 = +localStorage.getItem('saveMoves5');
 countMoves8.innerHTML = `moves: ${moves5}`;
 countTime8.innerHTML = `time: ${new Date(times5*1000).getMinutes()}:${times5%60}`
}












    









