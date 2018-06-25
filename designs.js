// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// Your code goes here!
var row;
var column;

//action when submit is clicked
$('#sizePicker').submit(function(){
	event.preventDefault();
	row = $('#inputHeight').val();
	column = $('#inputWeight').val();
	makeGrid(row, column);
});

//function to insert row and column to table
function makeGrid(r,c) {
	$('tr').remove();
	for ( var x=1; x<=r; x++){
		$('#pixelCanvas').append('<tr id=tableRow' + x + '></tr>');
			for ( var y=1; y<=c; y++){
			$('#tableRow' + x).append('<td></td>');
			}
	}
	
//function too add remove color
	$('td').click(function(){
		color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else {
			$(this).attr('style', 'background-color:' + color);
		};
	});
}

