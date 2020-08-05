
artGuideMain();

function artGuideMain (argument) {
	// body... 
	initMenu();
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