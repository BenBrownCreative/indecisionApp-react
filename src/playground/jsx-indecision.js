console.log('hi there');
// jsx - Javascript xml 
// use { } to add an expression with javascript code
// if an expression resolves to undefined - nothing shows up

const app = {
    title: 'Indecision',
    subtitle: 'This is my subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); 
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; 
        renderForm();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderForm(); 
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const appRoot = document.getElementById('app');

const renderForm = () => {
    const template = (
    // jsx requires a wrapper element
    <div>
        {app.title && <h1>{app.title}</h1>}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove all</button>
        <p>{app.options.length}</p>
        <ol>
        {
            app.options.map((option, i) => <li key={i}>{option} </li>)
        }
        </ol>
        
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option' />
            <button type='submit'>Add Option</button>
        </form>
    </div>
    );
    // what are we rendering and where
    ReactDOM.render(template, appRoot);
}
renderForm();