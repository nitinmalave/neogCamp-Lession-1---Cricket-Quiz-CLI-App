var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

const correctAnswer = chalk.keyword('green');;
const wrongAnswer = chalk.keyword('red');
const message = chalk.keyword('orange');

var score = 0;

var leaderBoard = [{
  player: 'Rahul',
  score: '8.7'
},
{
  player: 'Akshay',
  score: '7.4'
},
{
  player: 'Sachin',
  score: '6.1'
}]

getCurrentHighestScore();

var questions = [{
  question: `Which indian batsman scored fastest 100 against Australia?

  a. Rohit Sharma
  b. Sachin Tendulkar, 
  c. Virat Kohli, 
  d. MS. Dhoni \n`,
  correctOption: 'c'
},
{
  question: `In which year was cricket included as part of the Olympic Games?

  a. 1896
  b. 1900
  c. 1908
  d. 1924 \n`,
  correctOption: 'b'
},
{
  question: `Which national team are called "Baggy Greens"?

 a. New Zealand
 b. Australia
 c. England
 d. South Africa \n`,
  correctOption: 'b'
},
{
  question: `Who was dismissed for 299 in a match against Sri Lanka in 1991?

  a. Kapil Dev
  b. Robin Smith
  c. Martin Crowe
  d. Allan Border \n`,
  correctOption: 'c'
},
{
  question: `Which two countries shared the ICC Champions Trophy in 2002?

  a .India and Pakistan
  b. Australia & England
  c. India and Sri Lanka
  d. Australia and Pakistan \n`,
  correctOption: 'c'
},
{
  question: `In which of these countries is the Bellerive Oval located?

 a. Australia
 b. New Zealand
 c. England
 d. South Africa \n`,
  correctOption: 'a'
},
{
  question: `Which of these players made his Test debut at the age of 49 years 119 days, setting a record for the oldest ever Test debutant?

  a. Fred Spofforth
  b. James Southerton
  c. Wilfred Rhodes
  d. Frank Woolley \n`,
  correctOption: 'b'
},
{
  question: `Apart from M.L. Jaisimha, who was the next Indian to have batted on all 5 days of a Test match?

  a. Sunil Gavaskar 
  b. Ravi Shastri
  c. Sanjay Manjrekar
  d. Vinoo Mankad \n`,
  correctOption: 'b'
},
{
  question: `What is the name given to the biennial international Test cricket series played between England and Australia?

  a. The Trans-Tasman Trophy
  b. The Sheffield Shield
  c. The Cricket World Cup
  d. The Ashes \n`,
  correctOption: 'b'
},
{
  question: `Which player represented New Zealand in Test cricket, international football, and Australia in international football?

  a. Johnny Briggs
  b. Robert Cunis
  c. Khan Mohammad
  d. Ken Hough \n`,
  correctOption: 'd'
}
];

// input = readLineSync.prompt([options])

var userName = readLineSync.question('May I have your name? ');
log(chalk`\n {bold Hi {bgBlue ${userName}}👋 , Welcome to {bgBlue Cricket Quiz App}!}\n`);

var userResponse = readLineSync.question('Would you like to play and know how much do you know about the cricket? (Y/N) : ');

if(userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'y' ){
  log(chalk.hex('#DEADED').bold(`Cool!! \n`));
  log(chalk.bgYellow.bold('🛈 Rules of Game 🛈 '));
  log(message(`⭐  The game is simple, we will ask you 10 quesstions around the past cricket matches & events. \n⭐  Each question will have 4 options and you have to select only 1 option out of 4 as your response. \n⭐  Press 'e' to exit the game. \n⭐  Each correct question have 1 mark and wrong answer will cost 0.3 mark as penalty from your current score.\n \n Hope you would make it to the leaderboard table with your magnificent cricket knowledge. \n Enjoy the quiz. Good Luck 👍 !! \n`));

displayLeaderBoard();

var userResponse = readLineSync.question(`\nWould you like to continue?\n`);
if(userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'y' ){
  play();
}
displayFinalScore();
}


function play(){
  for(let i = 0; i < questions.length; i++){
    var question = questions[i];
    questionNumber = i + 1;
    var isBreak = isCorrectOption(questionNumber, question.question, question.correctOption);
    if(isBreak){
      break;
    }
  }
}

function isCorrectOption(number, question, expectedAnswer){
  var answer = readLineSync.question(chalk`\n{cyanBright.bold [${number}] ${question}}`);
  log(chalk.hex('#DEADED').bold`Your answer is {green.underline ${answer}}`);
  if(answer.toLowerCase() === 'e'){
    return true;
  }
  if(answer.toLowerCase() === expectedAnswer.toLowerCase()){
    log(correctAnswer("✅  Correct Answer!!"));
    score = score + 1;
  }
  else{
    console.log(chalk`{bold ${wrongAnswer( "❌  Oops, Wrong Answer!!")}}`);
    console.log(correctAnswer(`Correct Answer is ${expectedAnswer}`));
    score = score - 0.3;

  }
  log(chalk`{bold ${message("Your Score is: ", score)}}`);
  log(chalk.keyword('orange')`-----------------------------------------\n`);
  return false;
}

function displayFinalScore(){
  log(chalk`{bgRgb(255, 255, 0).black.bold Your Final Score is : ${score}}`);
  var [currentHighest, currentBottom] = getCurrentHighestScore();
  if(score > currentHighest){
    log(chalk.bgRgb(255,255,0).black.bold("Congratulations 🎉! You have beaten the highest score ✌!\n")+chalk.bold("Please send your screenshot to nitinmalave14@gmail.com to update the leaderboard.\n"));
  }
  else if(score > currentBottom){
    log(chalk.bgRgb(255,255,0).black.bold("Congratulations 🎉! You have made it to top 3 in leaderboard ✌!\n")+chalk.bold("Please send your screenshot to nitinmalave14@gmail.com to update the leaderboard.\n"));
  }
  log(chalk`{bgRgb(255, 255, 0).black.bold Thank you for participating!} 😀`);
}

function displayLeaderBoard(){
  // log(chalk.bgRgb(255, 255, 0).black.bold("LeaderBoard:"));
  log(chalk.bgYellow("🏆  LeaderBoard 🏆 "))
  for(let k =0; k < leaderBoard.length; k++){
  log(chalk.keyword('orange')`{bold [${k + 1}] ${leaderBoard[k].player} : ${leaderBoard[k].score}}`)
}
}

function getCurrentHighestScore(){
  var currentHighest;
  var leaderBoardBottom;
  leaderBoard.sort((p1,p2)=> (+p1.score < +p2.score) ? 1 : -1 );
  currentHighest = +leaderBoard[0].score;
  leaderBoardBottom = +leaderBoard[leaderBoard.length - 1].score;
  return [currentHighest, leaderBoardBottom];
}