# Navbar.js a tool for making easy dynamic navbars

If you have ever tried to add a navbar to a static site, you'll know the pain of adding a 
new link in _every_ single page which has the navbar. But with a dynamic navbar, all you'll 
have to do when making a new page is simply `{link : 'mypage.html', name : 'Mypage'}`. And 
also easy add the `active` class automatically.

# Intallation
To install run `cd` into a directory and run `git clone https://github.com/programmingvenkat/navbar.js.git`. After that is done move `navbar.js` from `src/` to the place you want it. See examlpes in `example`/.

# Instructions
To use this in any project you like just make a new file `links.js` and make sure you have bootstrap on your site. Now easily just reference `links.js` and `navbar.js` with a `script` tag. All you need is a `<div id="nav-root--js>` so navbar can know where to put the navbar.

# Adding a page
To add a page you can look at the `example/` or, in links.js create an array `var links = [{link : 'index.html', name: 'Home'},{'Forum.html', name : 'Forum'}];.` And thats it. All pages you had the navbar script linked will now get that page.

# Using `active`
To use the bootstrap `active` class just before you import the scripts add a `<script>var thisPage = "Forum";</script>`. Make sure `thisPage` is the same as the name you entered for your page in `links.js` and you're good to go!
