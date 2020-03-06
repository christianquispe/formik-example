import { Col, Row } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input, SubmitButton } from "formik-antd";
import React from "react";
import * as Yup from "yup";

// This code can be add to prop validate of
//<FormItem validate={ValidateEmail}>
// ...
// </FormItem>
// const ValidateEmail = (value) => {
//   return value ? undefined : "Ingrese algo";
// };

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un email válido")
    .required("Es necesario esta campo"),
  password: Yup.string()
    .min(8, "Ingrese como mínimo 8 caracteres")
    .required("Es necesario esta campo")
});

function App() {
  return (
    <>
      <Row style={{ paddingTop: "100px" }} justify="center">
        <Col lg={12} md={18} sm={20} xs={24}>
          <Formik
            validationSchema={validateSchema}
            initialValues={{ email: "", password: "" }}
          >
            <Form>
              <FormItem name="email">
                <Input name="email" required={true} placeholder="Email" />
              </FormItem>
              <FormItem name="password">
                <Input name="password" placeholder="Password" />
              </FormItem>
              <FormItem name="submit">
                <SubmitButton disabled={false} type="primary">
                  Enviar
                </SubmitButton>
              </FormItem>
            </Form>
          </Formik>
        </Col>
      </Row>
    </>
  );
}
export default App;
