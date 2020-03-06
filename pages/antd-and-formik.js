import { Formik } from "formik";
import { Checkbox, Form, Input, InputNumber } from "formik-antd";
import React from "react";

function App() {
  return (
    <Formik initialValues={{ firstName: "", age: 20, newsletter: false }}>
      {({
        isSubmitting,
        handleSubmit,
        values,
        handleChange,
        touched,
        handleBlur,
        errors
      }) => (
        <Form>
          <Input name="firstName" placeholder="First Name" />
          <InputNumber name="age" min={0} />
          <Checkbox name="newsletter">Newsletter</Checkbox>
        </Form>
      )}
    </Formik>
  );
}
export default App;
