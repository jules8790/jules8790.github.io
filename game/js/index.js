$(document).ready(function() {
 
  $('#enemy1').hide();
  $('#enemy2').hide();
  $('#enemy3').hide();
  $('#enemy4').hide();
  $('#enemy5').hide();
  $('#enemy6').hide();
  $('#scorebox').hide();
  
  $("#fire").hide();
  $("#fire2").hide();
  $("#fire3").hide();
  $("#fire4").hide();
  $("#fire5").hide();
  $("#fire6").hide();
  

  
//Play button  
$('button').click(function() {
alert("Welcome to clash shot");
alert("YOU HAVE TO CLICK TO SHOOT");
  $('h1').hide();
  $('a').hide();
  $('#royalgiant').hide();
  $('button').hide();
  
   $('#enemy1').show();
  $('#enemy2').show();
  $('#enemy3').show();
  $('#enemy4').show();
  $('#enemy5').show();
  $('#enemy6').show();
  $('#scorebox').show();
});
 
//function to move miner  
 function moveMinerRight(){
        $("#enemy5").animate({left: "+=675"}, 1000,moveMinerLeft)
    }
    
function moveMinerLeft(){
        $("#enemy5").animate({left: "-=675"}, 1000,moveMinerRight)
    }
 moveMinerRight();
  
//function to move skeleton  
  function moveSkeletonRight(){
   $("#enemy4").animate({left: "+=55"}, 2000,moveSkeletonLeft)
    }
    
function moveSkeletonLeft(){
  $("#enemy4").animate({left: "-=55"}, 2000,moveSkeletonRight)
    }
  
  moveSkeletonRight();
  
//Move Prince
  function movePrinceRight(){
   $("#enemy3").animate({left: "+=125"}, 500, movePrinceLeft)
    }
    
function movePrinceLeft(){
  $("#enemy3").animate({left: "-=125"}, 500,movePrinceRight)
    }
  
  movePrinceRight();
});

//MoveLumberjack
function moveLumberJackRight(){
   $("#enemy2").animate({left: "+=125"}, 500, moveLumberJackLeft)
    }
    
function moveLumberJackLeft(){
  $("#enemy2").animate({left: "-=125"}, 500, moveLumberJackRight)
    }
  
  moveLumberJackRight();

//Move Ice Wizard
function moveIceWizardRight(){
   $("#enemy1").animate({left: "+=425"}, 900, moveIceWizardLeft)
    }
    
function moveIceWizardLeft(){
  $("#enemy1").animate({left: "-=425"}, 900, moveIceWizardRight)
    }
  
  moveIceWizardRight();

//Move Barbarians
function moveBarbariansRight(){
   $("#enemy6").animate({left: "+=425"}, 900, moveBarbariansLeft)
    }
    
function moveBarbariansLeft(){
  $("#enemy6").animate({left: "-=425"}, 900, moveBarbariansRight)
    }
  
  moveBarbariansRight();



//Explosions
$('#enemy6').click(function() {
  $("#enemy6").hide();
  $("#fire").show().hide(1000);
  $("#enemy6").show(2000);
});


$('#enemy1').click(function() {
  $("#enemy1").hide();
  $("#fire3").show().hide(1000);
  $("#enemy1").show(2000);
});


$('#enemy2').click(function() {
  $("#enemy2").hide();
  $("#fire4").show().hide(1000);
  $("#enemy2").show(2000);
});


$('#enemy3').click(function() {
  $("#enemy3").hide();
  $("#fire5").show().hide(1000);
  $("#enemy3").show(2000);
});

$('#enemy4').click(function() {
  $("#enemy4").hide();
  $("#fire6").show().hide(1000);
  $("#enemy4").show(2000);
});

$('#enemy5').click(function() {
  $("#enemy5").hide();
  $("#fire2").show().hide(1000);
  $("#enemy5").show(2000);
});

$('#enemy6').click(function() {
  $("#enemy6").hide();
  $("#fire").show().hide(1000);
  $("#enemy6").show(2000);
});