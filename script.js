// questions array
var questions = [
  {
    prompt: "What color are apples?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    answer: "a"
  },
  {
    prompt: "What color are bananas?\n(a) Yellow\n\
    (b) Purple\n(c) Orange",
    answer: "a"
  },
  {
    prompt: "What color are Oranges?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    answer: "c"
  },
  {
    prompt: "What color are eggplants?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    answer: "b"
  },
  {
    prompt: "What color are carrots?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    answer: "c"
  },
  {
    prompt: "What color are tomatoes?\n(a) Red\n\
    (b) Purple\n(c) Orange",
    answer: "a"
  },
]
//score
var score =0;

//for loop
for(var i=0; i < questions.length; i ++) {
  var response = window.prompt (questions [i].prompt);
if (response == questions[i].answer){
  score ++;
  alert("Correct!");
  } else {
    alert("WRONG!");
  }
}
alert("you got" + score + "/" + questions.length);