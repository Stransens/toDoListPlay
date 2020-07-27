import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addTask, editTask, sortTasks} from './actions';
import TaskComponent from "./taskComponent";

class App extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  text: '',
                  label: 'Work',
                  filter: false,
            }
      }

      componentDidMount() {
            this.props.sortTasks();
      }

      chooseCategory = (value) => {
            this.setState({
                  label: value
            })
      }

      chooseName = (value) => {
            this.setState({
                  text: value,
                  error: false,
            })
      }

      addItem = () => {
            if (this.state.text.length === 0) {
                  this.setState({
                        errorText: 'You should write something'
                  })
            } else {
                  let newItem = Object.assign({}, {...this.state, isDone: false});
                  this.props.addTask(newItem);
            }
      }

      changeStatus = (item) => {
            item['isDone'] = !item['isDone']
            this.props.editTask(item);
      }

      changeFilter = (category) => {
            if (this.state.filter === category) {
                  this.setState({
                        filter: false,
                  })
            } else {
                  this.setState({
                        filter: category,
                  })
            }
      }

      render() {
            let arrayForView = !this.state.filter ? this.props.tasksList : this.props.tasksList.filter(item => item.label === this.state.filter)
            let {filter} = this.state
            return (
                <div className="App">
                      <div className='controls-line'>
                            <select onChange={(e) => this.chooseCategory(e.target.value)}>
                                  <option value='Work'>Work</option>
                                  <option value='Family'>Family</option>
                                  <option value='Personal'>Personal</option>
                            </select>
                            <input type='text' onChange={(e) => this.chooseName(e.target.value)}/>
                            <button type='button' onClick={this.addItem} className='button add'>Add item</button>
                      </div>
                      {this.state.errorText && <p className='error'>{this.state.errorText}</p>}
                      <div className='filters-line'>
                            <button type='button' className={filter === 'Work' ? 'button work active' : 'button work'}
                                    onClick={() => this.changeFilter('Work')}>Work
                            </button>
                            <button type='button'
                                    className={filter === 'Family' ? 'button family active' : 'button family'}
                                    onClick={() => this.changeFilter('Family')}>Family
                            </button>
                            <button type='button'
                                    className={filter === 'Personal' ? 'button personal active' : 'button personal'}
                                    onClick={() => this.changeFilter('Personal')}>Personal
                            </button>
                      </div>
                      <div className='tasks-container'>
                            {arrayForView.length > 0 ? arrayForView.map((item, i) => <TaskComponent task={item}
                                                                                                    id={item.text}
                                                                                                    key={item.text}
                                                                                                    changeStatus={(item) => this.changeStatus(item)}/>) :
                                <p>Sorry, you don't have tasks</p>}
                      </div>
                </div>
            );
      }

}

const mapStateToProps = (state) => {
      return {
            tasksList: state.tasks,
      }
}


export default connect(mapStateToProps, {addTask, editTask, sortTasks})(App);
