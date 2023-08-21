$(document).ready(function () {
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var submitButton = $('.searchbox-submit');
    var box = $('.box');
    var boxOpen = $('.box-open');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            box.addClass('box-open');
            submitButton.css('visibility', 'visible')
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            box.removeClass('box-open');
            inputBox.focusout();
            isOpen = false;
        }
    });

    function buttonUp() {
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        // Warunek!!
        
    }
    inputBox.keyup(buttonUp);
});