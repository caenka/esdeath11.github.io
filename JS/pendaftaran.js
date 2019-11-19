function pdftran(){
	$(".hasil11").text($('#nama-depan').val());
	$(".hasil12").text($('#nama-belakang').val());
	$(".hasil13").text($('#user-name').val());
	$(".hasil14").text($('#e-mail').val());
	$(".hasil15").text($('#kata-sandi').val());
	$(".hasil16").text($('#konfir-katasandi').val());
	$(".hasil17").text($('#date1').val());
	$(".hasil18").text($("input[name='kel']:checked").val());

	document.querySelector('.modalTampil').style.opacity = '1';
	document.querySelector('.modalTampil').style.zIndex = '99';
	
};

//console.log(nama);
