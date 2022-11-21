"use strict";
setTimeout(function(){
        (function($) {
            "use strict";
            // Single Search Select
            $(".js-example-basic-single").select2();
            $(".js-example-disabled-results").select2();

            // Multi Select
            $(".js-example-basic-multiple").select2();

            // With Placeholder
            $(".js-example-placeholder-multiple").select2({
                placeholder: "-- Pilih --"
            });

            // With Placeholder
            $(".js-example-placeholder-multiple-asisten").select2({
                placeholder: "NPM Asisten",
                maximumSelectionLength: 1
            });

            $(".js-example-placeholder-multiple-laboran").select2({
                placeholder: "-- Pilih --",
                maximumSelectionLength: 1
            });

            $(".js-example-placeholder-multiple-jadwal").select2({
                placeholder: "-- Pilih --",
                maximumSelectionLength: 1
            });

            //Limited Numbers
            $(".js-example-basic-multiple-limit").select2({
                placeholder: "NPM",
                maximumSelectionLength: 2
            });

            //RTL Suppoort
            $(".js-example-rtl").select2({
                dir: "rtl"
            });
            // Responsive width Search Select
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });
            $(".js-example-disabled").select2({
                disabled: true
            });
            $(".js-programmatic-enable").on("click", function() {
                $(".js-example-disabled").prop("disabled", false);
            });
            $(".js-programmatic-disable").on("click", function() {
                $(".js-example-disabled").prop("disabled", true);
            });
        })(jQuery);
    }
    ,350);