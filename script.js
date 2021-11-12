let headerIp = document.getElementById("header");
let footerIp = document.getElementById("footer");
let output = document.getElementById("output");
let btn_stringify = document.getElementById("btn_stringify");
let str1, str2, finalstr;
let btn_select = document.getElementById("select");
let btn_copy = document.getElementById("copy");

btn_stringify.addEventListener("click", () => {
    str1 = JSON.stringify(headerIp.value);
    str2 = JSON.stringify(footerIp.value);
    let cms = cmsjson(str1, str2);
    //console.log(cms);
    finalstr = JSON.stringify(cms);
    //console.log(finalstr);
    output.innerText = finalstr;
});

function cmsjson(str1, str2) {
    return `{
"Layout": [
    {
    "Key": "HEADER",
    "Value": {
        "MainDiv": {
        "FxLayout": "column wrap",
        "FxLayoutAlign": " "
        },
        "Section1": {
        "FxFlex": "0 0 auto",
        "FxLayout": "column",
        "Source":${str1},
        "Styles": ""
        },
        "Section2": {
        "FxFlex": "0 0 auto",
        "FxLayout": "",
        "Source": "",
        "Styles": ""
        },
        "Section3": {
        "FxFlex": "0 0 auto",
        "FxLayout": "",
        "Source": "",
        "Styles": ""
        }
    }
    },
    {
    "Key": "FOOTER",
    "Value": {
        "MainDiv": {
        "FxLayout": "column wrap",
        "FxLayoutAlign": " "
        },
        "Section1": {
        "FxFlex": "0 0 auto",
        "FxLayout": "column",
        "Source":${str2},
        "Styles": ""
        },
        "Section2": {
        "FxFlex": "0 0 auto",
        "FxLayout": "column",
        "Source": " ",
        "Styles": ""
        },
        "Section3": {
        "FxFlex": "0 0 auto",
        "FxLayout": "column",
        "Source": " ",
        "Styles": ""
        }
    }
    }
]
}`;
}

// select all fn
btn_select.onclick = function () {
    output.select();
};
// copy to clipboard fn
btn_copy.onclick = function () {
    output.select();
    navigator.clipboard.writeText(output.value);
};

