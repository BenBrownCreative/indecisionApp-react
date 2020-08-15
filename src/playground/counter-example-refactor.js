// this.setState is an asyncronous call, will not be immediately available
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResest = this.handleResest.bind(this);

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try {
            const countJson = localStorage.getItem('count');
            const count = JSON.parse(countJson);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        }
        catch (e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', JSON.stringify(this.state.count));
        }
        
    }
    handleAddOne() {
        // in order to manipulate the state variable we need to call setState function
        // the first argument is the previous state
        this.setState((prevState) => {
            // only need to provide the state properties you want to change
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleResest() {
        this.setState(() => {
            return {
                count: 0 
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResest}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))