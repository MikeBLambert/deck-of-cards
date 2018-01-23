//Business Logic
var deck = ["clubs","spades","hearts","diamonds"];
var bigDeck=[];
var biggestDeck=[];
deck.forEach(function(type) {
  bigDeck.push("ace of " + type);
  bigDeck.push("2 of " + type);
  bigDeck.push("3 of " + type);
  bigDeck.push("4 of " + type);
  bigDeck.push("5 of " + type);
  bigDeck.push("6 of " + type);
  bigDeck.push("7 of " + type);
  bigDeck.push("8 of " + type);
  bigDeck.push("9 of " + type);
  bigDeck.push("10 of " + type);
  bigDeck.push("jack of " + type);
  bigDeck.push("queen of " + type);
  bigDeck.push("king of " + type);
});
bigDeck.forEach(function(a) {
  biggestDeck.push("<li>"+a+"</li>")
});
//User Interface
$(document).ready(function() {
  $(".btn").click(function() {
    $(".fullDeck").html(biggestDeck);
  });
});
