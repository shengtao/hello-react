// import CommentList from  './component-no-container';

// functional defined
const CommentList = props =>
    <ul>
        {props.comments.map(c => (
            <li>{c.body}—{c.author}</li>
        ))}
    </ul>

// class defined

/**
 * - separated our data-fetching and rendering concerns.
 * - made our CommentList component reusable
 * - given CommentList the ability to set PropTypes and fail loudly.
 */
class CommentListContainer extends React.Component{
    state = {comments: []};

    componentDidMount() {
        fetchSomeComments(comments =>
            this.setState({ comments: comments }));
    }

    render() {
        return <CommentList comments={this.state.comments} />
    }
}