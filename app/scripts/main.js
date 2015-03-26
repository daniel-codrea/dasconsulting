'use strict';

var currentDate = new Date();
$('#currentYear').html((currentDate).getFullYear());

// validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 4
            }
        },
        messages: {
            name: {
                required: 'Va rugam sa va precizati numele complet.',
                minlength: 'Numele dumneavoastra trebuie sa contina cel putin 2 caractere.'
            },
            email: {
                required: 'Va rugam sa folositi o adresa de email valida.'
            },
            message: {
                required: 'Va rugam sa transmiteti un mesaj.',
                minlength: 'Mesajul dumneavoastra trebuie sa contina cel putin 4 caractere'
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:'POST',
                data: $(form).serialize(),
                url:'../send_mail.php',
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});

function changeHomeColImg(index){
  var image = $('.home-col-img-' + index).attr('data-img');
  var hoverImage = $('.home-col-img-' + index).attr('data-img-hover');
	$('.home-col-' + index).on('mouseover', function(){
		$('.home-col-img-' + index).attr('src', hoverImage);
	});
	$('.home-col-' + index).on('mouseout', function(){
		$('.home-col-img-' + index).attr('src', image);
	});
}

changeHomeColImg('1');
changeHomeColImg('2');
changeHomeColImg('3');

$('.navbar-brand').on('mouseover', function(){
		$(this).find('img').attr('src', 'images/logo-hov.svg');
});
$('.navbar-brand').on('mouseout', function(){
  $(this).find('img').attr('src', 'images/logo.svg');
});