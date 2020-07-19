
let count = 0;

const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
} 

const appRoot = document.getElementById('app');

// renders the template each time the function runs
// the browser smartly updates only what changes though. the whole div is not replaced
const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id='addCount' onClick={addOne}>+1</button>   
            <button id='minusCount' onClick={minusOne}>-1</button>   
            <button id='resetCount' onClick={reset}>reset</button>    
        </div>
    )
    // ReactDOM.render takes 2 arguments what you want to render and where you want to render it
    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();