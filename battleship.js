
const ask = require('readline-sync')

'use strict';

//variables

//players
let players = [];
let player = [];
const challengers = new Set(players)

// string and array/object sets
//colors

const hit = false;


//empty arrays
//grid
let id = [];
let grids = [];
let shipGrid = [];
let grid = [];
let playerCount = 0



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
const ships = [
   {shipName: 'destroyer',
        hitsRemaining: 3
    },
    {shipName: 'submarine',
        hitsRemaining: 3 
    },
    {shipName: 'cruiser',
        hitsRemaining: 3 
    },
    {shipName: 'battleship',
        hitsRemaining: 4 
    },
    {shipName: 'carrier',
        hitsRemaining: 5 
    },
]

//FUNCTION
function createPlayers(player,playerCount) {
    
    playerCount = 0
    while (players.length < 2) { 
        if (playerCount < 2) {
            playerCount++
            player = {
                id,
                color: getRandomColor(),
                ships,
                grid
            }
            console.log(`creating player ${playerCount}`)
            players.push(player)
            console.log('adding player color')
            player.color = getRandomColor()
            console.log('player ' + playerCount + ' color', player.color)
            createGrid()
            if (player.length > 1) {
                players.pop(player)
                playerCount -= 1
            }
          
        }
    }
    return players
}


let getRandomColor=(acc, curentColor)=> {
    let colors = ['red', 'blue', 'green', 'orange',
        'yellow', 'blue', 'pink', 'tan', 'white', 'black'];
   
    return colors[Math.floor(Math.random() * colors.length)];
    }    

const {columns, rows} = coordinates
function createGrid(shipGridCount) {
    shipGridCount = 0
    let playerCount = 0
    let grid = 0

    for (player in players) {
        creating = true
        if (creating) {
            shipGridCount++
                let created = false
                ///rows and columns
            for (const col in columns) {
                    // console.log('adding column')
                    shipGrid[col] = [];
                    for (const row in rows) {
                        // console.log('adding row')
                        created = true
                        addCoordinates(shipGrid, col, row);
                    }
                }
                if (shipGrid < 2) {
                    createGrid();
            }
                if (shipGridCount === 2) {
                    console.log('setting ships \n')
                    setShips()
                }
            
        }
        return shipGrid;
    }
    
}

const addCoordinates = ((gridCoordinate, x, y) => {
    let coordinate = {x, y}
    console.log('adding coordinates \n')
    gridCoordinate[x][y] = coordinate; //creates a new object
    grid.push(gridCoordinate[x][y]);
});


let updateCoordinates = (coordinates, xCoordId, yCoordId, editedContent) => {
    Object.assign({}, coordinates, {
        boarding
    })
}
    
    // let coordinate = { x, y }
    // let filled = 'T'
    
    // for (const player of players) {
    //     for(coordinate in grid)
    //         for (spot in coordinates) {
    //             console.log(rows.j)
    //             console.log('before',columns[0].toUpperCase())
                
                

    //             console.log('after',  (columns[0].toUpperCase()))
    //           if (columns[0] === 'a') {
    //               console.log('TRUTH', true)
    //               console.log('A',rows.a)
    //               grid.pop(coordinates.columns[0])
    //               console.log(coordinates.columns[0])
    //           }
    //     }
    // }


    // if (updatedCoordinate[x][y] = coordinate) {
    //     gridCoordinate.push(updatedCoordinate[x]['d'])
    //     console.log('updating Coordinates', updateCoordinates[x][y])
    // }



let checkAllGridsMade = () => {
    if (players.every(player => player) == true) {
        if(players.length )
        if (players.length === 2) {
            console.log(`All ${players.length} players have a grid`);
           return
        } else {
            console.log(`not all grids are created`);
            setShips()
        }
    }
    return players
}



