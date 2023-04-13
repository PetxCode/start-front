import React, { useState } from "react";
import styled from "styled-components";
import { iInput } from "../types";

const InputData: React.FC<iInput> = ({
  inputTitle,
  inputTitle1,
  inputTitle2,
  sign,
  request,
  //   email,
  password,
  userName,
  //   setEmail,
  setUserName,
  setPassword,
  onChange,
}) => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Field>
        <Form>
          <Input
            placeholder={inputTitle}
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          {sign ? (
            <Input
              placeholder={inputTitle1}
              value={password}
              onChange={onChange}
            />
          ) : null}
          {request ? (
            <Input
              placeholder={inputTitle2}
              value={userName}
              onChange={onChange}
            />
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
