$(document).ready(function() {
		$('#new-to-do-item').keyup(function(e) {
			if (e.which === 13) {
					var text = $(this).val();
					var listItem = "<li><input type ='checkbox'>" + text + "</li>"
					$('ul').append(listItem);
		}
		});
});