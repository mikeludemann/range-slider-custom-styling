$('#range').on("input", function() {

	$('.output').val(this.value + ",00 €");

}).trigger("change");
