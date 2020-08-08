

eventMain();

async function eventMain () {
	// body... 

	//getting the post id of the event from url
	var eventId = getId(window.location);
	
	//fetching the event data of that id
	var eventData = await idToData('event',eventId);

	//getting the data of id associated with this event
	var artistData = await idToData('artist',eventData.acf.artist_name);
	var venueData = await idToData('venue',eventData.acf.venue);

	//initializing the html values according to the received data
	initHtml(eventData,artistData,venueData);

}



function initHtml (eventData,artistData,venueData) {
	// body... 
	
	var main = document.querySelector('.contentBody .gridBox');

	main.querySelector('img').src = eventData.acf.image;
	main.querySelector('.starting .start').innerHTML = eventData.acf.starting_date;
	main.querySelector('.ending .end').innerHTML = eventData.acf.ending_date;

	//creating a link to the artist page with a search param of the post id
	var artist = main.querySelector('.artist a');
	artist.innerHTML = artistData.title.rendered;
	artist.href = 'artist.html?id='+artistData.id;
	
	//creating a link to the venue page with a search param of the post id
	var venue = main.querySelector('.venue a');
	venue.innerHTML = venueData.title.rendered;
	venue.href = 'venue.html?id='+venueData.id;
	
	document.querySelector('.description').innerHTML = eventData.content.rendered;

}
