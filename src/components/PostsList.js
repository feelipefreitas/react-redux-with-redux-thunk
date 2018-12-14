import React from 'react';
import styled from 'styled-components';

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
            return <PostComp key={ post.id }>
                <p><strong>{ post.title }</strong></p>
                <p>{ post.body }</p>
                <UserHeader userId={ post.userId } />
            </PostComp>
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

const PostComp = styled.div`
    border: 1px solid black;
    margin-bottom: 5px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);