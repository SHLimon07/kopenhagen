

venueMain();

async function venueMain () {
	// body... 
	//getting the id of the post of the venue from the url
	var venueId = getId(window.location);//the function is defined on main.js

	//fetching the venue data from wp rest api
	var venueData = await idToData('venue',venueId);

	//initialing the inner html values for the perticular venue
	initHtml(venueData);

	//getting all the event data to filter events on this venue
	var eventData = await fetchPost('event');

	//FILTERING THE EVENTS THAT ARE HOLD ON THIS VENUE
	var filteredData = getVenueData(eventData,venueId);

	//INITIALIZING THE EVENTS BOXES ON THIS VENUE
	eventInit(filteredData);

}



function initHtml (data) {
	// body... 
	//initializing the venue data on html
	
	var main = document.querySelector('.contentBody .gridBox');

	main.querySelector('img').src = data.acf.image;
	main.querySelector('.name').innerHTML = data.title.rendered;
	main.querySelector('.address').innerHTML = data.acf.address;
	main.querySelector('.contact').innerHTML = data.content.rendered;

}

function getVenueData (data,id) {
	//this function filters the events that are on this venue
	// body...

	var filtered = [];

	for(var i=0;i<data.length;i++){
		if(data[i].acf.venue==id)
			filtered.push(data[i]);
	} 

	return filtered;
}

function eventInit (data) {
	// body...
	//initialize events on this venue 

	var mainDiv = document.querySelector('.contentBody .smallPreviewBoxes');

	for(var i=0;i<data.length;i++)
	{
		createEventBox(data[i],mainDiv);
	}
}


function createEventBox(data,mainDiv){
	//creates the events box that links to the events post


	var previewBox = document.createElement('div');
	previewBox.classList.add('smallPreview');
	
	var boxLink = document.createElement('a');
	boxLink.href = "event.html?id=" + data.id;
	boxLink.classList.add('link');

	var imageDiv = document.createElement('div');
	imageDiv.classList.add('featureImage');

	var image =  document.createElement('img');
	image.src = data.acf.image;

	var contentDiv = document.createElement('div');
	contentDiv.classList.add('content');

	var title = document.createElement('span');
	title.classList.add('title');
	title.innerHTML = data.title.rendered;

	var timeDiv = document.createElement('div');
	timeDiv.classList.add('time');

	var start = document.createElement('span');
	start.classList.add('start');
	start.innerHTML = data.acf.starting_date;

	var dash = document.createElement('span');
	dash.innerHTML = '-';
	
	var end = document.createElement('span');
	end.classList.add('end');
	end.innerHTML = data.acf.ending_date;

	var shortDes = document.createElement('span');
	shortDes.classList.add('shortDes');
	shortDes.innerHTML = data.content.rendered;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(contentDiv);
	contentDiv.appendChild(title);
	contentDiv.appendChild(timeDiv);
	contentDiv.appendChild(shortDes);
	imageDiv.appendChild(image);
	timeDiv.appendChild(start);
	timeDiv.appendChild(dash);
	timeDiv.appendChild(end);


}
