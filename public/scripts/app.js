'use strict';

console.log('app js is running');
// jsx - Javascript xml 
// if an expression resolves to undefined - nothing shows up


var app = {
    title: 'Indecision',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
    // jsx requires a wrapper element
};var template = React.createElement(
    'div',
    null,
    app.title && React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Ben Brown',
    age: '13',
    location: 'Nashville'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            user.location
        );
    }
}

// logical and operator -the && operator evaluates both conditions starting from left
// returns false if first is false, if the first is true it continues to the next expression
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

// ReactDOM.render takes 2 arguments what you want to render and where you want to render it
ReactDOM.render(template, appRoot);
