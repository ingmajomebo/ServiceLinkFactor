function send(properties) {

    var promise;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": constant.urlApi() + "InsertContact",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "processData": true,
        "data": JSON.stringify({ properties })
    }

    var promise = $.ajax(settings);

    return promise;
}