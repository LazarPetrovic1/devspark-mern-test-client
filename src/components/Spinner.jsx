import spinner from '../assets/spinner.gif';
import { SpinnerWrapper, SpinnerImage } from '../styled';

const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerImage
      src={spinner}
      alt="Loading, please wait..."
    />
  </SpinnerWrapper>
);

export default Spinner;