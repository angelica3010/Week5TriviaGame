//Make title Totally Trivial Trivia
//Make a timer for 120 seconds

//make alerts to test the entire javascript in the beginning. Do this for every assignment to make sure javascript works. At this point in time, it will test
//the entire page

//alert('Test1');

//change the total questions to match later to how many 
//questions are available
var totalquestions =4

var correctchoices=['a', 'c','a','c'];

var correctanswers=0
var incorrectanswers=0
var unanswered=0

function makequestions (){
for (var i =0; i<questions.length; i++){

	$("game").append(questions)

}

//if you have a class id you have  to use a "." in jquery. If you have an id you have to use a hashtag


var q1 = $('#q1').val();
debugger;
alert(q1);


if (correctanswers > incorrectanswers && correctanswers >unanswered) {

	correctanswers =correctanswers+1
	$('#correctanswers').text(correctanswers)

	restart()
}

else if(correctanswers < incorrectanswers && incorrectanswers >unanswered) {

	incorrectanswers =incorrectanswers+1
	$('#incorrectanswers').text(incorrectanswers)

restart()

}


else

unanswered =unanswered+1
	$('#unanswered').text(unanswered)

}


//Make a question: What was the first fill length CGI movie?
//1) A Bug's Life 2) Monster's Inc 3) Toy Story 4) The Lion King



//Make second question Which of These is Not a name of one of 
//spice girls 1)sporty spice 2)fred spice
//3)scaary spice 4) posh spice

//Which NBA team won most of the tiles in the 90s
//1) New York Knicks 2) Portland Trailblazers 
//3)Los Angeles Lakers 4) Chicago Bulls


//Which group released teh hit song, "Smells like Teen Spirit"
//1) Nirvana 2)Backstreet Boys 3)The Offspring 4) No Doubt

//Whcih popular Disney Movie featured the Song "Circle of LIfe"
//1) Aladdin, Hercules, Mulan, The Long King

//Finish this line from Fresh Prince of Bel-Air Theme SOng, I 
//whistled for a cab and when the cab came near, the
//license plate said 1)Dice 2)Mirror 3)Fresh 4)Cab

//What was Doug's Best Friend's name
//1) Skeeter 2) Marc 3) Zach 4) Cody

//What was the name of the principle at Bayside High School

//Afer the time for 30 seconds the timer says All Done!
//correct asnwers, incorrect answers, unanswered

alert('Test');