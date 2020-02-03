// HOC - Higher Order Component
import React from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {

    class ComposedComponent extends React.Component {

        // ------------- moved here (to HOC) -------------
        componentDidMount() {
            this.shouldNavigateAway()
        }

        componentDidUpdate() {
            this.shouldNavigateAway()
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/') // takes user back to root route
            }
        }
        // ------------- moved here (to HOC) -------------

        render() {
            return <ChildComponent {...this.props} /> // passes THIS HOC's props down to <ChildComponent />
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth }
    }


    return connect(mapStateToProps)(ComposedComponent)
}



