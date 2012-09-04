# jQuery Tabset

A jQuery plugin that handles tabset functionality.

##Usage

Tabset is dead simple to use. Just initiate the plugin by pointing it to your header and content elements, and you're done!

	$.tabset({
		header: '.tabset > h3',
		content: '.tabset > div'
	});

##Options

###header

The header objects of the tabset. Pass in the indexed header element, or in other words, the least-nested repeated element. You do not need to pass in the clickable element - the plugin will handle all interactions.

In the following example, even though the `<a>` tags are what will be clickable, you would pass in `header: '.tabset h3'`, not `header: 'tabset h3 a'`, since the `<h3>` tags are the least-nested repeated elements.
	
	<div class="tabset">
		<h3><a href="#">Twitter</a></h3>
		<h3><a href="#">Facebook</a></h3>
		<h3><a href="#">Google+</a></h3>

		...

	</div>

In the following example, you would pass in `header: '.tabset .headers li'`, because again, the `<li>` tags are the least-nested repeated elements.
	
	<div class="tabset">
		<ul class="headers">
			<li><a href="#">Twitter</a></li>
			<li><a href="#">Facebook</a></li>
			<li><a href="#">Google+</a></li>
		</ul>

		...

	</div>

In the following example, the `<a>` tags are both the indexed header elements and the clickable elements, so you would pass in `header: .tabset .headers a`.
	
	<div class="tabset">
		<p class="headers"><a href="#">Twitter</a> | <a href="#">Facebook</a> | <a href="#">Google+</a></p>

		...

	</div>

*Default:* `.tabset > h3`

###content

The repeated content objects of the tabset.

In the following example, you would pass in `header: .tabset > div`.
	
	<div class="tabset">
		<ul class="headers">
			<li><a href="#">Twitter</a></li>
			<li><a href="#">Facebook</a></li>
			<li><a href="#">Google+</a></li>
		</ul>

		<div class="tab-twitter">
			// Twitter Data
		</div>

		<div class="tab-facebook">
			// Facebook Data
		</div>

		<div class="tab-google">
			// Google+ Data
		</div>
	</div>

*Default:* `.tabset > div`

###activeIndex

The index at which the tabset should start. Integer value.

*Default:* `0`

###activeClass

The name of the class that will be added to the active header and content element of the tabset.

*Default:* `tabset-active`

###before

A function to run before a tab change occurs.

*Default:* `function(){ }`

###after

A function to run after a tab change occurs.

*Default:* `function(){ }`