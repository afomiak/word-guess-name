$(document).ready(function(){
    
    var wins = 0;
    var losses = 0;
    var gameNumber = null;
    var userTotal = null;
    var num1 = null;
    var num2 = null;
    var num3 = null;
    var num4 = null;
        
    $("#userWins").text(wins);
    $("#userLosses").text(losses);

    function getRandomStartNumber(){
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }

    function getRandomGemNumber(){
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    function compareNumbers(){
        if( userTotal === gameNumber ){
           winner();
        }
        else if( userTotal > gameNumber ){
            loser();
        }
    }

    function reset(){
        gameNumber = getRandomStartNumber();
        num1 = getRandomGemNumber();
        num2 = getRandomGemNumber();
        num3 = getRandomGemNumber();
        num4 = getRandomGemNumber();
        userTotal = 0;
        $("#userTotal").text(userTotal);
        $("#numberToGet").text(gameNumber);
    }
    
    function winner() {
        alert("You Won!!");
        wins++;
        $("#userWins").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#userLosses").text(losses);
        reset();
    }
    
    $("img").on("click", function() {
        if( $(this).attr('id') === 'image1' ){
            userTotal = userTotal + num1;
            $("#userTotal").text(userTotal);
        }

        if( $(this).attr('id') === 'image2' ){
            userTotal = userTotal + num2;
            $("#userTotal").text(userTotal);
        }

        if( $(this).attr('id') === 'image3' ){
            userTotal = userTotal + num3;
            $("#userTotal").text(userTotal);
        }

        if( $(this).attr('id') === 'image4' ){
            userTotal = userTotal + num4;
            $("#userTotal").text(userTotal);
        }
        
        compareNumbers();
     });

     reset();
    });

