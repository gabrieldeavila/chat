import React, { memo, useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import SelectWrapper from "../../components/Select";
import { GlobalContext } from "../../Context";
import {
  Button,
  Container,
  Field,
  FieldsWrapper,
  Input,
  Label,
} from "./../../assets/base";

function Home() {
  const navigate = useNavigate();

  const options = useMemo(
    () => [
      { label: "Os patonautas", value: "Os patonautas" },
      { label: "Patos rebeldes", value: "Patos rebeldes" },
      { label: "União dos patos", value: "União dos patos" },
    ],
    []
  );

  const [values, setValues] = useState({
    email: "",
    user: "",
    type: options[0].value,
  });

  // prettier-ignore
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    navigate("/chat", { state: values, replace: true });
  }, [values]);

  return (
    <Container>
      <FieldsWrapper onSubmit={handleSubmit}>
        <Field>
          <Label>Email</Label>
          <Input
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
            placeholder="Digite..."
            required
            type="email"
          />
        </Field>

        <Field>
          <Label>Usuário</Label>
          <Input
            onChange={(e) => {
              setValues({ ...values, user: e.target.value });
            }}
            placeholder="Digite..."
            required
            type="text"
          />
        </Field>

        <Field>
          <Label>Tipo de Chat</Label>
          <SelectWrapper
            onChange={(e) => setValues({ ...values, type: e.value })}
            options={options}
          />
        </Field>

        <Field alignItems="center">
          <Button type="submit">Entrar</Button>
        </Field>
      </FieldsWrapper>
    </Container>
  );
}

export default memo(Home);
