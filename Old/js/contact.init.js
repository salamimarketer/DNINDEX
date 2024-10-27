// ----- CONTACT ----- //
 
$('#contact-form').submit(function() {
    var action = $(this).attr('action');
var honeypot = $('#honeypot').val(); // Get the honeypot field value

    if (honeypot !== '') {
        // Honeypot field is filled, likely a bot
        return false; // Reject the submission
    }
    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
              
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});