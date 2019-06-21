import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            post_title: null,
            post_desc: null,
            user_id: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);

    }

    handleChangeTitle = event => {
        this.setState({
            post_title: event.target.value
        })
    }

    handleChangeDesc = event => {
        this.setState({
            post_desc: event.target.value
        })
    }

    handleChangeId = event => {
        this.setState({
            user_id: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost/wordpress/wp-json/taskmanager/v0/tasks', {
            post_title: this.state.post_title,
            post_desc: this.state.post_desc,
            user_id: this.state.user_id
        })
            .then(function (response) {

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {

            });

    }

    render() {
        return (
            <section id="table">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="post_title">Title</label>
                        <input name="post_title" type="text" value={this.state.post_title} onChange={this.handleChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label for="post_dec">Description</label>
                        <input name="post_desc" type="text" value={this.state.post_desc} onChange={this.handleChangeDesc} />
                    </div>
                    <div className="form-group">
                        <label for="user_id">User</label>
                        <input name="user_id" type="text" value={this.state.user_id} onChange={this.handleChangeId} />
                    </div>

                    <input type="submit" value="Sumbit" />
                </form>
            </section>
        )
    }
}
