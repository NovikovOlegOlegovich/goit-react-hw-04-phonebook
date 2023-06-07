import PropTypes from 'prop-types';
import { Label, FindInput } from './Filter.styled';

export default function Filter({ filter, filterHendler }) {
  return (
    <Label>
      Find contacts by name
      <FindInput
        type="text"
        value={filter}
        onChange={filterHendler}
      ></FindInput>
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterHendler: PropTypes.func.isRequired,
};
