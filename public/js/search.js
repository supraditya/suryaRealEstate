(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            }
            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr);
    };
})(jQuery);
(function(window, undefined) {
    "$:nomunge";
    var $ = window.jQuery || window.Cowboy || (window.Cowboy = {}),
        jq_throttle;
    $.throttle = jq_throttle = function(
        delay,
        no_trailing,
        callback,
        debounce_mode
    ) {
        var timeout_id,
            last_exec = 0;
        if (typeof no_trailing !== "boolean") {
            debounce_mode = callback;
            callback = no_trailing;
            no_trailing = undefined;
        }

        function wrapper() {
            var that = this,
                elapsed = +new Date() - last_exec,
                args = arguments;

            function exec() {
                last_exec = +new Date();
                callback.apply(that, args);
            }

            function clear() {
                timeout_id = undefined;
            }
            if (debounce_mode && !timeout_id) {
                exec();
            }
            timeout_id && clearTimeout(timeout_id);
            if (debounce_mode === undefined && elapsed > delay) {
                exec();
            } else if (no_trailing !== true) {
                timeout_id = setTimeout(
                    debounce_mode ? clear : exec,
                    debounce_mode === undefined ? delay - elapsed : delay
                );
            }
        }
        if ($.guid) {
            wrapper.guid = callback.guid = callback.guid || $.guid++;
        }
        return wrapper;
    };
    $.debounce = function(delay, at_begin, callback) {
        return callback === undefined ?
            jq_throttle(delay, at_begin, false) :
            jq_throttle(delay, callback, at_begin !== false);
    };
})(this);
("use strict");
window.APP = (function(module, $) {
    var m = module;
    m.searchModule = {};
    var _settings = {
        searchOpenSelector: ".icon-search",
        searchCloseSelector: ".js-search-close",
        minTermLength: 3,
    };
    var startInit = function() {
        $(_settings.searchOpenSelector).click(function(e) {
            if (!$("html").hasClass("ie9")) {
                e.preventDefault();
                var searchInPanel = !$(this).hasClass("js-scroll-to");
                openSearchPanel(searchInPanel);
            }
        });
        $(_settings.searchCloseSelector).click(function(e) {
            e.preventDefault();
            closeSearchPanel();
        });
    };
    var openSearchPanel = function(searchInPanel) {
        if (searchInPanel) {
            $("html").addClass("js-search-panel--open");
            $(".search-panel").stop().fadeIn(300);
        }
        $("body").trigger("RESET_SEARCH_FORM");
        $(".js-search-input").focus();
    };
    var closeSearchPanel = function() {
        $("html").removeClass("js-search-panel--open");
        $(".search-panel").stop().fadeOut(300);
    };
    var resultsWrapper = ".search-panel__all-desktop";
    var isLoading = false;
    var hasRelatedResults = false;
    var hasNormalResults = false;
    var $frm = $(".search-panel__form");
    var $termsInput = $("#main-search  .js-search-input");
    var results = [];
    var numResults = 0;

    function submitForm() {
        $frm.submit(function(ev) {
            ev.preventDefault();
            if ($termsInput.val().length < 3) return;
            $(".search-panel__results-header").stop().fadeIn(300);
            if (Modernizr.touchevents) {
                $("#terms").blur();
            }
            var $form = $($(ev)[0].currentTarget);
            var formQueryString = $form.serialize();
            $.ajax({
                type: $form.attr("method"),
                url: $form.attr("action"),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                data: formQueryString,
                beforeSend: function() {
                    loading();
                },
                success: function(data) {
                    if (data.results.length) {
                        sortData(data);
                    } else {
                        loaded(false);
                    }
                },
                error: function(data) {
                    loaded(false);
                },
            });
        });
    }

    function loading(fakeLoad) {
        $(".search-panel__all-desktop").stop().hide();
        $(".search-panel__results-header").stop().hide();
        $(".error-message--wrapper").stop().hide();
        !fakeLoad && $(".loader--wrapper").stop().fadeIn(300);
        clearResults();
    }

    function sortData(data, category) {
        if (
            data.results !== null &&
            data.results !== "" &&
            data.results !== undefined &&
            data.results.length
        ) {
            hasNormalResults = true;
        } else {
            hasNormalResults = false;
        }
        $(data.results).each(function(index, item) {
            results.push(item);
        });
        populateTemplate(
            results,
            ".search-panel__all-desktop .search-panel__normal .search-panel__elems",
            "#template4"
        );
        numResults = results.length;
        loaded(true);
    }

    function loaded(isSuccess) {
        if (isSuccess) {
            var searchTerm;
            searchTerm = $(".js-search-input").val();
            $(".search-panel__results-header").html(
                numResults + " results for <span>" + searchTerm + "</span>"
            );
            $(".search-panel__results-header").stop().fadeIn(300);
            if (hasRelatedResults) {
                $(".search-panel__related-results").stop().fadeIn(300);
            } else {
                $(".search-panel__related-results").stop().hide();
            }
            if (hasNormalResults) {
                $(".search-panel__normal").stop().fadeIn(300);
            } else {
                $(".search-panel__normal").stop().hide();
                $(".error-message--wrapper").stop().fadeIn(300);
            }
            $(".loader--wrapper").stop().hide();
            $(resultsWrapper).stop().fadeIn(300);
        } else {
            $(".loader--wrapper").stop().hide();
            $(".search-panel__related-results").stop().hide();
            $(".search-panel__normal").stop().hide();
            $(".error-message--wrapper").stop().show();
            $(resultsWrapper).stop().fadeIn(300);
        }
    }

    function populateTemplate(data, containerID, category) {
        var prop, clone;
        var container = document.createDocumentFragment();
        var parent = document.querySelector(containerID);
        data.forEach(function iterate(item, index) {
            var template = document.querySelector("#templates " + category);
            clone = template.cloneNode(true);
            for (prop in item) {
                if (item.hasOwnProperty(prop)) {
                    if (prop === "pageUrl" || prop === "downloadUrl") {
                        clone.querySelector(".js-data-" + prop).href = item[prop];
                    } else if (prop === "imageUrl") {
                        clone.querySelector(".js-data-" + prop).src = item[prop];
                    } else if (prop !== "category") {
                        $(".js-data-" + prop, clone).append(item[prop]);
                    }
                }
            }
            clone.setAttribute("style", "");
            clone.removeAttribute("id");
            container.appendChild(clone);
        });
        parent.appendChild(container);
    }

    function clearResults() {
        $(".search-panel__elems").empty();
        results = [];
    }

    function resetSearchPanelState() {
        $termsInput.val("");
        $(".search-panel__results-header").stop().hide();
        $(".search-panel__all-desktop").stop().hide();
        clearResults();
    }

    function onInputTextChanged() {
        if (!isLoading) {
            var value = $.trim($termsInput.val());
            if (value && value.length >= _settings.minTermLength) {
                $frm.trigger("submit");
            } else {
                loading(true);
            }
        }
    }
    m.searchModule.init = function() {
        startInit();
        if (!Modernizr.touchevents) {
            $termsInput.on("keyup", $.debounce(500, onInputTextChanged));
        }
        submitForm();
        $("body").on("RESET_SEARCH_FORM", resetSearchPanelState);
    };
    return module;
})(window.APP || {}, window.jQuery);
window.APP = (function(module, $) {
    var m = module;
    var bigScreen = 1392;
    var smallScreen = 768;
    var allowFullWidth = false;
    var isSmallScreen = $(window).width() < smallScreen;
    var isBigScreen = $(window).width() > bigScreen;
    var isRTL = $("html").css("direction").toLowerCase() == "rtl";
    var additionalClasses = [];
    isSmallScreen && additionalClasses.push("small-screen");
    allowFullWidth && additionalClasses.push("allow-full-width");
    isRTL && additionalClasses.push("rtl");
    additionalClasses.length && $("html").addClass(additionalClasses.join(" "));
    m.screen = { isSmallScreen: isSmallScreen, isBigScreen: isBigScreen };
    $(function() {
        m.videoModule && m.videoModule.init();
        m.genericModule && m.genericModule.init();
        m.searchModule && m.searchModule.init();
    });
    return module;
})(window.APP || {}, window.jQuery);