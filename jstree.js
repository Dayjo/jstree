/*-jsTree.js-*/
var tree = new Array;
var object = new Object;
$(function(){

	// Give all child ul elements the same .jstree class
	$('ul.jstree').find('ul')
		.addClass('jstree')
		.parent()
		.prepend("<a class='jstree-expand'>&#43;</a>");

	tree = ul_to_object( $('ul.jstree:first'), "");


	$('ul.jstree').find('.jstree-expand').click(function(){
		var sym = $(this).html();
		console.log(sym);
		$(this).html( (sym == "+" ? "&#45;" : "&#43;") );
		$(this).parent().toggleClass('open');
	});

});
    
function ul_to_object( ul, str ) {

	// Find all first level li elements
	if ( $("> li", ul).length > 0 ) {

		// Add it to the array
		var object = [];
				
		$("> li", ul).each( function() {

			// Get the name of this li
			var name = $('> a', this).text();

			i = object.push({name: name, status: $(this).hasClass('open')});

			if ( $('> ul', this).length > 0 ) {
				object[i-1].children = ul_to_object($('> ul', this), str);
			}

		});

		return object;
	}
	else {
		return Array;
	}
}