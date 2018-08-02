import React from 'react';

/**
 * 数据获取+渲染展示
 */
class CommentList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {comments: []};
    }

    componentDidMount () {
        // fetchSomeComments undefined
        fetchSomeComments(comments => this.setState({comments: comments}));
    }

    render () {
        return (
            <ul>
                {this.state.comments.map}(c => (
                    <li>{c.body} - {c.author}</li>
                ))}
            </ul>
        );
    }
}

export default CommentList;