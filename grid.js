$(document).ready(function() {

	// Declare the Board Algebra
	var etchBoard = function(sz){
			var numRows = sz;
			var numCols = sz;

			// Create the Rows
			for (var i = 0; i < numRows; i++){
					$('.container').append("<div class='row'></div>");

			};

			// Create the Boxes
			var rowHeight = $('.container').height()/numRows;
			var rowWidth = $('.container').width() - parseFloat($('.container').css("padding"));
			$('.row').css('height', rowHeight);
			$('.row').css('width', rowWidth);

			for (var i = 0; i < numCols; i++){
					$('.container').children().append("<div class='square'></div>");

			};

			// Negotiate Boxes to Board
			var boxMargin = $('.square').css('margin');
			var boxPadding = $('.square').css('padding');
			var boxBorder = $('.square').css(('border')+'-width');
			var spacing = 2*(parseInt(boxMargin) + parseInt(boxPadding) + parseInt(boxBorder));
			var boxWidth = rowWidth/numCols - spacing;
			var boxHeight = rowHeight - spacing;
			console.log(boxMargin);

			$('.square').css('width', boxWidth.toString());
			$('.square').css('height', boxHeight.toString());

			// Declare Box Hover Effect
			$('.square').hover(function(){
					$(this).css('background-color', '#000000');
			}, function(){
					$(this).css('background-color', '#000000');
			});
			};
			

	// Create the Board!
	size = 16;
	etchBoard(size);

	// Randomize the Box Colors
	$('#randomize').click(function(){
			function randomColor() {
    				$(".square").hover(function() {
        			color1 = (Math.floor(Math.random() * 256));
        			color2 = (Math.floor(Math.random() * 256));
        			color3 = (Math.floor(Math.random() * 256));
        			$(this).css("background-color","rgb("+ color1 + "," + color2 + "," + color3 + ")") ;
    				});
			};
			
			$('.container').empty();
			size = 16;
			etchBoard(size);
			randomColor();
	
	});
	
	// Resize the Board with Custom Grid
	$('#resize').click(function(){
			haveSize = false;
			while (haveSize === false) {
					oldSize = size;
					size = prompt("Please Choose a New Grid Size from 1 to 64");
					if (size > 0 && size <= 64){
							haveSize = true;
							$('.container').empty();
					} else if (size === null) {
							size = oldSize;
							haveSize = true;
					} else {
							alert("The Number Entered is Not Allowed")
					};
			};
			
			etchBoard(size);
	});
	
	

//Closing Bracket	
});