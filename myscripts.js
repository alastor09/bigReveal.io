
var currentPosition = 1
var divs = [1, 2, 3, 4, 5]
var last_element = divs[divs.length - 1];
var first_element = divs[0];

function nextButtonClicked() {
	currentPosition = currentPosition + 1

	if(currentPosition === (first_element + 1))
	{
		$("#backButton").removeClass('d-none');
	}
	else if(currentPosition === last_element)
	{
		$("#nextButton").addClass('d-none');
	}
	updateDivAtCurrentPosition(currentPosition)
}

function backButtonClicked() {
	currentPosition = currentPosition - 1

	if(currentPosition === first_element)
	{
		$("#backButton").addClass('d-none');
	}
	else if(currentPosition === (last_element - 1))
	{
		$("#nextButton").removeClass('d-none');
	}
	updateDivAtCurrentPosition(currentPosition)
}


function updateDivAtCurrentPosition(id)
{
	divs.forEach(function(entry) {
		if(entry === id)
		{
			$("#"+entry).removeClass('d-none');
		}
		else
		{
			$("#"+entry).addClass('d-none');
		}
	});
}