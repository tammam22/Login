$(function () {
    $('#datetimepicker4').datetimepicker({
        format: 'L',
        maxDate: moment()
    });
});

function checkEmailExist() {
    var xhttp = new XMLHttpRequest();
    var email = document.getElementById('signupemail').value;
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (this.responseText === "Email is not available" && $('#emailWarning').css('display') === 'block') {
                $("#emailWarning").css("margin-top", "50px");
                $('#emailWarning').css("display", "block");
                $('#save').attr("disabled", "disabled");
                return false;

            } else {
                $("form").css("margin-top", "0");
                $('#emailWarning').css("display", "none");
                $('#save').removeAttr("disabled");
                return true;
            }
        }
        return false;
    };
    try {
        xhttp.open("POST", "http://localhost:8083/checkEmail/" + email, true);
        xhttp.send();
    } catch (e) {
        alert("unable to connect to server");
    }
}