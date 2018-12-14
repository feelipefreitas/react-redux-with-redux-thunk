import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/fetchPosts';
import { bindActionCreators } from 'redux';

class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts = posts => {
        return posts.map(post => {
            return <div>
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
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
    return { fetchPosts: bindActionCreators(fetchPosts, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);