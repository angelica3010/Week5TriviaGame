//strings are text
//to convert a number to a string put this in ""
//numbers are numbers
//object is when you want to store a value. Within an array you can have objects. Ex: Pasta (array),teh objects would be spaghetti, lasagana, rotini
//object is a very specfiic array wheere you have certain properties. Ex: car color and car model and you have mutliple values in the array
//There are no objects in this app.js
//array you want to store multiple values. Ararys is used to group values together
//if you use a variable multiple times, you can refer it by its name you dont have to type var correctchoices
//when you make a function when you realize that you have to use the same code mutliple times (ex: you use getusersanswers multiple times
//when you make a variable you have one value that may/may not change
//if statements compares stuff
//for is a loop. You make a loop when you neeed to go through a list of things (either oarary or an object)
//alert is a dialog that appears on your page
//function is for consotant code
//for loop is whne you want to go thorugh an array or an object


//Make title Totally Trivial Trivia
//Make a timer for 120 seconds

//make alerts to test the entire javascript in the beginning. Do this for every assignment to make sure javascript works. At this point in time, it will test
//the entire page

//alert('Test1');

//change the total questions to match later to how many 
//questions are available

//1) varaible 2) array-list of variables 3) object - list of very specific varaibles (ex: in a car you are looking at hte differnet properties, sucha
//as the model, color of hte cars, waht year it was made
//string is a type of variable)


//array with the correct answers
var correctchoices=['a', 'c','c','d'];


//when the html is done loading then you can run this code (which is row 19)
$(document).ready(function(){

//this is timer counting down to 20 seconds for you to finish the quiz
	setInterval(function(){ alert('Time is up! 20 seconds have passed! Click OK to see your results'); getUserAnswers(); }, 20000);

	});

//this is when you click the start or submit button it will run the row 29 getuseranswers function, which is comparing your answers to the correct answers
$(document).on('click', '#start', function(e) {

	getUserAnswers();

	});

//this is telling hte computer to find hte radio buttons (which are hte circles) and to store the user's selection in a variable
function getUserAnswers (){
  	//Get the first choice from the user
    //length means how long the value is in the variable. Checked is telling the comptuer to see if a box is checked or not
    //for length the computer is smart enough to see how long an array or questions are 
    //selected.val will store hte value the person clicked on for the quiz
    var selected = $("input[type='radio'][name='q1']:checked");
    if (selected.length > 0) {
        var selectedradio1 = selected.val();

    }
	 
	 //Get the 2nd choice from the user
    selected = $("input[type='radio'][name='q2']:checked");
    if (selected.length > 0) {
        var selectedradio2 = selected.val();

    }

    //Get the 3rd choice from the user
    selected = $("input[type='radio'][name='q3']:checked");
    if (selected.length > 0) {
        var selectedradio3 = selected.val();

    }

    //Get the 4th choice from the user
    selected = $("input[type='radio'][name='q4']:checked");
    if (selected.length > 0) {
        var selectedradio4 = selected.val();

    }

    //these are the user choices in an array
    var userSelected = [selectedradio1, selectedradio2, selectedradio3, selectedradio4];

    		//Stores the number of correct vs incorrect answers
    		var correct = 0;
    		var incorrect = 0;

//storeresponses stores all the results

//"" means it will inititalize this as an empty string
    		var storeResponses = "";
    //In this loop we compare the 2 arrays: the user's choices verses the real answers. 
    //++ signs means it adds 1 to the variable (for example, if you got this incorrect or correct)
    // \n means new line so whne you submit it compares each indidivdula question on a separate line
    //+= means store hte last value and add to ti
    //you make this for loop to save time becuase this goes through multiple times to store the values for the correct answers vs incorrect answer
    //if you had one qustions you could have made a variable to compare but since you have to multiple values you have to make a for function
    //to chekcing the ongoing correct answers vs incorrect answers
    for (var i=0; i<userSelected.length; i++){


    		if(correctchoices[i] == userSelected[i])
    		{	
    			storeResponses += 'You got number '+(i+1)+' correct!\n';
    			correct++;
    		}
    		else
    		{
    			storeResponses +='You got number '+(i+1)+' incorrect. The answer is '+correctchoices[i]+'\n';
    			incorrect++;
    		}
    		 
    }

    alert(storeResponses+'\nYou got '+ correct+' correct and '+incorrect+' incorrect.\n\nThe test will restart after you press OK.');

//this tells the computer to refresh the page
    location.reload();

} 
         