function setShips() {
    
    grid.push(ships)
    // console.log(grid)
    console.log(ships)
    // direction = hor || vertical
    playerCount = 0
    for (const player in players) {
        playerCount++
        //cycle through players level of array
        console.log('Getting ships \n\n')
        for (const ship in ships) { 
            //cycle through ships/grid/coordinate level of array
            let hitPoint = ships[ship].hitsRemaining
            let coordinate = hitPoint -(hitPoint -1)
            let shipName = ships[ship].shipName
            let spot = hitPoint - coordinate

            xValue = 'c'///a-j
            yValue = 1 /// 0-9

            // const updateValue = _.cloneDeepWith(data, (value) => {
            //    const newSpotTaken = {spot} 
            // console.log('NEW NEW', newSpotTaken)
            // if (TakingSpot) {
            //     let taken = true
                
            // }
            // // }
            //set coordinate position
            let x = rows[xValue]
            let y = columns[yValue]
           
            let position = console.log('position', x, y)
            


            console.log('x:',x,'y:',y)
            console.log('setting ship in grid')



            console.log('name', shipName)
            console.log('hit points', hitPoint)
     
            for (let spot in coordinates) {
                

                console.log()
                console.log('ROWS')
                let removeCoordinate = (entered => {
                    
                    // if (spot == '0') {
                    //     console.log('SPOT', coordinates.rows['a'])
                    //  }
                    // if (columns['1'] == 'b') {
                    //     columns['1']  == columns['T']
                    //     console.log(true)
                    //     console.log('changed', console.log(coordinates.columns['1']))
                    // }
                    console.log('NO', columns[2])
                    grid.splice(grid.indexOf(spot), 1)
                    console.log('removing ' + coordinates.columns['2'])
                    grid.pop(columns['b'],2)
                    console.log('REMOVED', columns['2'])
                    console.log('REMOVED', coordinates)
                   
                }) 
    
                removeCoordinate()
                let test = rows['a'] + columns[1 + 3]
            
                // console.log(rows['b'] + columns[0])
                // (rows['a'] + columns[1 + 3]== test)
                
            }

        
       
            
            
            // let input1 = coordinates.columns[input1] 
            // let input2 = coordinates.rows[input2]
         
            console.log('x:', coordinates.columns, 'y:', coordinates.rows) 
            if (coordinates.rows['a'] == '0') {
                console.log('x:',coordinates.columns['0'])
                console.log('y:', coordinates.rows['a'])
                updateCoordinates()
                
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            // console.log(columns[2], rows['j']);
            // columns[2] = grid.push(columns[2]== ["T"])
            // console.log(columns[2])

         
            let fill = coordinate => {
                for (coordinate in coordinates) {
                    console.log(coordinate[0],coordinate['a'])
                }
            }
            // fill()
            //   coordinates.push(rows['x'])
            // let filledColumn = columns[1] + shipLength

            
            // let filledRow = columns[1] + shipLength
            // console.log('dd',filledSpot)
            // get size of the ship
            size = `${ships[ship].hitsRemaining}`
            //set each hit to a x, y coordinate
        
            if (hit) {
                
                hitsRemaining = ship.hitsRemaining 
            }
            hitsRemaining = ships[ship].hitsRemaining
            // let hit = hitsRemaining - 1
            
            // if (hit === true) {
                
            // }
            // console.log(shiplength)
      
            
            
            console.log('one spot',columns['i'])
            console.log('',rows['b'])
         
            grid.push(
                {
                    hor: coordinates[0],
                    ver: coordinates['a'],
                    size: size
                })

            // size = ships[ship].hitsRemaining
            // console.log(ships[ship].hitsRemaining)
            // // console.log(columns)

        }
        
        // for (const coordinates in shipGrid) {
        //     console.log(coordinates)
        // }
        // size = ships[coordinates].hitsRemaining
        // console.log(ships[coordinates])
        // console.log('getting ship ' + playerCount + ' grid')
        // console.log(players.shipGrid)
        

        // if (ships[ship].hitsRemaining) {
        //     console.log('hits remaining', ships[ship].hitsRemaining)
            
        //     let currentHits = hitsRemaining
        //     let hit = currentHits - 1
        //     let miss = hitsRemaining

        // }
    }
  
    // getAllShips
    // set size to ship hitsRemaining(default)
    // randomly place ships on board
    // make sure they are only vertical or horizontal- direction
    // make sure ships are set in grid

    // horizontal =
    // vertical =

    // size = shipName && currentHitsRemaining;
    // direction = horizontal || vertical;
    
    
    // console.log('\n\nSetting playerships')



    // console.log('size',size)
    // console.log('ships on grid: ', player[ships])
}


// let getAllShipsInfo=(property, comparable)=> {
//     console.log('getting info', )
//     const shipList = ships.length;
   
//     for (let ship = 0; ship < shipList; ship++) {
//         if (ships[ship][property] == comparable) {
//             console.log({
//                 "ship name": ships[ship].shipName,
//                 "hits remaining": ships[ship].hitsRemaining
//             })
//             ships[ship].hitsRemaining
//        }
//     }
// }


// for (const [key, value] of ships) {
//     console.log('ship:', key, 'hits remaining:', value)
//     let hit =true
//     if (hit == true) {
//         hitsLeft.value - 1
//         console.log('hits remaining:',value)
//     }
// }

//QUESTIONS
if (ask.keyIn('Press any button to start\n ')){
    console.log('\n\nLet\'s get readdddy to ruummbbbllle \n')
    
} else {
    console.log('Maybe another time');
    ask()
}
createPlayers()
// getPlayers()
createGrid()
checkAllGridsMade()
setShips()

// console.log('PLAYR 1',players[0])
// console.log('PLAYR 2',players[1])
// console.log('grid', grid)
// console.log(coordinates)
// console.log('players', players) 

console.log()