// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
var row;
var column;
//action when submit is clicked
$('#sizePicker').submit(function(event){
	event.preventDefault();
	row = $('#inputHeight').val();
	column = $('#inputWidth').val();
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
	
//function to add remove color
	$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else {
			$(this).attr('style', 'background-color:' + color);
		};
	});
}

