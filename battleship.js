const { forEach } = require('lodash');
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
let grid = []
let shipGrid = [];
let colorChoice = []


//coordinates

const coordinates = {
    columns: {
        a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j'
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
                ships,
                grid
            }
            console.log(`adding grid to player ${players.length}`)
            grid.push(shipGrid);

            if (player.grid == 1) {
                return
            }
            shipGrid.length += 1;
            players.push(player)
            console.log(`creating player ${players.length}`)
            console.log(player);
        }
    }
    if (players.length >= 2) {
        console.log('go to create grid')
        createGrid()
    }
}


const {columns, rows} = coordinates
function createGrid() {
    
    grid += 1
    creating = true
    if (creating) {
        let created = false
        if (created == true) {
            // playerAttack()
        }
        ///rows and columns
        for (const col in columns) {
            console.log('adding columns')
            shipGrid[col] = [];
            for (const row in rows) {
                console.log('adding rows')
                created = true
                console.log(`Grid:  ${shipGrid.length}`)
                addCoordinates(shipGrid, col, row);
            }
        }
        return shipGrid;
    }
}

const addCoordinates = (shipGrid, x, y) => {

    let coordinate = {x, y}
    
    console.log('adding coordinates \n')
    shipGrid[x][y] = coordinate; //creates a new object
    console.log(`shipGrid:${shipGrid.length}`,shipGrid);
};


const distributeGrid = (shipGrid, player) => {

    for (player in players) {
        if (grid = []) {
            grid.push(shipGrid)
        } else {
            'already has a grid'
        }
    }
}
 
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
createGrid()

