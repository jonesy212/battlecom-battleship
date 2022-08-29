
const ask = require('readline-sync')

'use strict';

//variables

//players
let players = [];
let player = []
const challengers = new Set(players)

// string and array/object sets
//colors
let colors =['red' , 'blue'];
let color = '';

const hit = false;


//empty arrays
//grid
let grid = [];
let grids = [];
let shipGrid = [];
let colorChoice = [];


//coordinates
const coordinates = {
    columns: {
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j'
    },
    rows: {
        a: '0', b: '1', c: '2', d: '3', e: '4', f: '5', g: '6', h: '7', i: '8', j: '9'
    }
}

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
function createPlayers(player, playerCount) {
    player = {
        color,
        ships,
        shipGrid
    }
    // let result = player.map(grid => grid.map(playerGrid))
    playerCount = 0
    while (players.length < 2) {
            if (players.length == 0) {
                colorChoice.push(color = 'red')
            } else {
                colorChoice.push(color = 'blue')
            }
            if (playerCount<= 2) {
                playerCount++
                players.push(player)
            } 
            
            console.log(`creating player ${playerCount}`)
        
            console.log('player:', color);
        }

    }




const {columns, rows} = coordinates
function createGrid() {
   
    let shipGridCount = 0
   
    for (player in players) {
  
            creating = true
        if (creating) {
                let created = false
                if (created == true) {
                    // playerAttack()
                }
                ///rows and columns
                for (const col in columns) {
                    // console.log('adding columns')
                    shipGrid[col] = [];
                    for (const row in rows) {
                        // console.log('adding rows')
                        created = true
                        addCoordinates(shipGrid, col, row);
                        if(shipGrid < 2){
                        shipGridCount++;
                    }
                        
                        if (shipGridCount === 2) {
                            console.log('setting ships \n')
                            // return setShips()
                        }
                    }
                }
        }
        console.log('creating ship grid ', shipGridCount);
        console.log(shipGrid)
            checkAllGridsMade()

        return shipGrid;
    }
}


const addCoordinates = (gridCoordinate, x, y) => {

    let coordinate = {x, y}
    // console.log('adding coordinates \n')
    gridCoordinate[x][y] = coordinate; //creates a new object
    grid.push(gridCoordinate[x][y]);
 
};


let checkAllGridsMade = () => {
    if (players.every(player => player) == true) {
        console.log('everyone has a grid');
        console.log(players.length)

        // return setShips()
   };
}

 
const setShips = ship => {
    console.log('setting ships \n')
    // ships.forEach(grid.push(ship))

}

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
    console.log('Let\'s get readdddy to ruummbbbllle \n')
    createPlayers()
    
} else {
    console.log('Maybe another time');
    ask()
}
createGrid()

console.log('players:', players[player])
// console.log('last player',players)