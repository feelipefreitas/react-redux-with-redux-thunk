import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/fetchPosts';
import fetchUsers from '../actions/fetchUsers';
import { bindActionCreators } from 'redux';

class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers(1);
    }

    renderPosts = posts => {
        return posts.map(post => {
            return <div key={ post.id }>
                <p><strong>{ post.title }</strong></p>
                <p>{ post.body }</p>
            </div>
        });
    };

    render() {
        const {posts} = this.props.posts;
        return (
            <div>
                { this.renderPosts(posts) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts, users: state.users };
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchPosts: bindActionCreators(fetchPosts, dispatch),
        fetchUsers: bindActionCreators(fetchUsers, dispatch) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);