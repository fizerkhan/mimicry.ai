(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    function finishedPlaying() {
        $('.image-button').removeClass('active');
        $('.image-button').find("img").removeClass('animated infinite bounce');
    }

    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#FCCF4D',
        progressColor: '#FF4545',
        height: 180
    });
    wavesurfer.on('ready', function () { wavesurfer.play(); });
    wavesurfer.on('finish', finishedPlaying);
    wavesurfer.on('error', function () {
        alert('Sorry! We could not play the audio :(');
    });

    var audio = document.getElementById('myAudioElement') || new Audio();
    audio.addEventListener('ended', finishedPlaying);

    var $content = $('#content');
    $content.val('Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere!')
    var $speaker = null;
    function textToSpeech(speaker, content) {
        var data = {
            speaker: speaker,
            content: content
        };
        $.ajax({
            url: 'http://api.mimicry.ai/mimic',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            json: true,
            success: function (response) {
                console.log(response);
                if (!response.audio_url) {
                    alert('Sorry! We could not retrieve the audio :(');
                    return;
                }
                wavesurfer.load(response.audio_url);
                // wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

                // audio.src = response.audio_url;
                // audio.play();

                finishedPlaying();
                $speaker.addClass('active');
                $speaker.find("img").addClass('animated infinite bounce');
            }
        });
    }

    $(".image-button").bind("click", function(event) {
        event.preventDefault();
        $speaker = $(this);
        var speaker = $speaker.data('speaker');
        var content = $content.val();
        textToSpeech(speaker, content);
    });

})(jQuery); // End of use strict

