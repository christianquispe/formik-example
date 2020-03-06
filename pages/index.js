import { Formik } from "formik";
import Head from "next/head";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(8, "Por favor ingresa como mínimo 8 caracteres")
    .max(12, "Por favor ingresa como máximo 12 caracteres")
    .required("Por favor ingresa como mínimo 8 caracteres"),
  email: Yup.string()
    .email(8, "Por favor ingresa como mínimo 8 caracteres")
    .max(112, "Por favor ingresa como máximo 12 caracteres")
    .required("Por favor ingresa como mínimo 8 caracteres")
});

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Formik
          initialValues={{ name: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm(3);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({
            isSubmitting,
            handleSubmit,
            values,
            handleChange,
            touched,
            handleBlur,
            errors
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter you name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? "has-error" : null}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter you email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? "has-error" : null}
                />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </main>

      <footer>
        <p>This is a example </p>
      </footer>
      <style jsx>{`
        .has-error {
          border-color: red;
        }
      `}</style>
    </div>
  );
};

export default Home;
