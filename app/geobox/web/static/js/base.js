(function($) {
    // $.extend({
    //     postURL: function(url) {
    //         var form = $("<form>")
    //             .attr("method", "post")
    //             .attr("action", url);
    //         form.appendTo("body");
    //         form.submit();
    //     }
    // });

    $.extend({
        postURL: function(path, params, method) {
            method = method || "post"; // Set method to post by default, if not specified.
            var form = document.createElement("form");
            form.setAttribute("method", method);
            form.setAttribute("action", path);

            for(var key in params) {
                if(params.hasOwnProperty(key)) {
                    var hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", key);
                    hiddenField.setAttribute("value", params[key]);
                    form.appendChild(hiddenField);
                 }
            }
            document.body.appendChild(form);
            form.submit();
        }
    });


    $('.tooltip_element').tooltip({
        delay: { show: 500, hide: 100 },
        placement: 'right'
    });

})(jQuery);
