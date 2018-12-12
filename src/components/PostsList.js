import React from 'react';
import { connect } from 'react-redux';

class PostsList extends React.Component {
    render() {
        console.log(this.props);
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

export default connect(mapStateToProps)(PostsList);