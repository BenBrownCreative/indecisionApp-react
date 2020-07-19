'use strict';

console.log('app js is running');
// jsx - Javascript xml 
// if an expression resolves to undefined - nothing shows up

var app = {
    title: 'Indecision',
    subtitle: 'This is my subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
};

var resetOptions = function resetOptions() {
    app.options = [];
    renderForm();
};
var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
    var template =
    // jsx requires a wrapper element
    React.createElement(
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
            'button',
            { onClick: resetOptions },
            'reset'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderForm();
