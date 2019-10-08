import React, {Component} from 'react';
import {BrowserRouter as render, Redirect} from "react-router-dom";
import '../App.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showAddForm: false,
            edit: {
                status: false,
                taskIndex: 0
            }
        }
    }
        //function to add item

        handleSubmit = (e) => {
            e.preventDefault();
            const items = e.target.items.value;
            let newItems = this.state.list;
            newItems.push(items)
            this.setState({
                list: newItems,

            });
            e.target.items.value = "";
        }

        //function to clear all

        clearAll = () => {
            this.setState({
                list: []
            })
        };

        //function to delete

        delete= (index)=>{
        const newItems = this.state.list.filter((element,id) => {
            if (id !== index) {
                return element;
            }
        });
        this.setState({
                list: newItems
        });
        };

        //function to edit item

        showAddForm = (action, i) => {
            console.log(action);
            if (action == "edit") {
                this.setState({
                    showAddForm: true,
                    edit: {
                        status: true,
                        taskIndex: i
                    }
                })
            }
            else
                this.setState(
                    {
                        showAddForm: true,
                        edit: {...this.state.edit, status: false}
                    },
                    () => console.log(this.state)
                );
        };
        task = "";
        handleChange = e => {
            if (!this.state.edit.status) this.task = e.target.value;
            else {
                let list = this.state.list;
                let taskIndex = this.state.edit.taskIndex;
                list[taskIndex] = e.target.value;
                this.setState({
                    list
                });
            }
        };

        addTask = e => {
            e.preventDefault();
            if (this.state.edit.status && this.task.length > 0) {
                let list = [...this.state.list, this.task];
                this.setState({
                    list: list,
                    showAddForm: false
                });
            }

            else {
                this.setState({
                    showAddForm: false,
                    edit: {
                        ...this.state.edit,
                        status: false
                    }
                });
            }
        };
        //main render function

        render()
        {
            return (
                <div className={'todo-container'}>
                    <h2>ADD TASK</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input name="items" className={"text-field"} placeholder="Enter task" required/>
                        <button type="submit" className={"form-btn"}>ADD</button>
                    </form>


                    <h2>TODO LIST</h2>
                    {(() => {
                        if (this.state.showAddForm)
                            return (
                                <form onSubmit={this.addTask}>
                                    <input
                                        autoFocus
                                        input="text"
                                        className="text-field"
                                        placeholder="Edit task"
                                        onChange={this.handleChange}
                                    />
                                    <input type="submit" value="Save" className={"form-btn"}/>
                                </form>
                            );
                    })()}
                    {this.state.list.map((list, index) => (
                        <div className="item">
                            <div className={"task"}>{list}</div>
                            <div className={"item-btn"}>

                                <button onClick={() => {this.showAddForm("edit",index)}} className={"btn-edit"}>
                                    <i className="fas fa-edit"> </i></button>

                                <button onClick={() => {
                                    this.delete(index)
                                }} className={"btn-del"}><i className="fas fa-trash-alt"> </i>
                                </button>

                            </div>

                        </div>)
                    )}
                    <button className="clearAll" onClick={this.clearAll}>Clear All</button>
                    <button className="logout" onClick={this.props.logout}>Log Out</button>

                </div>

            );
        }

    }

