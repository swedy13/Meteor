if (Meteor.isClient) {

	Template.footer.onRendered(function() {

		// Put sidebar button ids into an array
		var ids = [];
		$('#sb').children().each(function() {
			var id = $(this).prop('id');
			ids.push(id);
		});

		// Find any items with an active class
		var isActive = [];
		$('#sb > a').each(function() {
			if ($(this).hasClass('active')) {
				console.log(true);
				return true;
			} else {
				console.log('false');
				return false;
			}
		});
		console.log(isActive);

		// Get active sidebar button id
		$('#sb > a').click(function() {
			var active = $(this).hasClass('active');
			/* console.log(active); */
			var button = $(this).prop('id');
			/* console.log(button); */
			
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				var id = $(this).prop('id');
				/* console.log(id); */
			}

			/* Get they array value from:
				 1. Button;
				 2. Active;

				 If they match
				 - button = sub(0);
				 - active = sub(0);
				 - sum --> = button 
				 Close sidebar and remove active

				 If they dont match
				 - button = sub(0);
				 - active = hud(2);
				 - sum --> > button
				 Leave sidebar open and move active to button

				 If there is a NaN
				 - button = sub(0);
				 - active = -1;
				 - sum --> < button 
				 Close sidebar */

				/* if ($.inArray(button, ids) !== 0) {
					 console.log('open');
					 } else {
					 console.log('closed');
					 } */
				
				/* if ($('#sb-panel').hasClass('thin')) {
					$('#sb-panel').addClass('wide');
					$('#sb-panel').removeClass('thin');
				} else {
					$('#sb-panel').addClass('thin');
					$('#sb-panel').removeClass('wide');
				} */
		});		
	});
}
