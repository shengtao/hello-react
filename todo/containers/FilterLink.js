import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/*
If your mapStateToProps function is declared as taking two parameters,
it will be called with the store state as the first parameter and
the props passed to the connected component as the second parameter,
and will also be re-invoked whenever the connected component receives new props as determined by shallow equality comparisons.
(The second parameter is normally referred to as ownProps by convention.)
 */
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink