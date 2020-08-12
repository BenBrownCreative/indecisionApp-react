// can pass in props to called components so they render differently 

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
            option: ''
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
                option: ''
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                option: option
            }
        })
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            // dont want try and manipulate the current state object directly
            // instead of doing push to the array we need to get the new array and return it
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life into the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                pick={this.state.option}
                />
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// react component requires render
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
                {this.props.pick.length > 0 &&<p>{this.props.pick}</p>}
            </div>
        );
    }
}

// the this binding gets lost when defining methods inside the react component
// the this binding is correct in the render and constructor function
// in order to maintain the correct this binding we need to set the this binding for the function in the constructor

class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>
               {
                   this.props.optionText
                }
            </p>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // reset the input to empty
        e.target.elements.option.value = '';
        this.setState(() => {
            return {
                error // this is === error: error
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' placeholder='add option'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));