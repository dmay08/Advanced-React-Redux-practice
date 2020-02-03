import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import './CommentBox.scss'

class CommentBox extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() // prevent page from reloading
        // Todo = call action creator
        this.props.saveComment(this.state.comment)
        // Clear out input 
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div className="__outer-wrap">
                <div className="__form-wrap">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Add a comment</h4>
                        <textarea onChange={this.handleChange} value={this.state.comment} />
                        <button>Submit Comment</button>
                    </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox) 