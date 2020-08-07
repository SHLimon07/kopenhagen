

eventMain();

async function eventMain () {
	// body... 

	var eventId = getId(window.location);

	var eventData = await idToData('event',eventId);
	// console.log(eventData);
	var artistData = await idToData('artist',eventData.acf.artist_name);
	var venueData = await idToData('venue',eventData.acf.venue);

	initHtml(eventData,artistData,venueData);

}



function initHtml (eventData,artistData,venueData) {
	// body... 
	
	var main = document.querySelector('.contentBody .gridBox');

	main.querySelector('img').src = eventData.acf.image;
	main.querySelector('.starting .start').innerHTML = eventData.acf.starting_date;
	main.querySelector('.ending .end').innerHTML = eventData.acf.ending_date;

	var artist = main.querySelector('.artist a');
	artist.innerHTML = artistData.title.rendered;
	artist.href = 'artist.html?id='+artistData.id;
	
	var venue = main.querySelector('.venue a');
	venue.innerHTML = venueData.title.rendered;
	venue.href = 'venue.html?id='+venueData.id;
	
	document.querySelector('.description').innerHTML = eventData.content.rendered;

}
