$(document).ready(function(){
    elem = $(".elem");
    elem.mouseup(function(event) {
        if ($(this).children("input").length == 0) {
            var old = $(this).html();
            $(this).empty();
            var input = $('<input type=text>');
            input.val(old);
            $(this).append(input);      
            input.select();
            input.blur(function() {
                var value = $(this).val();
                if (value !== "") {
                    $(this).parent().html($(this).val());
                } else {
                    $(this).parent().html("Text");
                }
            });
        }
    });
});