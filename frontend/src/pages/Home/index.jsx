import React, { memo } from "react";
import Select from "react-select";
import SelectWrapper from "../../components/Select";
import {
  Button,
  Container,
  Field,
  FieldsWrapper,
  Input,
  Label,
} from "./../../assets/base";

function Home() {
  return (
    <Container>
      <FieldsWrapper>
        <Field>
          <Label>Email</Label>
          <Input />
        </Field>

        <Field>
          <Label>Usuário</Label>
          <Input />
        </Field>

        <Field>
          <Label>Tipo de Chat</Label>
          <SelectWrapper />
        </Field>

        <Field alignItems="center">
          <Button>Entrar</Button>
        </Field>
      </FieldsWrapper>
    </Container>
  );
}

export default memo(Home);
