import React, { useContext, useState, useEffect } from "react";
import { Formik } from "formik";
import { helpHttps } from "../../helpers/helpHttps";
import Contexto from "../../context/Contexto";
import Loader from "../common/Loader";
import "../../styles/Form.css";

import Aos from "aos";
import "aos/dist/aos.css";
const ContactForm = () => {
  const { idioma } = useContext(Contexto);
  const language = idioma[2].language;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          comments: "",
        }}
        validate={(valores) => {
          let errors = {};
          let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
          let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
          let regexComments = /^.{1,255}$/;

          if (!valores.name) {
            errors.name = "Please enter a name";
          } else if (!regexName.test(valores.name)) {
            errors.name = "Only letters and spaces are allowed";
          }

          if (!valores.email) {
            errors.email = "Please enter a email";
          } else if (!regexEmail.test(valores.email)) {
            errors.email = "Wrong email";
          }
          if (!valores.subject) {
            errors.subject = "Please enter a subject";
          }
          if (!valores.comments) {
            errors.comments = "Please enter a comment";
          } else if (!regexComments.test(valores.comments)) {
            errors.comments = "Must not exceed 255 characters";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          setLoading(true);
          helpHttps()
            .post("https://formsubmit.co/ajax/said557@outlook.es", {
              body: valores,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then((res) => {
              setLoading(false);
              resetForm();
              window.location.hash = "#gracias";
            })
            .finally(() => {
              setTimeout(() => {
                window.location.hash = "#close";
              }, 3000);
            });
        }}
      >
        {/* render prop */}
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="contact-form box-shadow-1" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={idioma[language].FmName}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-aos="fade-up"
            />
            {touched.name && errors.name && (
              <p className="error">{errors.name}</p>
            )}

            <input
              type="email"
              id="email"
              name="email"
              placeholder={idioma[language].FmEmail}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-aos="fade-up"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={idioma[language].FmSubject}
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-aos="fade-up"
            />
            {touched.subject && errors.subject && (
              <p className="error">{errors.subject}</p>
            )}

            <textarea
              cols="50"
              rows="10"
              id="comments"
              name="comments"
              placeholder={idioma[language].FmComments}
              value={values.comments}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-aos="fade-up"
            />
            {touched.comments && errors.comments && (
              <p className="error">{errors.comments}</p>
            )}

            {
              <article id="gracias" className="modal">
                <div className="modal-content">
                  <article className="contact-form-response">
                    <h3>Thank you!</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
                      <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
                    </svg>
                  </article>
                </div>
              </article>
            }

            <input
              className="btn-2"
              type="submit"
              value={idioma[language].Send}
              data-aos="fade-up"
            />
            {loading && <Loader />}
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
