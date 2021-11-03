$(document).ready(function() {

    const App = document.getElementById("APP");
    const btnClick = document.querySelector(".clickMode");
    const darkIcon = document.querySelector(".aidm-icn_Dark");
    const lsKey = "darkMode";

    if (localStorage.getItem(lsKey) === "true") {
        App.classList.add("dark-mode");
        darkIcon.classList.add("aidm-icn_Light");
    }
    btnClick.addEventListener("click", function() {
        darkIcon.classList.toggle("aidm-icn_Light");
        App.classList.toggle("dark-mode");
        localStorage.setItem(lsKey, App.classList.contains("dark-mode"))
    });

    const owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 9000,
        autoplayHoverPause: false
    });

    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000]);
        $(this).addClass("hide");
        $('.pause').removeClass("hide");
    })
    $('.pause').on('click', function() {
        owl.trigger('stop.owl.autoplay');
        $('.play').removeClass("hide");
        $(this).addClass("hide");

    })

    /* ----------------------------------------------------------------------------
 Handling open slide
 ----------------------------------------------------------------------------------- */

    $("#open-slide").on("click", function() {
        $(".open-slide").addClass("open");
        $(".close").addClass("open");
        $(".slide-filter-overlay").addClass("open");
    });
    $(".close").on("click", function() {
        $(".open-slide").removeClass("open");
        $(".close").removeClass("open");
        $(".slide-filter-overlay").removeClass("open");
    });

    /* ----------------------------------------------------------------------------
 Handling widget dropdown list
 ----------------------------------------------------------------------------------- */
    setTimeout(() => {
        $(document).click(function() {
            let elm = $(this)
                .parent()
                .find(".dropdown-content")
                .hide(100);
            $(".main-content")
                .find(".dropdown-content")
                .not(elm)
                .hide(100);
        });
        $(document).on("click", ".button-dots", function(e) {
            e.stopPropagation();
            let elm = $(this)
                .parent()
                .find(".dropdown-content");
            $(".main-content")
                .find(".dropdown-content")
                .not(elm)
                .hide();
            elm.toggle();
        });
    }, 1000);

    /* ----------------------------------------------------------------------------
                 Handling the new sidebar operations
                 ----------------------------------------------------------------------------------- */
    $(".openMenuLink").on("click", function() {
        let dropdown = $(this)
            .parent()
            .find(".dropdown-content");
        $(".open-dropdown-links").removeClass("open-dropdown-links");
        dropdown.toggleClass("open-dropdown-links");
        $(this).toggleClass("open-dropdown-links");
    });

    /* ----------------------------------------------------------------------------
                 Used in new download modal
                 ----------------------------------------------------------------------------------- */
    $("#grid_view").on("click", function() {
        $(".grid-view").show();
        $(".list-view").hide();
        $("#list_view svg").removeClass("active");
        $("#grid_view svg").addClass("active");
    });
    $("#list_view").on("click", function() {
        $(".grid-view").hide();
        $(".list-view").show();
        $("#list_view svg").addClass("active");
        $("#grid_view svg").removeClass("active");
    });

    /* ----------------------------------------------------------------------------
                 Handling user dropdown toggle
                 ----------------------------------------------------------------------------------- */
    $(".dropdown-user-click").on("click", function() {
        $(".userdropdownlist").toggleClass("userdropdownlistOpen");
    });

    $(".title-dropdown").on("click", function() {
        $(".dropdown-content").toggleClass("open_dropdown");
    });

    /* ----------------------------------------------------------------------------
                 Handling Arabic & English Transitions
                 ----------------------------------------------------------------------------------- */
    $(".ar").on("click", function() {
        $(".en").css("top", "25px");
        $(".ar").css("top", "0");
        changeLang();
    });
    $(".en").on("click", function() {
        $(".ar").css("top", "25px");
        $(".en").css("top", "0");
        changeLang();
    });

    /* ----------------------------------------------------------------------------
                 Handling Sidebar Animations
                 ----------------------------------------------------------------------------- */
    $(".toggleMenu").on("click", function() {
        $(".big-sidebar").toggleClass("open-main-sidebar");
        $(".main-sidebar").toggleClass("open-main-sidebar");
        // $(".openMenu .nav-item").tooltip();
        // $(".small-sidebar").toggleClass("hover");
    });

    /* ----------------------------------------------------------------------------
                 Handling Filters Panel
                 ----------------------------------------------------------------------------------- */

    $(".filter-icon").on("click", function() {
        $(".filter-side").addClass("active");
        $(".side-filter-overlay").addClass("open");
        $(this).hide();
    });

    $(".close-filter").on("click", function() {
        $(".filter-side").removeClass("active");
        $(".side-filter-overlay").removeClass("open");
        $(".filter-icon").show();
    });
    /* ---------------------------------------------------------------------------- */

    /*---------------------------------Alerts Page---------------------------------*/
    $(".alert_box_clicked").on("click", function(evt) {
        $(evt.target)
            .parent()
            .parent()
            .find(".newSelects-dropdown")
            .toggleClass("show");
    });
    /*------------------------------------------------------------------------------*/

    $(".nav .nav-item").on("click", function() {
        $(this)
            .parents(".nav")
            .find(".nav-item.active")
            .removeClass("active");
        $(this).addClass("active");
    });

    $(".show_delete_panel").on("click", function() {
        $(this)
            .closest(".card-content")
            .addClass("blur");
        $(this)
            .closest(".card")
            .find(".card-delete")
            .addClass("open");
    });

    $(".hide_delete_panel").on("click", function() {
        $(".card-content").removeClass("blur");
        $(".card-delete").removeClass("open");
    });
    $(".hide_delete_panel_list").on("click", function() {
        $(".card-delete-list").removeClass("open");
    });

    document.querySelectorAll('.uploader input[type="file"]').forEach((el) =>
        el.addEventListener("change", (ev) => {
            if (ev.target.files && ev.target.files.length) {
                const text = Array.from(ev.target.files)
                    .map((x) => x.name)
                    .join(", ");
                el.parentNode.querySelector(".placeholder").innerText = text;
            }
        }),
    );

    // Add down arrow icon for collapse element which is open by default
    $(".collapse.show").each(function() {
        $(this)
            .prev(".card-head")
            .find(".fa")
            .addClass("fa-angle-down")
            .removeClass("fa-angle-right");
    });

    // Toggle right and down arrow icon on show hide of collapse element
    $(".collapse")
        .on("show.bs.collapse", function() {
            $(this)
                .prev(".card-head")
                .find(".fa")
                .removeClass("fa-angle-right")
                .addClass("fa-angle-down");
        })
        .on("hide.bs.collapse", function() {
            $(this)
                .prev(".card-head")
                .find(".fa")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-right");
        });

    // start progress bar

    // $('#datepicker-to').datepicker({
    //     uiLibrary: 'bootstrap4'
    // });
    // $('#datepicker-from').datepicker({
    //     uiLibrary: 'bootstrap4'
    // });
    // $('#dropdown').dropdown({
    //     uiLibrary: 'bootstrap4'
    // });
    // $('#dropdown_2').dropdown({
    //     uiLibrary: 'bootstrap4'
    // });
    // $('#dropdown_3').dropdown({
    //     uiLibrary: 'bootstrap4'
    // });

    $(".select2").select2({
        tags: true,
        maximumSelectionLength: 10,
        tokenSeparators: [",", " "],
        placeholder: "",
        allowClear: false,
    });
    $(".select2").on("select2:select", function(e) {
        let set_id = $(this).data("set-id");
        if (set_id) set_val_to_id(set_id, $(this).val());

        // console.log({ e, he: $(this).val() });
        emitChangeText("DATA_FILTER_UPDATE", {
            action: "change_val",
            key: $(this).attr("name"),
            value: $(this).val(),
        });
    });

    $(".select2").on("select2:unselect", function(e) {
        let set_id = $(this).data("set-id");
        if (set_id) set_val_to_id(set_id, $(this).val());

        emitChangeText("DATA_FILTER_UPDATE", {
            action: "change_val",
            key: $(this).attr("name"),
            value: $(this).val(),
        });
    });

    const templateSelection = (country) => {
        var $state;
        var baseUrl = "/assets/img/flags";
        if (country.element.id.toLowerCase()) {
            $state = $(
                `<span>
            <img src="${baseUrl}/${country.element.id.toLowerCase()}.svg" class="img-flag" height="23px"/>
          </span>
          <span class="mx-1">
            ${country.text}
          </span>
      `,
            );
        } else {
            $state = $(
                `
          <span class="mx-1">
            ${country.text}
          </span>
      `,
            );
        }

        return $state;
    };

    const templateResult = (state) => {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "/assets/img/flags";
        var $state = $(
            `<span>
      <img src="${baseUrl}/${state.element.id.toLowerCase()}.svg" class="img-flag" height="23px"/>
      ${state.text}
      </span>`,
        );
        return $state;
    };

    // const matchStart = (params, data) => {
    //   if (params.term) {
    //     return data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0;
    //   }
    //   return data;
    // };

    setTimeout(() => {
        $(".mySelect").niceSelect();
    }, 3000);

    $("#country_code").niceSelect();
    $(".register-select").select2({
        templateResult: templateResult,
        templateSelection: templateSelection,
        // matcher: matchStart,
    });

    $("input, textarea, select").change(function(e) {
        const value = e.target.value;
        if (value)
            $(this)
            .siblings("label")
            .css("top", "-10px");
        else
            $(this)
            .siblings("label")
            .css("top", "");
    });
    $("input, textarea, select").each(function(e) {
        const value = $(this).val();
        if (value)
            $(this)
            .siblings("label")
            .css("top", "-10px");
        else
            $(this)
            .siblings("label")
            .css("top", "");
    });
});

