const constant = new Constant();
const pathnameUrl = window.location;

$('document').ready(function () {
    $("#create-contact").click(function () {
        var data = [];
        $(".NZMK_DefaultMainDiv .form-group").each(function (item) {
            if ($(this).find("input").val() != undefined) {
                data.push($(this).find("input").val());
            } else {
                data.push($(this).find("select").val());
            }
        });

        if (data.length == 6) {
            var resultPro = properties(data, pathnameUrl);
             send(resultPro).done(function (response) {
                 if (response.Status) {
                     //PoP up
                     console.log("IdContact: " + response.Result + " - " + "Mensaje: " + response.Message);
                 }
                 else
                 {
                     console.log(response.Message + " - " + response.Result);
                 }
             });
        }
    });
});