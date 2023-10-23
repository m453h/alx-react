const $ = require("jquery");
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count' data-click-count='0'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter() {
    let count = parseInt($('#count').data('click-count'));
    count++;
    $("#count").html(`${count} clicks on the button`);
    $('#count').data('click-count', count);
}

$('button').on('click', _.debounce(updateCounter, 500));