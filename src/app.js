// can pass in props to called components so they render differently 

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life into the hands of a computer';
        let options = ['thing one', 'thing two', 'thing ben', 'thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

// react component requires render
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        alert('removing all options');
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All Options</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }

    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option' placeholder='add option'></input>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));