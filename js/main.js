function set_simple() {
	if ($.cookie('is_sample')) {
		$.removeCookie('is_sample');
		$('.simple_switch').html('<i class="fa fa-toggle-off"></i>无图版本');
	} else {
		$.cookie('is_sample', true, { expires: 365 });
		$('.simple_switch').html('<i class="fa fa-toggle-on"></i>有图版本');
	}
	$('.block').toggle();
}
if ($.cookie('is_sample')) {
	$('.simple_switch').html('<i class="fa fa-toggle-on"></i>有图版本');
	$('.block').hide();
} else {
	$('.simple_switch').html('<i class="fa fa-toggle-off"></i>无图版本');
	$('.block').show();
}