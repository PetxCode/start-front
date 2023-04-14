import React, { useContext } from "react";
import styled from "styled-components";
import { iInput } from "../types";

const InputData: React.FC<iInput> = ({
  inputTitle,
  inputTitle1,
  inputTitle2,
  sign,
  request,
  password,
  userName,
  setUserName,
  setPassword,
  onChange,
}) => {
  return (
    <div>
      <Field>
        <Form>
          <Input placeholder={inputTitle} onChange={(e: any) => {}} />
          {sign ? (
            <Input placeholder={inputTitle1} onChange={(e: any) => {}} />
          ) : null}
          {request ? (
            <Input placeholder={inputTitle2} onChange={(e: any) => {}} />
          ) : null}
        </Form>
      </Field>
    </div>
  );
};

export default InputData;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid gray;
  height: 50px;
  width: 300px;
  margin: 5px 0;
  padding-left: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;
