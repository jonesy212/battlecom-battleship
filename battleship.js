const ask = require('readline-sync')

'use strict';


// 3 hits destroyer
// 3 hits submarine 
// 3 hits cruiser 
// 4 hits battleship 
// 5 hits carrier


//variables

//players
const players = [];


//colors
let colors =['red' , 'blue'];
let color = '';
let colorChoice = []
const hit = false;

//grid
let shipGrid = [];

    









//ships
const ships = {
    destroyer: {
        shipName: 'destroyer',
        hitsRemaining: 3
    },
    submarine: {
        shipName: 'submarine',
        hitsRemaining: 3 
    },
    cruiser: {
        shipName: 'cruiser',
        hitsRemaining: 3 
    },
    battleship: {
        shipName: 'battleship',
        hitsRemaining: 4 
    },
    carrier: {
        shipName: 'carrier',
        hitsRemaining: 5 
    }
}



//FUNCTION
function createPlayers(player) {
    while (players.length < 2) {
        if (players.length < 2) {
          
            if (players.length == 0) {
                colorChoice.push(color = 'red')
            } else {
                colorChoice.push(color = 'blue')
            }

            player = {
                color,
                ships
            }
            players.push(player)
            console.log(`creating player ${players.length}`)
            console.log(player)
        }
    }
    if (players.length === 2) {
        console.log('go to create grid')
        createGrid()
    }
}


function createGrid(columns, rows) {
    console.log('creating grid')
    while (createGrid) {
        
    ///rows and columns
    for (const col in columns) {
        console.log('running loop')
        shipGrid[col] = [];
        for (const row in rows) {
            addCoordinates(shipGrid, col, row); 
        }
    }
    return shipGrid;
    }
    addCoordinates()
}

const addCoordinates = (shipGrid, x, y) => {
    console.log('adding coordinates')
    shipGrid[x][y] = cell(x, y); //creates a new object
    console.log('shipGrid:',shipGrid);
};
 

// const setShips = ship => {
//     console.log('setting ships \n')
//     ships.forEach(grid.push(ship))

// }

// for (const [key, value] of ships) {
//     console.log('ship:', key, 'hits remaining:', value)
//     let hit =true
//     if (hit == true) {
//         hitsLeft.value - 1
//         console.log('hits remaining:',value)
//     }
// }


// setShips(ship => {
//     console.log('setting ships \n')
//     ships.forEach(grid.push(ship))
// })


//QUESTIONS
if (ask.keyIn('Press any button to start\n \n ')){
    console.log('Let\'s get readdddy to ruummbbbllle')
    createPlayers()
    
} else {
    console.log('Maybe another time');
    ask()
}


console.log('GRID',createGrid(10,10).add()(coordinates))
