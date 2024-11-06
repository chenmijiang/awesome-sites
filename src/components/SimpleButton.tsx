import styled from "styled-components";

type Props = {
  children: any;
};

const SimpleButton = (props: Props) => {
  return (
    <SimpleButtonContainer className="m-btn bg-black">
      {props.children}
    </SimpleButtonContainer>
  );
};

const SimpleButtonContainer = styled.div`
  border-radius: 20px;
  padding: 7px 15px;
  color: white;
  text-align: center;
  display: inline-block;
  margin: 0 5px;
`;

export default SimpleButton;
