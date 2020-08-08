
homeMain();

async function homeMain(){

	//geting recent article and event data
	var articleData = await fetchPost('article');
	var eventData = await fetchPost('event');

	//initializing the articles and events on the page
	articleInit(articleData);

	eventInit(eventData);

}

function articleInit (data) {
	// body... 

	var mainDiv = document.querySelector('#article .previewBoxes');

	var max = 3>data.length?data.length:3;

	for(var i=0;i<max;i++)
	{
		createArticleBox(data[i],mainDiv);
	}

	var moreBtn = document.createElement('a');
	moreBtn.classList.add('moreButton');
	moreBtn.href = "allArticle.html";
	moreBtn.innerHTML = "More...";

	mainDiv.appendChild(moreBtn);
}

function createArticleBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('previewBox');
	
	var boxLink = document.createElement('a');
	boxLink.href = "article.html?id=" + data.id;
	boxLink.classList.add('link');

	var imageDiv = document.createElement('div');
	imageDiv.classList.add('featureImage');

	var image =  document.createElement('img');
	image.src = data.acf.image;

	var title = document.createElement('span');
	title.classList.add('title');
	title.innerHTML = data.title.rendered;

	var timeDiv = document.createElement('div');
	timeDiv.classList.add('time');

	var time = document.createElement('span');
	time.classList.add('posted');
	time.innerHTML = data.acf.date;

	var shortDes = document.createElement('span');
	shortDes.classList.add('shortDes');
	shortDes.innerHTML = data.content.rendered;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(title);
	boxLink.appendChild(timeDiv);
	boxLink.appendChild(shortDes);
	imageDiv.appendChild(image);
	timeDiv.appendChild(time);


}

function eventInit (data) {
	// body... 

	var mainDiv = document.querySelector('#event .previewBoxes');

	var max = 3>data.length?data.length:3;

	for(var i=0;i<max;i++)
	{
		createEventBox(data[i],mainDiv);
	}

	var moreBtn = document.createElement('a');
	moreBtn.classList.add('moreButton');
	moreBtn.href = "artGuide.html";
	moreBtn.innerHTML = "More...";

	mainDiv.appendChild(moreBtn);
}

function createEventBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('previewBox');
	
	var boxLink = document.createElement('a');
	boxLink.href = "event.html?id=" + data.id;
	boxLink.classList.add('link');

	var imageDiv = document.createElement('div');
	imageDiv.classList.add('featureImage');

	var image =  document.createElement('img');
	image.src = data.acf.image;

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
	boxLink.appendChild(title);
	boxLink.appendChild(timeDiv);
	boxLink.appendChild(shortDes);
	imageDiv.appendChild(image);
	timeDiv.appendChild(start);
	timeDiv.appendChild(dash);
	timeDiv.appendChild(end);


}