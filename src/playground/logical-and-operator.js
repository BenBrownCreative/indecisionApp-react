
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
ReactDOM.render(templateTwo, appRoot); 