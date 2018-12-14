import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/fetchPosts';
import { bindActionCreators } from 'redux';

class PostsList extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchPosts();

    }

    render() {
        return (
            <div>
                PostsList
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
    return { fetchPosts: bindActionCreators(fetchPosts, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);