$( function() {
	// DraggableDualViewSlideshow Plugin
	var overlay = document.getElementById( 'overlay' ),
		overlayClose = overlay.querySelector( 'button' ),
		header = document.getElementById( 'header' )
		switchBtnn = header.querySelector( 'button.slider-switch' ),
		toggleBtnn = function() {
			if( slideshow.isFullscreen ) {
				classie.add( switchBtnn, 'view-maxi' );
			} else {
				classie.remove( switchBtnn, 'view-maxi' );
			}
		}, toggleCtrls = function() {
			if( !slideshow.isContent ) {
				classie.add( header, 'hide' );
			}
		}, toggleCompleteCtrls = function() {
			if( !slideshow.isContent ) {
				classie.remove( header, 'hide' );
			}
		}, slideshow = new DragSlideshow( document.getElementById( 'slideshow' ), { 
			onToggle : toggleBtnn,								// toggle between fullscreen and minimized slideshow
			onToggleContent : toggleCtrls,						// toggle the main image and the content view
			onToggleContentComplete : toggleCompleteCtrls		// toggle the main image and the content view (triggered after the animation ends)
		}), toggleSlideshow = function() {
			slideshow.toggle();
			toggleBtnn();
		}, closeOverlay = function() {
			classie.add( overlay, 'hide' );
		};
	switchBtnn.addEventListener( 'click', toggleSlideshow );	// toggle between fullscreen and small slideshow
	overlayClose.addEventListener( 'click', closeOverlay );		// close overlay
	// StackSlider Plugin
	$( '#st-stack' ).stackslider();
	// DistortedButtonEffects Plugin
	function getRandom(min, max){
	  return Math.random() * (max - min) + min;
	}
	var isSafari = /constructor/i.test(window.HTMLElement);
	var isFF = !!navigator.userAgent.match(/firefox/i);
	if (isSafari) {
	  document.getElementsByTagName('html')[0].classList.add('safari');
	}
	initBt1();
	function initBt1() {
	  var bt = document.querySelectorAll('#component-1')[0];
	  var turbVal = { val: 0.000001 };
	  var turb = document.querySelectorAll('#filter-glitch-1 feTurbulence')[0];
	  var btTl = new TimelineLite({ 
		paused: true, 
		onStart: function() {
		  bt.style.filter = 'url(#filter-glitch-1)';
		},
		onUpdate: function() {
		  turb.setAttribute('baseFrequency', turbVal.val);
		},
		onComplete: function() {
		  bt.style.filter = 'none';
		} });

	  btTl.to(turbVal, 0.2, { val: 0.04 });
	  btTl.to(turbVal, 0.2, { val: 0.000001 });

	  bt.addEventListener('click', function() {
		btTl.restart();
	  });
	}
	initBt2();
	function initBt2() {
	  var bt = document.querySelectorAll('#component-2')[0];
	  var turbVal = { val: 0.000001 };
	  var turb = document.querySelectorAll('#filter-glitch-2 feTurbulence')[0];
	  var btTl = new TimelineLite({ 
		paused: true, 
		onStart: function() {
		  bt.style.filter = 'url(#filter-glitch-2)';
		},
		onUpdate: function() {
		  turb.setAttribute('baseFrequency', turbVal.val);
		},
		onComplete: function() {
		  bt.style.filter = 'none';
		} });

	  btTl.to(turbVal, 0.2, { val: 0.04 });
	  btTl.to(turbVal, 0.2, { val: 0.000001 });

	  bt.addEventListener('click', function() {
		btTl.restart();
	  });
	}
});