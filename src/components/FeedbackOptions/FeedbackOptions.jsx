import { StyledButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function Buttons({ btnTitles, method }) {
  return (
    <>
      {btnTitles.map(title => {
        const Capitalizedtitle = title.charAt(0).toUpperCase() + title.slice(1);
        return (
          <StyledButton key={title} id={title} type="button" onClick={method}>
            {Capitalizedtitle}
          </StyledButton>
        );
      })}
    </>
  );
}

Buttons.propTypes = {
  btnTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.func.isRequired,
};
