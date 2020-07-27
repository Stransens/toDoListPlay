import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addTask} from './store/actions';
import TaskComponent from "./taskComponent";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            label: 'Work',
        }
    }

    chooseCategory = (value) => {
        this.setState({
            label: value
        })
    }

    chooseName = (value) => {
        this.setState({
            text: value
        })
    }

    addItem = () => {
        console.log('click')
        let newItem = {};
        newItem['isDone'] = false;
        newItem['text'] = this.state.text;
        newItem['label'] = this.state.label;
        console.log(newItem)
        addTask(newItem);
    }

    changeStatus = (status) => {
        console.log(status);
    }



    render() {
        console.log(this.props)
        return (
            <div className="App">
                <div className='controls-line'>
                    <select onChange={(e) => this.chooseCategory(e.target.value)}>
                        <option value='Work'>Work</option>
                        <option value='Family'>Family</option>
                        <option value='Personal'>Personal</option>
                    </select>
                    <input type='text' onChange={(e) => this.chooseName(e.target.value)}/>
                    <button type='button' onClick={this.addItem}>Add item</button>
                </div>
                <div className='tasks-container'>
                    {this.props.tasksList.length > 0 ? this.props.tasksList.map((item, i) => <TaskComponent task={item} key={`task${i}_${item.text}`} changeStatus={(status) => this.changeStatus(status)}/>) : <p>Sorry, you don't have tasks</p>}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        tasksList: state,
    }
}


export default connect(mapStateToProps, {addTask})(App);
