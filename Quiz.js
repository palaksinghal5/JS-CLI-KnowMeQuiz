var readlineSync = require('readline-sync')
questionnaire = [
{
  question:"Which one do I like more, MCU or DC?",
  answer: "MCU"
},
{
  question:"Favorite Character in MCU?",
  answer: "Captain America"
},
{
  question:"What is my Instagram Username? ",
  answer: "its_romanogers"
},
{
  question:"What is my favorite color? ",
  answer: "Blue"
},
{
  question:"Who is my best friend?",
  answer: "sugam"
},
{
  question:"Where did I complete my B.tech from? ",
  answer: "UPES"
},
{
  question:"What stream did I do my B.Tech in?",
  answer: "Computer Science"
},
{
  question:"What is my Specialisation in Computer Science?",
  answer: "Big Data"
},
{
  question:"In Which year did I completed my B.Tech?",
  answer: "2021"
},
{
  question:"Where did I do my last internship?",
  answer: "rakuten"
}
]

highscore = [
  {
    name:"tony",
    score:10
  },
  {
    name:"natasha",
    score:9
  }
];


function welcome(){
var name = readlineSync.question("Welcome to the Quiz!!, Let's see how well you know about Palak, Please Enter your name to start the Game! ");
console.log("All the Best "+ name +", you're in the game, Have a look at the HighScore Board, it's hard to beat!");
for(var i = 0;i<highscore.length;i++){
    console.log(highscore[i]);
  }
  return name;
}

function game()
{
  var score = 0;
  console.log("Answer the following questions: ")
  for(var i=0;i<questionnaire.length;i++)
  {
    score = play(questionnaire[i].question,questionnaire[i].answer,score);
  }
  return score;

}

function play(question, answer,score){
  if(answer.toUpperCase()==readlineSync.question(question).toUpperCase())
      {
        ++score;
        console.log("Correct!")
      }
    else
      {
        console.log("Psstt!! Wrong Answer")
        console.log("Correct Answer is : " + questionnaire[i].answer);
      }

      console.log("Yout current Score is : "+score);
      return score;
}

function finalscore(score){
  console.log("Your Final Score is -> " + score);
  if(score>highscore[1].score)
  {
    highscore[1].score = score;
    highscore[1].name = name;
    if(readlineSync.question("CONGRATULATIONS!!!!! you have your name on the highscore board.. Wanna Check? ").toUpperCase() == "yes".toUpperCase()){
      for(var i = 0;i<highscore.length;i++){
      console.log(highscore[i]);
    }
  }
  }
  else{
    console.log("Sorry! You couldn't make it up to the score Board, better luck next time!");
  }
}

var name = welcome();
var score = game();
finalscore(score);

