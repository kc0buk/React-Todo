import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            itemText: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state.itemText)
        this.setState({
            itemText: ''
        })
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
                onChange={this.handleChange}
                type='text'
                name='itemText'
                value={this.state.itemText}
                placeholder='Add new item...'
            />
            <button>Add Todo</button>
        </form>
    )
}

}

export default TodoForm