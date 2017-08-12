var infoButton = document.getElementById('btn btn-info btn-lg');


$(document).ready(function () {
    if ($.cookie('cookieMonster') !== 'yes') {

        $.cookie('cookieMonster', 'yes', {expires: 3, path: '/'});
        infoButton.click();
    } else {
        alert("your cooka not exp. yet")
    }
});

var personId = 1;

getJSON(personId);
function loadJsonHtml(getData) {
    document.getElementById("box1").innerHTML = getData.name;
    document.getElementById("box2").innerHTML = getData.height;
    document.getElementById("box3").innerHTML = getData.mass;
}
function getJSON(personId) {
    $.ajax({
            url: 'https://swapi.co/api/people/' + personId + '/?format=json',
            dataType: 'json',
            async: true,
            type: 'get',
            cache: false,
            success: function (data) {
                loadJsonHtml(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alert(JSON.stringify(jqXHR , textStatus, errorThrown ));
            }
        }
    )
}
$('.next').click(function () {
    getJSON(++personId);
    if(personId > 88) {
        personId--;
    }
});

$('.previous').click(function () {
    getJSON(--personId);
    if (personId < 1) {
        personId++;
    }
});

