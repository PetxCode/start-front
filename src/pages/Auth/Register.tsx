import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Register = () => {
  return (
    <div>
      <Main>
        <Card
          buttonTitle="Sign up"
          title="Register"
          inputTitle="Email"
          inputTitle1="Password"
          inputTitle2="Confirm"
          sign={true}
          request={true}
          onClick={() => {
            console.log(" I am");
          }}
          text="Aleady have an Account"
          route="Sign in Now"
          path="/signin"
        />
      </Main>
    </div>
  );
};

export default Register;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
