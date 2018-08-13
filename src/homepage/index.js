var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('slug-title');


page('/', function (ctx, next) {
    title('Platzigram')
    var main = document.getElementById('main-container')

    var pictures = [
       {
           user: {
               username: 'Visquel0208',
               avatar: 'visquel.png'
           },
           url: 'audi.jpg',
           likes: 10,
           liked: false
       },
       {
        user: {
            username: 'Visquel0208',
            avatar: 'visquel.png'
        },
        url: 'audi.jpg',
        likes: 5,
        liked: true
    }
    ];

    empty(main).appendChild(template(pictures));
})