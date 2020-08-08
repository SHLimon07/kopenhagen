var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saterday"];
var monthNow;
var yearNow;
var filteredData;

calenderMain();

function calenderMain () {
	// body... 
	initMonthYear();

	initDates();
}

function initDates () {
	// body... 
	//this function adds event listener to the dates

	var allDate = document.querySelectorAll('.grid .dateRow .col');
	
	var size = allDate.length;

	for(var i=0;i<size;i++)
	{
		allDate[i].addEventListener('click',function(){
			var date = this.querySelector('.date').innerHTML;
			initDateEvents(parseInt(date));
		});
	}
}

function initDateEvents(date){
	//it is called from initDates()

	var mainDiv = document.querySelector('.contentBody .smallPreviewBoxes');
	mainDiv.innerHTML = '';
	for(var i=0;i<filteredData.length;i++)
	{
		var start = filteredData[i].acf.starting_date.split('/');
		var end = filteredData[i].acf.ending_date.split('/');

		if(start[1]==monthNow+1 && start[2]==yearNow){
			if(start[0]==date)
				createEventBox(filteredData[i],mainDiv);
		}
		if(end[1]==monthNow+1 && end[2]==yearNow){
			if(end[0]==date)
				createEventBox(filteredData[i],mainDiv);	
		}

	}
}


function createEventBox(data,mainDiv){
	// this is called from initDateEvents()
	//creates event boxes for the particular data

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

function initMonthYear () {
	// body... 
	//executed when the page is first opend
	//this to present date 
	var date = new Date(Date.now());
	monthNow = date.getMonth();
	yearNow = date.getFullYear();

	updateMonthYear();
}

function updateMonthYear () {
	// body... 
	//whenever the month or year is changed it calls update for everything

	document.querySelector(".calender .month .monthNum").innerHTML = months[monthNow];
	document.querySelector(".calender .year .yearNum").innerHTML = yearNow;

	//updates the calender grid
	updateGrid();
	//updates the events on the calender
	updateEvents();
}

async function updateEvents() {
	// body...

	//clearing the event list div when the calender is changed, to make sure nothing overlaps
	var mainDiv = document.querySelector('.contentBody .smallPreviewBoxes');
	mainDiv.innerHTML = '';

	//fetching and filtering the date according to the calender
	var eventData = await fetchPost('event');
	filteredData = getCalenderEvents(eventData);

	// sending the filtered data to initialize events
	initEvents(filteredData);
}

function initEvents (data) {
	// body... 

	for(var i=0;i<data.length;i++)
	{
		var start = data[i].acf.starting_date.split('/');
		var end = data[i].acf.ending_date.split('/');

		if(start[1]==monthNow+1 && start[2]==yearNow){
			createEventDot(data[i],start[0]);
		}
		if(end[1]==monthNow+1 && end[2]==yearNow){
			createEventDot(data[i],end[0]);	
		}

	}
}
function createEventDot (data,date) {
	// body...
	//this function creates the events lebels/dots on the calender
	date = parseInt(date);

	//since the date divs where given perticular id , 
	//will get the target date to put the event on that
	var target = document.querySelector('.calenderDiv .grid #day'+date);

	//creating the dot
	var dot = document.createElement('span');
	dot.classList.add('eventDot');
	dot.innerHTML = data.title.rendered;

	target.appendChild(dot);
}

function getCalenderEvents (data) {
	// body... 

	var filtered = [];

	for(var i=0;i<data.length;i++)
	{
		var start = data[i].acf.starting_date.split('/');
		var end = data[i].acf.ending_date.split('/');

		if((start[1]==monthNow+1 && start[2]==yearNow) || (end[1]==monthNow+1 && end[2]==yearNow))
		{
			filtered.push(data[i]);
		}

	}

	return filtered;
}

function updateGrid () {
	// body... 


	var date = new Date(yearNow + '/' + (monthNow+1) + '/1');

	var grid = document.querySelector('.grid');
	
	//this portion clears previous data on the calender grid 
	for(var j = 1;j<7;j++)
	{
		for(var i=0;i<7;i++)
		{
			grid.children[j].children[i].querySelector('.date').innerHTML = '';
			grid.children[j].children[i].querySelector('.col').classList.remove('hover');
		}
	}

	//UPDATES THE CALENDER ACCORDING TO CHOICE
	for(var j = 1;j<7;j++)
	{
		for(var i=0;i<7;i++)
		{
			var day = date.getDay();
			if(day == i)
			{
				if(date.getMonth()!= monthNow)
					return;
				var dateNow = date.getDate();
				var dateDiv = grid.children[j].children[i].querySelector('.date');
				grid.children[j].children[i].querySelector('.col').classList.add('hover');
				dateDiv.innerHTML = dateNow;
				dateDiv.id = 'day'+ dateNow;
				dateNow++;
				date.setDate(dateNow);
			}
		}
	}
}

function monthBack () {
	// body... 
	//when the left button for months is clicked

	monthNow--;

	//going to previous year
	if(monthNow==-1)
	{
		monthNow=11;
		yearNow--;
	}

	updateMonthYear();

}

function monthForth () {
	// body... 
	//when the right button for months is clicked

	monthNow++;

	//going to next year
	if(monthNow==12)
	{
		monthNow=0;
		yearNow++;
	}

	updateMonthYear();

}

function yearBack () {
	// body... 
	//when the left button for yearss is clicked

	yearNow--;
	updateMonthYear();

}

function yearForth () {
	// body... 
	//when the right button for yearss is clicked

	yearNow++;
	updateMonthYear();

}