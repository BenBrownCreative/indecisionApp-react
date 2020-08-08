console.log('hi there');

const buildApp = {
    title: 'Visibility Toggle',
    visibility: false
}

const appRoot = document.getElementById('app');

const changeState = () => { 
    buildApp.visibility = !buildApp.visibility;
    renderTemplate();
}
const renderTemplate = () => {
    const template = (
        <div>
            {buildApp.title && <h1>{buildApp.title}</h1>}
            <button onClick={changeState}>{buildApp.visibility ? 'hide details' : 'show details'}</button>
            {buildApp.visibility && (
                <div>
                <p>these are hidden details</p>
                </div>
            )}
            
        </div>
    )
    ReactDOM.render(template, appRoot);
}

renderTemplate();
