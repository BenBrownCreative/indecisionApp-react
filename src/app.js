console.log('app js is running');
// jsx - Javascript xml 
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

const resetOptions = () => {
    app.options = [];
    renderForm();
}
const appRoot = document.getElementById('app');

const renderForm = () => {
    const template = (
    // jsx requires a wrapper element
    <div>
        {app.title && <h1>{app.title}</h1>}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <button onClick={resetOptions}>reset</button>
        <p>{app.options.length}</p>

        
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option' />
            <button type='submit'>Add Option</button>
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
}
renderForm();