
artGuideMain();

async function artGuideMain (argument) {
	// body... 
	initMenu();

	var name = getName();

	var artistData = await fetchPost('artist?search='+name);

	artistInit(artistData);

	var venueData = await fetchPost('venue?search='+name);

	venueInit(venueData);

	var articleData = await fetchPost('article?search='+name);

	articleInit(articleData);

	var eventData = await fetchPost('event?search='+name);

	eventInit(eventData);
}


function getName () {
    // body... 
    var url = window.location;
    var usp = new URLSearchParams(url.search);

    return usp.get('name').toString();
}


function artistInit (data) {
	// body... 

	var mainDiv = document.querySelector('.artistDiv .smallPreviewBoxes');

	for(var i=0;i<data.length;i++)
	{
		createArtistBox(data[i],mainDiv);
	}
}


function createArtistBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('smallPreview');
	
	var boxLink = document.createElement('a');
	boxLink.href = "artist.html?id=" + data.id;
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

	var shortDes = document.createElement('span');
	shortDes.classList.add('shortDes');
	shortDes.innerHTML = data.content.rendered;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(contentDiv);
	contentDiv.appendChild(title);
	contentDiv.appendChild(shortDes);
	imageDiv.appendChild(image);


}

function venueInit (data) {
	// body... 

	var mainDiv = document.querySelector('.venuesDiv .smallPreviewBoxes');

	for(var i=0;i<data.length;i++)
	{
		createVenueBox(data[i],mainDiv);
	}
}


function createVenueBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('smallPreview');
	
	var boxLink = document.createElement('a');
	boxLink.href = "venue.html?id=" + data.id;
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

	var addressDiv = document.createElement('div');
	addressDiv.classList.add('address');

	var address = document.createElement('span');
	address.innerHTML = data.acf.address;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(contentDiv);
	contentDiv.appendChild(title);
	contentDiv.appendChild(addressDiv);
	imageDiv.appendChild(image);
	addressDiv.appendChild(address);


}

function articleInit (data) {
	// body... 

	var mainDiv = document.querySelector('.articleDiv .smallPreviewBoxes');

	for(var i=0;i<data.length;i++)
	{
		createArtistBox(data[i],mainDiv);
	}
}


function createArticleBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('smallPreview');
	
	var boxLink = document.createElement('a');
	boxLink.href = "article.html?id=" + data.id;
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

	var shortDes = document.createElement('span');
	shortDes.classList.add('shortDes');
	shortDes.innerHTML = data.content.rendered;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(contentDiv);
	contentDiv.appendChild(title);
	contentDiv.appendChild(shortDes);
	imageDiv.appendChild(image);


}

function eventInit (data) {
	// body... 

	var mainDiv = document.querySelector('.eventDiv .smallPreviewBoxes');

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

function initMenu () {
	// body... 
	hideAllContent();
	var menu = document.querySelector('.menuBody .menuItems');
	menu.children[0].classList.add('active');
	document.querySelector('.contentBody .eventDiv').classList.remove('displayNone');

	
	for(var i=0;i<4;i++)
	{
		menu.children[i].addEventListener("click",function(){

			var id = this.id;
			hideAllContent();
			this.classList.add('active');
			var target = document.querySelector('.contentBody .'+id);
			target.classList.remove('displayNone');
		});
	}
}

function hideAllContent () {
	// body... 
	var contentBody = document.querySelector('.contentBody');
	
	for(var i = 0; i<4; i++)
	{
		contentBody.children[i].classList.add('displayNone');
	}

	var menuBody = document.querySelector('.menuBody .menuItems');
	
	for(var i = 0; i<4; i++)
	{
		menuBody.children[i].classList.remove('active');
	}
}