/* ----------------------------------------------------------------------------
  Init the project
  ----------------------------------------------------------------------------------- */
function emitChangeText(event, obj) {
    window.Vue.$root.$emit(event, obj);
}

function set_val_to_id(id, value) {
    window.$("#" + id).val(JSON.stringify(value));
}

function submit_request(params, action = "", method = "get", new_tab = false) {
    const myLoginForm = document.createElement("form");
    myLoginForm.method = method;
    myLoginForm.action = action;
    if (new_tab) myLoginForm.target = "_blank";
    params._token = window._csrfToken;

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement("input");
            hiddenField.type = "hidden";
            hiddenField.name = key;
            if (typeof params[key] === "object" && params[key] !== null) {
                hiddenField.value = JSON.stringify(params[key]);
            } else hiddenField.value = params[key];
            myLoginForm.appendChild(hiddenField);
        }
    }
    document.body.appendChild(myLoginForm);
    myLoginForm.submit();
}

function alert_msg(text, icon = "success") {
    //success or error or info
    swal({
        icon: icon,
        text: text,
        button: false,
        className: "text-center",
    });
}

function ___(key) {
    if (window._locale == "en") return key;

    let translation,
        translationNotFound = true;

    translation = key;

    if (translationNotFound) {
        translation = window._translations[key] ? window._translations[key] : key;
    }
    return translation;
}

