let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'Will i turn into a wizard tonight?';
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;
if(randomNumber === 1){
  console.log('It is certain')
} else if (randomNumber === 2){
  console.log('It is decidedly so')
} else if (randomNumber === 3){
  console.log('Reply hazy try again')
} else if (randomNumber === 4){
  console.log('Do not count on it')
} else if (randomNumber === 5){
  console.log('My sources say so')
} else if (randomNumber === 6){
  console.log('Outlook not so good')
}
 else  {
  console.log('Signs point to yes')
}
console.log(`The Magic Eight Ball's answer is ${eightBall}`)
