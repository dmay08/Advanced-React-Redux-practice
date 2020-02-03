import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import './CommentBox.scss'
import requireAuth from '../components/requireAuth'

class CommentBox extends React.Component {

    state = {
        comment: ''
    }

    // componentDidMount() {
    //     this.shouldNavigateAway()
    // }

    // componentDidUpdate() {
    //     this.shouldNavigateAway()
    // }

    // shouldNavigateAway() {
    //     if (!this.props.auth) {
    //         this.props.history.push('/') // takes user back to root route
    //     }
    // }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault() // prevent page from reloading
        this.props.saveComment(this.state.comment)  // call action creator
        this.setState({ comment: '' }) // Clear out input 
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

// function mapStateToProps(state) {
//     return { auth: state.auth }
// }

// export default connect(mapStateToProps, actions)(CommentBox) 
export default connect(null, actions)(requireAuth(CommentBox)) // used 'REQUIRE_AUTH!!' hoc!'

// ----- danny > moved mapState to HOC ('requireAuth')