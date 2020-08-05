var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saterday"];
var monthNow;
var yearNow;

calenderMain();

function calenderMain () {
	// body... 
	initMonthYear();
}

function initMonthYear () {
	// body... 
	var date = new Date(Date.now());
	monthNow = date.getMonth();
	yearNow = date.getFullYear();

	updateMonthYear();
}

function updateMonthYear () {
	// body... 

	document.querySelector(".calender .month .monthNum").innerHTML = months[monthNow];
	document.querySelector(".calender .year .yearNum").innerHTML = yearNow;

	updateGrid();
}

function updateGrid () {
	// body... 


	var date = new Date(yearNow + '/' + (monthNow+1) + '/1');

	var grid = document.querySelector('.grid');
	
	for(var j = 1;j<7;j++)
	{
		for(var i=0;i<7;i++)
		{
			grid.children[j].children[i].querySelector('.date').innerHTML = '';
		}
	}

	for(var j = 1;j<7;j++)
	{
		for(var i=0;i<7;i++)
		{
			var day = date.getDay();
			if(day == i)
			{
				if(date.getMonth()!= monthNow)
					return;
				grid.children[j].children[i].querySelector('.date').innerHTML = date.getDate();
				var temp = date.getDate();
				temp++;
				date.setDate(temp);
			}
		}
	}
}

function monthBack () {
	// body... 

	monthNow--;
	if(monthNow==-1)
	{
		monthNow=11;
		yearNow--;
	}

	updateMonthYear();

}

function monthForth () {
	// body... 

	monthNow++;
	if(monthNow==12)
	{
		monthNow=0;
		yearNow++;
	}

	updateMonthYear();

}

function yearBack () {
	// body... 

	yearNow--;
	updateMonthYear();

}

function yearForth () {
	// body... 

	yearNow++;
	updateMonthYear();

}