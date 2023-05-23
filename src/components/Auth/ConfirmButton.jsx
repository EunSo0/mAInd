import styled from "styled-components";

function ConfirmButton(buttonTitle, buttonHandler, isValidation = true) {
  return (
    <Button onClick={buttonHandler} disabled={!isValidation}>
      {buttonTitle}
    </Button>
  );
}

const Button = styled.button`
  min-width: 7.2rem;
  height: 4.2rem;
  margin-left: 0.8rem;
  font-size: 1.4rem;

  background: ${(props) => (props.disabled ? `#BDBDBD` : `#319CEA`)};
  border-radius: 6px;

  border: none;
  color: #fff;
`;

export default ConfirmButton;
