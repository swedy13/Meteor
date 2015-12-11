// Client
if (Meteor.isClient) {

	Template.content.onRendered(function() {
		$('#sub-wgt').hover(
			function() {
				// Show input display / remove title
				if ($('#sub-editor-exp-container').hasClass('hide')) {
					$('#sub-editor-def').removeClass('hide');
					$(this).find('h1.wgt-title').text('|').css({'color':'transparent', 'display':'none'});					
				}
				// Highlight main icon
				$(this).find('.main.subs.icon').addClass('blue').removeClass('grey');
			},
			function() {
				// Hide input display / show title 
				$(this).find('h1.wgt-title').text('Subscriptions').css({'color':'#aaa', 'display':'inline-block'});
				$('#sub-editor-def').addClass('hide');
				// Remove highlight from main icon
				$(this).find('.main.subs.icon').addClass('grey').removeClass('blue');
			});

		// Auto-resize text area
		$('#sub-editor-exp').autosize();
		
		// Toggle between default editor and expanded editor
		$('#sub-editor-def').click(function() {
			// Toggle to expanded editor
			$(this).css('visibility', 'hidden');
			$('#sub-editor-exp-container').removeClass('hide');
			$('#sub-editor-exp').focus();
		});

		function expEditor() {
			$('#facebook').click(function() {
				$(this).toggleClass('facebook');
			});
			$('#twitter').click(function() {
				$(this).toggleClass('twitter');
			});
			$('#linkedin').click(function() {
				$(this).toggleClass('linkedin');
			});
			$('#google').click(function() {
				$(this).toggleClass('google plus');
			});	
		}
		expEditor();
		
		/* $('#sub-editor-exp-container').focusout(function() {
			 if ($('#sub-editor-exp').val() === '') {
			 // Toggle back to default editor if no text has been entered
			 $('#sub-editor-exp-container').addClass('hide');
			 $('#sub-editor-def').css('visibility', 'visible');
			 }
			 }); */
	});
}

// If there is a partial post, confirm before leaving page
/* if ($('#sub-editor-exp').val() === "") {
	 $('#sub-editor-exp-container').addClass('hide');
	 $('#sub-editor-def-container').removeClass('hide');				
	 } else {
	 if (confirm('You haven\'t finished your post yet. Are you sure you want to leave?')) {
	 $(this).addClass('hide');
	 $(this).prev().removeClass('hide');									
	 } else {	 
	 }
	 } */



// Server
if (Meteor.isServer) {
	Meteor.startup(function () {
	});
}


/* 
	 // Helpers
	 Template.tweetBox.helpers({
	 charCount: function() {
	 return 140 - Session.get('numChars');
	 },

	 charClass: function() {
	 if (Session.get('numChars') > 140) {
	 return 'errCharCount';
	 } else {
	 return 'charCount';
	 }
	 },

	 disableButton: function() {
	 if (Session.get('numChars') <= 0 ||
	 Session.get('numChars') > 140) {
	 return 'disabled';
	 }
	 }
	 });

	 // Events
	 Template.tweetBox.events({
	 'input #tweetText': function(){
	 Session.set('numChars', $('#tweetText').val().length);
	 },

	 'click button': function() {
	 var tweet = $('#tweetText').val();
	 $('#tweetText').val("");
	 Session.set('numChars', 0);
	 Tweets.insert({message: tweet});
	 }
	 });

	 // Rendering
	 Template.tweetBox.onRendered(function () {
	 Session.set('numChars', 0);
	 });
	 } */