$(document).on("change", ".groupBySelect", function() {
    window.Vue.$root.$emit("CHANGE_GROUP_BY", $(this).val());
});
$(".myTooltip").tooltip();
setTimeout(() => {
    $(".mySelect").niceSelect();
    $("#workspace_order_by").niceSelect();
    feather.replace();
    $(".myTooltip").tooltip();
    if ($(".grid").length) {
        $(".grid").masonry({
            itemSelector: ".grid-item",
            columnWidth: ".grid-sizer",
            percentPosition: true,
        });
    }
    $(".progress .progress-bar").each(function() {
        $(this).animate({ width: $(this).attr("aria-valuenow") }, 50);
    });
}, 1000);
feather.replace();

let color_list = {
    darkBlue: "#4f61e8",
    blue: "#1caffd",
    green: "#95be13",
    orange: "#f1b939",
    red: "#19d074",
    purple: "#d530c7",
    gray: "#e7e9f2",
};

$(document).ready(function() {
    $("#showMore").click(function() {
        $(".workspaces-sidebar").toggleClass("h-100");
        if ($(".workspaces-sidebar").hasClass("h-100")) {
            $("#showMore").text(window.___("Show Less"));
        } else {
            $("#showMore").text(window.___("Show More"));
        }
    });
    $("#showMoreShared").click(function() {
        $(".workspaces-sidebar-shared").toggleClass("h-100");
        if ($(".workspaces-sidebar-shared").hasClass("h-100")) {
            $("#showMoreShared").text(window.___("Show Less"));
        } else {
            $("#showMoreShared").text(window.___("Show More"));
        }
    });
});