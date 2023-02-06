const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["White", "Black"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 166,
                    points: 22,
                    rebounds: 122,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slam_dunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slam_dunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slam_dunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 1
                },
                "Bismak Biyombo": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slam_dunks: 7
                },
                "DeSagna Diop": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 15
                },
                "Ben Gordon": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slam_dunks: 5
                },
                "Brendan Haywood": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slam_dunks: 1
                },
            }
        },
    }
}

function numPointsScored(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if (property === name) {
                return  obj[property].points
            } else {
                let result = numPointsScored(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function shoeSize(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if (property === name) {
                return  obj[property].shoe
            } else {
                let result = shoeSize(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function teamColors(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if(obj.teamName===name){
                return obj.colors
            } else {
                let result = teamColors(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function teamNames(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if(obj.teamName===name){
                return Object.keys(obj.players)
            } else {
                let result = teamNames(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function playerNumbers(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if(obj.teamName===name){
                const numbers = [];
                for (const playersKey in obj.players) {
                    numbers.push(obj.players[playersKey].number)
                }
                return numbers
            } else {
                let result = playerNumbers(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function playerStats(obj, name) {
    for (let property in obj) {
        if (typeof obj[property] == "object") {
            if(Object.keys(obj).indexOf(name)>-1){
                return obj[name]
            } else {
                let result = playerStats(obj[property], name);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
}

function findLargestShoePlayer(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    let midIndex = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, midIndex);
    let rightArray = arr.slice(midIndex);

    let largestObjectInLeftArray = findLargestShoePlayer(leftArray);
    let largestObjectInRightArray = findLargestShoePlayer(rightArray);

    return largestObjectInLeftArray.shoe > largestObjectInRightArray.shoe
        ? largestObjectInLeftArray
        : largestObjectInRightArray;

}
function bigShoeRebounds(obj) {
    let players = []
    for (let property in obj) {
        for (const player in obj[property].players) {
            players.push(obj[property].players[player])
        }
    }
    return findLargestShoePlayer(players).rebounds
}


const object = gameObject();
console.log(numPointsScored(object, "Alan Anderson"))
console.log(shoeSize(object, "Alan Anderson"))
console.log(teamColors(object, "Brooklyn Nets"))
console.log(teamNames(object, "Brooklyn Nets"))
console.log(playerNumbers(object, "Brooklyn Nets"))
console.log(playerStats(object, "Alan Anderson"))
console.log(bigShoeRebounds(object))
