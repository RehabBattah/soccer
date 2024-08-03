const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
const players1 = game.players[0];
const players2 = game.players[1];
const gk1 = players1[0];
const gk2 = players2[0];
const fieldPlayers1 = players1.slice(1);
const fieldPlayers2 = players2.slice(1);
const allPlayers = players1.concat(players2);
const odd = {
    team1: game.odds.team1,
    draw: game.odds.x,
    team2: game.odds.team2,
};

const printGoals = function (...plys) {
    plys.forEach((onePlyer) => {
        console.log(onePlyer);
    });
    console.log("NO. of Total Goal Scored : " + game.score);
    game.scored.forEach((e, i) => {
        console.log(`Goal ${i + 1} : ${e}`);
    });
    // console.log(`Players Name Passes Goal => ${game.scored.join(' - ')} `);
};
printGoals("Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze");

const winner = function () {
    const winOdd = [odd.team1, odd.team2, odd.draw];
    const min = Math.min(...winOdd);
    const winnerTeam = [game.team1, game.team2, "The Match is a Draw"];

    winOdd.findIndex((e, i) => {
        while (e === min) {
            console.log(`Winner Team : ${winnerTeam[i]}`);
            break;
        }
    });
};
winner();

const averageOdds = function () {
    let sum = 0;
    let averge;
    Object.values(odd).forEach((e, i) => {
        sum += e;
        averge = sum / (i + 1);
    });
    console.log(`Average : ${averge}`);
};
averageOdds();
console.log(`Odd of victory Bayern Munich : ${odd.team1}`);
console.log(`Odd of draw : ${odd.draw}`);
console.log(`Odd of victory Borrussia Dortmund : ${odd.team2}`);

// const scorers = {};
// game.scored.forEach(e => {
//     if (scorers[e]) {
//         scorers[e]++;
//     } else {
//         scorers[e] = 1;
//     }
// });
// console.log(scorers);