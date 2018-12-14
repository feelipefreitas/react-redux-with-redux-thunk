import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPostsUsers from '../actions/fetchPostsUsers';

import UserHeader from './UserHeader';

class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsUsers();
    }

    renderPosts = posts => {
        return posts.map(post => {
            return <div key={ post.id }>
                <p><strong>{ post.title }</strong></p>
                <p>{ post.body }</p>
                <UserHeader userId={ post.userId } />
            </div>
        });
    };

    render() {
        return (
            <div>
                { this.renderPosts(this.props.posts) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchPostsUsers: bindActionCreators(fetchPostsUsers, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);