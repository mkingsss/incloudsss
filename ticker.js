var speed = 5000;
canTick = true;

$(document).ready(function() {
	$('.ticker-container ul div').each(function(i) {

		
		if (i == 0) {
			$(this).addClass('ticker-active');
		} else {
			$(this).addClass('not-active');
		}

	});
	startTicker();
	animateTickerElementHorz();
});
$(window).resize(function() {
	$('.ticker-container ul div').each(function(i) {
   $('.ticker-container ul div li span').css({'display': 'inline-block'});	
			$(this).css({
				
				'text-align': 'left',
				
			});
			
		
	});
});

function startTicker() {
	$('.ticker-container ul div li span').css({'display': 'inline-block'});	
	setInterval(function() {
		if (canTick) {
			$('.ticker-container ul div.ticker-active')
				.removeClass('ticker-active')
				.addClass('remove');
			if ($('.ticker-container ul div.remove').next().length) {
				$('.ticker-container ul div.remove')
					.next()
					.addClass('next');
			} else {
				$('.ticker-container ul div')
					.first()
					.addClass('next');
			}
			$('.ticker-container ul div.next')
				.removeClass('not-active next')
				.addClass('ticker-active');
			setTimeout(function() {
				$('.ticker-container ul div.remove')
					.css('transition', '0s ease-in-out')
					.removeClass('remove')
					.addClass('not-active finished');
				setTimeout(function() {
					$('.ticker-container ul div')
						.css('transition', '0.25s ease-in-out');
				}, 75);
				animateTickerElementHorz();
			}, 250);
		}
	}, speed);
}

function animateTickerElementHorz() {
	
		if ($('.ticker-container ul div.ticker-active li span').width() > ($(window).width() - parseInt($('.ticker-container ul div.ticker-active').css('left')))) {
			
			setTimeout(function() {
				$('.ticker-container ul div.ticker-active li').animate({
					'margin-left': Math.abs($('.ticker-container ul div.ticker-active li').width() - ($(window).width() - parseInt($('.ticker-container ul div.ticker-active').css('left'))) + 15) * -1
				}, speed - (speed / 5), 'swing', function() {
					setTimeout(function() {
						$('.ticker-container ul div.finished').removeClass('finished').find('li').css('margin-left', 0);
					}, ((speed / 5) / 2)); 
				});
			}, ((speed / 5) / 2));
		}
	
	
}

$('.ticker-container').on('mouseover', function() {
	canTick = false;
});

$('.ticker-container').on('mouseout', function() {
	canTick = true;
});