import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Escriba un email válido")
    .required("Este campo es requerido"),
  password: Yup.string()
    .min(10, "Escriba como minimo 10 caracteres")
    .max(20, "Escriba como máximo 20 caracteres")
    .required("Este campo es requerido")
});

const pagina = () => (
  <>
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{ email: "", password: "" }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={
                errors.email && touched.password ? "has-error" : undefined
              }
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <input
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "has-error" : undefined
              }
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </Formik>
    <style jsx>{`
      .has-error {
        border-color: red;
      }
    `}</style>
  </>
);
export default pagina;
