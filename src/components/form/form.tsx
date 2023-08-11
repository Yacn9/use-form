import { useEffect } from "react";
import { useForm } from "hooks";
import style from "./form.module.css";
import * as yup from "yup";
import { IFormProps } from "types";

const Form = (props: IFormProps) => {
  const { isControlled, getData } = props;
  const schemaControlled = yup.object().shape({
    title: yup
      .string()
      .required("title is required")
      .min(4, "at least 4 characters needed"),
    slug: yup
      .string()
      .required("slug is required")
      .max(32, "slug can't have more than 32 characters")
      .matches(new RegExp(/^[a-z0-9-_]+$/), {
        message: "didn't match",
        excludeEmptyString: true,
      }),
  });
  const schemaUnControlled = yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .min(4, "at least 4 characters needed"),
    status: yup
      .string()
      .required("status is required")
      .max(32, "status can't have more than 32 characters")
      .matches(new RegExp(/^[a-z0-9-_]+$/), {
        message: "didn't match",
        excludeEmptyString: true,
      }),
  });
  const { values, handleChange, handleSubmit, errors, register, onReset } =
    useForm({
      validationSchema: isControlled ? schemaControlled : schemaUnControlled,
    });

  useEffect(() => {
    onReset();
    getData({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isControlled]);

  return (
    <div className={style.form_container}>
      {props.isControlled ? (
        <>
          <h2 className={style.title}>Controlled Form</h2>
          <form onSubmit={handleSubmit(getData)}>
            <label className={style.label}>
              Title:
              <input
                className={style.input}
                type="text"
                name="title"
                value={values?.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              {errors?.title && (
                <span className={style.error}>{errors.title.message}</span>
              )}
            </label>
            <label className={style.label}>
              Slug:
              <input
                className={style.input}
                type="text"
                name="slug"
                value={values?.slug || ""}
                onChange={(e) => handleChange("slug", e.target.value)}
              />
              {errors?.slug && (
                <span className={style.error}>{errors.slug.message}</span>
              )}
            </label>
            <button type="submit" className={style.button}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className={style.title}>Un Controlled Form</h2>
          <form onSubmit={handleSubmit(getData)}>
            <label className={style.label}>
              Name:
              <input
                className={style.input}
                type="text"
                name="name"
                defaultValue={values?.name || ""}
                ref={register("name")}
              />
              {errors?.name && (
                <span className={style.error}>{errors.name.message}</span>
              )}
            </label>
            <label className={style.label}>
              Status:
              <input
                className={style.input}
                type="text"
                name="status"
                defaultValue={values?.status || ""}
                ref={register("status")}
              />
              {errors?.status && (
                <span className={style.error}>{errors.status.message}</span>
              )}
            </label>
            <button type="submit" className={style.button}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
