$(function() {

  var percentageRange = $('[type="range"]').val();
  
	$('[type="range"]').on('change input', function() {

    percentageRange = $('[type="range"]').val();
    
    $('.percentage').text(percentageRange);
    
    $('[type="range"]').css('filter', 'hue-rotate(-' + percentageRange + 'deg)');
    
  });
  
});
