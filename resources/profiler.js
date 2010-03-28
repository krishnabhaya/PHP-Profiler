(function($) {
    var profiler_details = false;

    function hideAllTabs() {
        $('#profiler').removeClass('console')
                 .removeClass('speed')
                 .removeClass('queries')
                 .removeClass('memory')
                 .removeClass('files');
    }

    $(document).ready(function() {
        setTimeout(function() { $('#profiler-container').css('display', 'block') }, 10);

        $('.query-profile H4').css('cursor', 'pointer').click(function() {
            if ($('table', $(this).parent()).is(':hidden')) {
                $(this).html('&#187; Hide Query Profile');
                $('table', $(this).parent()).css('display', 'block');
            } else {
                $(this).html('&#187; Show Query Profile');
                $('table', $(this).parent()).css('display', 'none');
            }
        });

        $('.detailsToggle').click(function() {
            if (profiler_details) {
                $('#profiler-container').addClass('hideDetails');
                profiler_details = false;
            } else {
                $('#profiler-container').removeClass('hideDetails');
                profiler_details = true;
            }

            return false;
        });

        $('.heightToggle').click(function() {
            var container = $('#profiler-container');

            if (container.hasClass('tallDetails')) {
                container.removeClass('tallDetails');
            } else {
                container.addClass('tallDetails');
            }
        });

        $('.tab').css('cursor', 'pointer').click(function() {
            hideAllTabs();

            $(this).addClass('active');
            $('#profiler').addClass($(this).attr('id'));

            if (!profiler_details) {
                profiler_details = true;
                $('#profiler-container').removeClass('hideDetails');
            }
        });
    });
})(jQuery);