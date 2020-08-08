

artistMain();

async function artistMain () {
	// body... 

	//getting the artist post id from url
	var artistId = getId(window.location);

	// getting the artist data from rest api
	var artistData = await idToData('artist',artistId);

	//initializing html with data values
	initHtml(artistData);

	//getting all events data
	var eventData = await fetchPost('event');

	//filtering data for this artist
	var filteredData = getArtistData(eventData,artistId);

	// initializing events for this artist
	eventInit(filteredData);

}



function initHtml (data) {
	// body... 
	
	var main = document.querySelector('.contentBody .gridBox');

	main.querySelector('img').src = data.acf.image;
	main.querySelector('.name').innerHTML = data.title.rendered;
	main.querySelector('.description').innerHTML = data.content.rendered;

}

function getArtistData (data,id) {
	// body...

	var filtered = [];

	for(var i=0;i<data.length;i++){
		if(data[i].acf.artist_name==id)
			filtered.push(data[i]);
	} 

	return filtered;
}


function eventInit (data) {
	// body... 

	var mainDiv = document.querySelector('.contentBody .smallPreviewBoxes');

	for(var i=0;i<data.length;i++)
	{
		createEventBox(data[i],mainDiv);
	}
}


function createEventBox(data,mainDiv){

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
