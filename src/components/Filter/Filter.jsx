import PropTypes from 'prop-types';
import s from '../AddContact/Form.module.css'

export function Filter({onFilter, value}) {
    return (
        <form>
            <label>
                <input type='text' className={s.contactInput} value={value} placeholder="Filter" onChange={onFilter} />
            </label>
        </form>
    )

}
// (e) => onFilter(e.currentTarget.value)
Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}