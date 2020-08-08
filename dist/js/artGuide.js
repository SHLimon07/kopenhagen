
artGuideMain();

async function artGuideMain (argument) {
	// body... 

	//initialing the menu to choose between different options 
	initMenu();

	var artistData = await fetchPost('artist');

	artistInit(artistData);

	var venueData = await fetchPost('venue');

	venueInit(venueData);
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

function initMenu () {
	// body... 
	hideAllContent();
	var menu = document.querySelector('.menuBody .menuItems');
	menu.children[0].classList.add('active');
	document.querySelector('.contentBody .calenderDiv').classList.remove('displayNone');

	
	for(var i=0;i<3;i++)
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
	
	for(var i = 0; i<3; i++)
	{
		contentBody.children[i].classList.add('displayNone');
	}

	var menuBody = document.querySelector('.menuBody .menuItems');
	
	for(var i = 0; i<3; i++)
	{
		menuBody.children[i].classList.remove('active');
	}
}