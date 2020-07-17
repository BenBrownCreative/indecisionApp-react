console.log('app js is running');
// jsx - Javascript xml 
// if an expression resolves to undefined - nothing shows up


const app = {
    title: 'Indecision',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
}
// jsx requires a wrapper element
const template = (
    <div>
        {app.title && <h1>{app.title}</h1>}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Ben Brown',
    age: '13',
    location: 'Nashville'
};
function getLocation(location) {
    if (location) {
        return <p>location: {user.location}</p>;
    } 
}

// logical and operator -the && operator evaluates both conditions starting from left
// returns false if first is false, if the first is true it continues to the next expression
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)} 
    </div>
); 

const appRoot = document.getElementById('app');

// ReactDOM.render takes 2 arguments what you want to render and where you want to render it
ReactDOM.render(template, appRoot);
