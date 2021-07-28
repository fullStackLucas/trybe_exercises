let chess = "Batata"

if (chess.toLowerCase() === "pawn") {
    console.log ("one step forward");
} else if (chess.toLowerCase() === "knight") {
    console.log ("two steps in a straight line, then one step to the side of your choice");
} else if (chess.toLowerCase() === "bishop") {
    console.log ("diagonal movements as much as you can");
} else if (chess.toLowerCase() === "tower") {
    console.log ("can go forward in a straight line as much as you can");
} else if (chess.toLowerCase() === "queen") {
    console.log ("she can move like bishop and tower at the same time");
} else if (chess.toLowerCase() === "king") {
    console.log ("can move one step only, for every single spot on the table");
} else {
    console.log ("This isn't a chess piece, genius!")
};
