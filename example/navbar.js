//trolololo

function navBarRoute(home){
	//create all elements
	var nav_bar_root = document.getElementById('navbar-root-js'); //get root div

	var main_nav_bar = document.createElement("nav"); //main <nav>
	var nav_bar_container = document.createElement("div"); //<div class='container'>
	var nav_bar_header = document.createElement("div"); //<div class='navbar-header'>
	var nav_bar_toggle = document.createElement("button"); //<button class='navbar-toggle'>
	var nav_bar_brand = document.createElement("a"); //<a class='navbar-brand'>
	var nav_bar_collapse = document.createElement("div"); //<div class='navbar-collapse'>
	var nav_bar_list = document.createElement("ul"); //<ul class='nav'>
	//set classes
	main_nav_bar.className = "navbar navbar-inverse";
	main_nav_bar.role = "navigation";

	nav_bar_container.className = "container";

	nav_bar_header.className = "navbar-header";

	nav_bar_toggle.className = "navbar-toggle";
	nav_bar_toggle.type = "button";
	nav_bar_toggle.dataToggle = "collapse";
	nav_bar_toggle.dataCollapse = "#myToggleTarget";
	var iconBar = document.createElement("span");
	var srOnly = document.createElement("span");
	iconBar.className = "icon-bar";
	srOnly.className = "sr-only";

	nav_bar_brand.className = "navbar-brand";
	nav_bar_brand.href = home;

	nav_bar_collapse.className = "collapse navbar-collapse";

	nav_bar_list.className = "nav navbar-nav";
	nav_bar_list.id = "nav-js-list";

	//append corresponding children
	nav_bar_root.appendChild(main_nav_bar);
	main_nav_bar.appendChild(nav_bar_container);
	nav_bar_container.appendChild(nav_bar_header);
	nav_bar_container.appendChild(nav_bar_collapse);
	nav_bar_header.appendChild(nav_bar_toggle);
	nav_bar_toggle.appendChild(srOnly);
	nav_bar_toggle.appendChild(iconBar);
	nav_bar_toggle.appendChild(iconBar);
	nav_bar_toggle.appendChild(iconBar);

	nav_bar_header.appendChild(nav_bar_brand);
	nav_bar_collapse.appendChild(nav_bar_list);

	nav_bar_root.appendChild(main_nav_bar);

}
//end make navbar function
function appendNavList(link, name){
	var newLink = document.createElement("li");
	var newAnchor = document.createElement("a");
	if (thisPage === name){
		newLink.className += " active";
		newAnchor.href = '#';
	}
	newAnchor.href = link;
	
	var linkName = document.createTextNode(name);
	newLink.appendChild(newAnchor);
	newAnchor.appendChild(linkName);

	document.getElementById('nav-js-list').appendChild(newLink);
}

navBarRoute(homePage);
for (var i = 0; i < links.length; i++) {
	appendNavList(links[i].link, links[i].name);
}