$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});

// nav bar

$(window).scroll(function () {
  var sticky = $(".sticky"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

// ==========  preloding page ===========



// =============================
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".web-app-menu").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// contact form

$(document).ready(function () {
  // animation hide loader after reload preloader
  $("#name").keyup(function () {
    var value = $("#name").val();
    console.log(value.length);
    if (value.length > "0") {
      console.log("ram");
      $("#name_validation").hide();
    } else {
      $("#name_validation").show();
    }
  });
  $(".overlay, body").addClass("loaded");
  setTimeout(function () {
    $(".overlay").css({ display: "none" });
    $(".overlay").delay(2000).fadeOut("slow");
  }, 2000);
});

// ==================

$(document).ready(function () {
  $("#register-form").submit(function (e) {
    e.preventDefault();
 
    var mainVal = {
      fname: $("#fname").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      development: $("#development").val(),
      description: $("#description").val(),
    };

    $(".error").remove();

    if (fname.length < 1) {
      $("#fname").after(
        '<span class="error" id="name_validation">This field is required</span>'
      );
    }

    if (phone.length < 1) {
      $("#phone").after(
        '<span class="error" id="name_validation">This field is required</span>'
      );
    }

    if (phone.length > 9) {
      $("#phone").after(
        '<span class="error" id="name_validation">please enter 10 digit number</span>'
      );
    }

    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
    }


    if (development.length < 1) {
      $("#development").after(
        '<span class="error" >This field is required</span>'
      );
    }

    if (description.length < 1) {
      $("#description").after(
        '<span class="error">This field is required</span>'
      );
    }

    if (
      mainVal.fname.length < 1 ||
      mainVal.email.length < 1 ||
      mainVal.phone.length < 1
    ) {
      alert("please enter valid value");
      return false;
    } else {
      $.ajax({
        type: "POST",
        url: "https://api.webapp.world/userDetailes",
        data: mainVal,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        $(this).prop("disabled", true);
        $("#register-form").prop("disabled", false);
        console.log(data);
        alert("email submit successful");
      });

      alert("else part");
      console.log(mainVal);
    }
  });
});

// for footer api calling form

$(document).ready(function () {
  $("#footerform").submit(function (e) {
    e.preventDefault();
    var footerVal = {
      email: $("#footeremail").val(),
    };

    $(".error").remove();

    if (email.length < 1) {
      $("#footeremail").after(
        '<span class="error">This field is required</span>'
      );
    }


    else {
      $.ajax({
        type: "POST",
        url: "https://api.webapp.world/userMail",
        data: footerVal,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        $(this).prop("disabled", true);
        console.log(data);
        alert("Form submit successful");
      });
    }
  });
});



$(document).ready(function () {
  // animation hide loader after reload preloader
  $(".overlay, body").addClass("loaded");
  setTimeout(function () {
    $(".overlay").css({ display: "none" });
    $(".overlay").delay(2000).fadeOut("slow");
  }, 2000);
});