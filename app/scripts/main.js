/*global $ */
(function() {

  'use strict';

  function hideLoader() {
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    $('body').scrollTop(0);
    $('.progress-wrap').addClass('hide');
  }

  function showLoader() {
    $('.progress-wrap').removeClass('hide');
  }

  function sendEmail(nameIn, emailIn, messageIn, callback) {
    $.ajax({
      url: '//formspree.io/leonardopeta@live.co.uk',
      method: 'POST',
      data: {
        name: nameIn,
        email: emailIn,
        message: messageIn
      },
      dataType: 'json'
    })
    .success(function() {
      setTimeout(function() {
        callback();
      }, 500);
    });
  }

  $('#send-email').on('submit', function(e) {
    e.preventDefault();
    // check if everything is fine
    // if it is not fine, then hightlight the items in the page
    // otherwise send the email
    showLoader();
    sendEmail($('#name').val(), $('#email').val(), $('#message').val(), hideLoader);
  });

})();
