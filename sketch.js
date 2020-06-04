var button , greeting;

function setup(){
  
  var canvas = createCanvas(750,600);

  // The First Coloumn

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 160 ) ;
  button . mouseClicked ( vote1 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 190 ) ;
  button . mouseClicked ( vote1 ) ;

  greeting = createElement ( "h3" ) ;
  greeting . html ( " 1) did you enjoy spending time with your family during the lockdown?" ) ;
  greeting . position ( 330 , 100 ) ;


  // The Second Coloumn

  button = createButton( "Good" ) ;
  button . position ( 550 , 300 ) ;
  button . mouseClicked ( vote2 ) ;
  button = createButton ( "Bad" ) ;
  button . position ( 550 , 330 ) ;
  button . mouseClicked ( vote2 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 2) do you try and avoid going outside as much as posible?" )  ;
  greeting . position ( 330 , 250 ) ;


  // The Third Coloumn

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 460 ) ;
  button . mouseClicked ( vote3 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 490 ) ;
  button . mouseClicked ( vote3 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 3) Have you used your time productively and effectively ?" ) ;
  greeting . position ( 330 , 400 ) ;
  input = createInput ( "Name" ) ;
  input . position ( 650 , 50 ) ;
  
}


function draw () {
  background ( "#17F9E1" ) ;
}

 
function vote1(){
  greeting = createElement( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 165 ) ;
}

function vote2 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 320 ) ;
}

function vote3 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 500 ) ;
  
  button1 = createButton ( "Submit" ) ;
  button1 . position ( 800 , 600 ) ;
  button1 . mouseClicked ( vote3 ) ;
  button1 . mousePressed (()=>{
    update();
  }) ;

  greeting = createElement ( "h2" ) ;
  greeting . html ( "Your votes have been submitted!!!  Thank You For Voting!!!" ) ;
  greeting . position ( 400 , 640 ) ;


}
function update (){
  
}