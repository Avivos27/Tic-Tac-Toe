var player = 'red';
var numOfTurns = 0;
var winner_declared = false;
$(document).ready(function(){
	$('#player_indicator').css({'color': player}); 
	$('#player_indicator').text(player.toUpperCase() + " Player`s Turn");

	$('#board li').click(function(){
		if($(this).hasClass('unchecked') && winner_declared == false){
			$(this).removeClass('unchecked');
			$(this).addClass(player);
			var isWinner = check_board(player);
			declare_winner(isWinner, player);
			numOfTurns++;
			console.log(numOfTurns);
			if(numOfTurns == 9) 
				declare_Tie();
			else{
				if(player == 'red'){
					player = 'green';
				}
				else if(player == 'green'){
					player = 'red';
				}
				if(isWinner == false){
					$('#player_indicator').css({'color': player}); 
					$('#player_indicator').text(player.toUpperCase() + " Player`s Turn");
				}
			}
		}

		else{
			if(winner_declared == false)
				alert("This spot is already checked, choose another!")
		}
	});
});

function check_board(symbol){
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');
	if( spot1.hasClass(symbol) && spot2.hasClass(symbol) && spot3.hasClass(symbol) || // check 3 rows
		spot4.hasClass(symbol) && spot5.hasClass(symbol) && spot6.hasClass(symbol) ||
		spot7.hasClass(symbol) && spot8.hasClass(symbol) && spot9.hasClass(symbol) ||
		spot1.hasClass(symbol) && spot4.hasClass(symbol) && spot7.hasClass(symbol) || //check 3 colms
		spot2.hasClass(symbol) && spot5.hasClass(symbol) && spot8.hasClass(symbol) ||
		spot3.hasClass(symbol) && spot6.hasClass(symbol) && spot9.hasClass(symbol) ||
		spot1.hasClass(symbol) && spot5.hasClass(symbol) && spot9.hasClass(symbol) || //check 2 diagonals
		spot3.hasClass(symbol) && spot5.hasClass(symbol) && spot7.hasClass(symbol))
		 return true;
	else
		return false;
}

function declare_winner(win, player){

	if(win == true){
		$('#player_indicator').css({'color': player}); 
		$('#player_indicator').text("The " + player.toUpperCase() + " Player Wins!");
		winner_declared = true;
	}
}

function declare_Tie(){
	$('#player_indicator').css({'color': 'white'}); 
	$('#player_indicator').text("It`s a Tie!");
	winner_declared = true;
}

function reset(){
	for(var i=1; i<=9; i++){
		$('#spot'+i).removeClass('red').removeClass('green').removeClass('unchecked');
		$('#spot'+i).addClass('unchecked')
	}
	winner_declared = false;
	$('#player_indicator').css({'color': player}); 
	$('#player_indicator').text(player.toUpperCase() + " Player`s Turn");


}