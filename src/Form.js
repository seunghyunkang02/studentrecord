import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        sid: '',
        major: '',
        year:'',
    }

    state = this.initialState
    //setting the state of the form to this.state
    
    //this is a function that will run every time a change is made to an input
    //the event will be passed and set the state of Form to have name(key) and value of inputs
    handleChange = (event) => {
        const { name, value } = event.target
      
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, sid, major, year } = this.state;
      
        return (
          <form>
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} 
            />
            <label htmlFor="sid">Student ID</label>
            <input
              type="text"
              name="sid"
              id="sid"
              value={sid}
              onChange={this.handleChange} 
            />
            <label htmlFor="major">Major</label>
            <input
              type="text"
              name="major"
              id="major"
              value={major}
              onChange={this.handleChange} 
            />
            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              id="year"
              value={year}
              onChange={this.handleChange} 
            />
            <input type="button" value="Submit" onClick={this.submitForm} />
          </form>
        );
    }
}
export default Form;

