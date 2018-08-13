var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('doc-title');


page('/signin', function (ctx, next) {
    title.setPage('Platzigram | Signin')
    var main = document.getElementById('main-container')
    empty(main).appendChild(template);
})