var React = require('react');
var Main = require('./components/main');

var element = React.createElement(Main, {});
React.render(element, document.querySelector('.container'));
