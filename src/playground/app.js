// can pass in props to called components so they render differently
// react class component requires render and constructor to add state
// the this binding gets lost when defining methods inside the react component
// the this binding is correct in the render and constructor function
// in order to maintain the correct this binding we need to set the this binding for the function in the constructor

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
      option: '',
    };
  }
  // react lifecycle methods
  componentDidMount() {
    try {
      const jsonOptions = localStorage.getItem('options');
      const options = JSON.parse(jsonOptions);

      if (options) {
        this.setState(() => ({
          options: options,
        }));
      }
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
      option: '',
    }));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((x) => x !== option),
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ option: option }));
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid Value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    // dont want try and manipulate the current state object directly
    // instead of doing push to the array we need to get the new array and return it
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }
  render() {
    const subtitle = 'Put your life into the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          pick={this.state.option}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// functional components are faster and simpler to write and manage
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'some default',
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What in the world should I do?
      </button>
      {props.pick.length > 0 && <p>{props.pick}</p>}
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      {props.options.length === 0 && <div>please add an option</div>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <span>{props.optionText}</span>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // reset the input to empty
    this.setState(() => ({ error })); // this is === error: error

    if (!error) {
      e.target.elements.option.value = '';
    }
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
