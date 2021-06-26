$(function() {
    $("input:text, input:password").after("<span></span>");
    $("#full_name").focus();
    $("#datepicker").datepicker();

    $("#form_group").submit(
        function (event) {
            var isValid = true;

            // validate the full name entry
            var fullName = $("#full_name").val().trim();
            if (fullName == "") {
                $("#full_name").next().text("This field is required.");
                isValid = false;
            } else {
                $("#full_name").val(fullName);
                $("#full_name").next().text("");
            }

            // validate the email entry with a regular expression
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val();
            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            } else if (!emailPattern.test(email)) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }

            // validate the user name entry
            var userName = $("#user_name").val().trim();
            if (userName == "") {
                $("#user_name").next().text("This field is required.");
                isValid = false;
            } else if (userName.indexOf(" ") != -1) {
                $("#user_name").next().text("The name is not include any space.");
                isValid = false;
            } else {
                $("#user_name").val(userName);
                $("#user_name").next().text("");
            }

            // validate the password entry (regular expression)
            var password = $("#password").val();
            if (password.length < 6) {
                $("#password").next().text("Must be 6 or more characters.");
                isValid = false;
            } else {
                $("#password").next().text("");
            }

            // prevent the submission of the form if any entries are invalid
            if (isValid == false) {
                event.preventDefault();
            }
        }, // end function
    ); // end submit

    $("#reset").click(function() {
        $("input:text, input:password").next().text("");
        $("#full_name").focus();
    });
});