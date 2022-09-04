import spinner from '../assets/spinner.gif';
import { SubmitWrapper } from '../styled';

function SubmitButton({ isLoading, text }) {
  return (
    <SubmitWrapper>
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <img
            style={{ width: "1rem", height: "1rem" }}
            src={spinner}
            alt="Proceeding, please wait..."
          />
        ) : text}
      </button>
    </SubmitWrapper>
  )
}

export default SubmitButton;