function properties(data, pathUrl) {

    var propertie = [
        {
            "property": "company",
            "value": ""
        },
        {
            "property": "firstname",
            "value": ""
        },
        {
            "property": "lastname",
            "value": ""
        },
        {
            "property": "email",
            "value": ""
        },
        {
            "property": "n_mero_de_empleados",
            "value": ""
        },
        {
            "property": "phone",
            "value": ""
        },
        {
            "property": "website",
            "value": pathUrl.origin
        },
        {
            "property": "address",
            "value": ""
        },
        {
            "property": "city",
            "value": ""
        },
        {
            "property": "state",
            "value": ""
        },
        {
            "property": "zip",
            "value": ""
        },
        {
            "property": "codigo_del_pais",
            "value": ""
        },
        {
            "property": "soluci_n_requerida",
            "value": ""
        },
        {
            "property": "origen_del_lead",
            "value": ""
        }
    ];


    switch (pathUrl.origin) {
        case constant.landingTicketCar():
            propertie[11].value = "MX";
            propertie[12].value = "Combustible";
            propertie[13].value = "CPL-Link-factor";
            break;
        case constant.landingEmpresarial():
            propertie[11].value = "MX";
            propertie[12].value = "Viáticos";
            propertie[13].value = "CPL-Link-factor";
            break;
        case constant.landingEcovale():
            propertie[11].value = "MX";
            propertie[12].value = "Despensa";
            propertie[13].value = "CPL-Link-factor";
            break;
        case constant.landingBigPass():
            propertie[11].value = "CO";
            propertie[12].value = "Despensa";
            propertie[13].value = "CPL-Link-factor";
            break;
        default:
            break;
    }



    data.forEach(function (valor, indice, array) {
        propertie[indice].value = valor;
    });

    return propertie;

}