$(window).ready(function() {

$('.document').cycle({
fx:'fade',
speed:500,
timeout: 0,
next:   '.next',
prev:   '.pre',

random: 0,

after:     function() {
            $('#alt-caption').html(this.alt);
        }


});
});
