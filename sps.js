 var score1 = 0;
    var score2 = 0;
   document.getElementById("score_computer").innerHTML = "Score :"+score2;
   document.getElementById("score_you").innerHTML = "Score :"+score1;
    document.getElementById("win_you").innerHTML = "You";
     document.getElementById("win_computer").innerHTML = "Computer";
     alert("Get 5 points to win the game..! All the best")
function change_image(imageUrl){
    var arr = ['rock.png','paper2.webp','scissors.png','liza.png','Spock3.webp']
    var obj ={
        rock : 'rock.png',
        paper:'paper2.webp',
        scissors : 'scissors.png',
        lizard:'liza.png',
        spock: 'Spock3.webp'
    }
    var image1 = obj[imageUrl];
    var image2 = arr[Math.floor(Math.random()*5)];
    document.getElementById("image_you").src = image1;
    document.getElementById("image_computer").src= image2;
    console.log(image1);
    console.log(image2)
    if((image1 == 'rock.png')&&((image2 == 'paper2.webp')|| (image2 == 'Spock3.webp'))
     ||(image1 == 'paper2.webp')&&((image2 == 'scissors.png')|| (image2 == 'liza.png'))
     ||(image1 == 'scissors.png')&&((image2 == 'Spock3.webp')|| (image2 == 'rock.png'))
     ||(image1 == 'Spock3.webp')&&((image2 == 'paper2.webp')|| (image2 == 'liza.png'))
     ||(image1 == 'liza.png')&&((image2 == 'scissors.png')|| (image2 == 'rock.png'))){
        score2++;
        document.getElementById("win_computer").innerHTML = "Computer Gets the point";
        document.getElementById("win_you").innerHTML = "You lost this round";
        document.getElementById("score_computer").innerHTML = "Score :"+score2;
        if(score2 == 5){
             document.getElementById("win_computer").innerHTML = "Computer Gets the point";
             document.getElementById("win_you").innerHTML = "You lost this round";
             document.getElementById("score_computer").innerHTML = "Score :"+score2;
            alert("Computer won the game");
            refresh();
        }
             }
     else if(image1 === image2){
          document.getElementById("win_computer").innerHTML = "Draw";
          document.getElementById("win_you").innerHTML = "Draw";
     }
     else{
        document.getElementById("win_you").innerHTML = "You got the point";
        score1++;
        document.getElementById("score_you").innerHTML = "Score :"+score1;
        document.getElementById("win_computer").innerHTML = "Computer lost this round";
        if(score1 == 5){
        document.getElementById("score_you").innerHTML = "Score :"+score1;
        document.getElementById("win_computer").innerHTML = "Computer lost this round";
            alert("You won the game");
            refresh()
        }
     }
}
function refresh(){
    score1 = 0;
    score2 = 0;
    document.getElementById("score_computer").innerHTML = "Score :"+score2;
    document.getElementById("score_you").innerHTML = "Score :"+score1;
    document.getElementById("win_you").innerHTML = "You";
    document.getElementById("win_computer").innerHTML = "Computer";
    document.getElementById("image_you").src = 'rps.png';
    document.getElementById("image_computer").src= 'rps.png';
}