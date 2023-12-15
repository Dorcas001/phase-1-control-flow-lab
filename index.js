function scuberGreetingForFeet(distance){
  // Write your code here!
  let ride;
  
    if(distance <= 400 ){
      ride = 'This one is on me!';
    } else if(distance > 2000 && distance < 2500){
      ride ="I will gladly take your thirty bucks.";
    } else {
      ride = 'No can do.';
    }
    return ride;

  }
  scuberGreetingForFeet(199)
  scuberGreetingForFeet(2001)

function ternaryCheckCity(city){
  // Write your code here!
  
  let country = city == 'NYC'? 'Ok, sounds good.': "No go."
  return country;

};

function switchOnCharmFromTip(tip){
switch(tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return 'Bye.';
    break;
}
}
