import React from "react";
import style from "./technical-insights.module.css";

const TechnicalInsights = () => {
  return (
    <div className={style.technical_insights}>
      <h2 className={style.heading2}>
        Technical Insights: Exploring the useForm Custom Hook
      </h2>
      <p className={style.paragraph}>
        In this section, we'll delve into the inner workings of the{" "}
        <code>useForm</code> custom hook. This hook is designed to simplify the
        handling of controlled and uncontrolled components within forms,
        offering a seamless experience for developers working with forms in
        React applications.
      </p>
      <h3 className={style.heading3}>Controlled and Uncontrolled Components</h3>
      <p className={style.paragraph}>
        Before we dive into the technical details, let's briefly touch on the
        concept of controlled and uncontrolled components in React forms.
        Controlled components are those where React manages the state of the
        form inputs, while uncontrolled components leave the state management to
        the DOM. The <code>useForm</code> hook elegantly handles both scenarios,
        providing flexibility and compatibility across various use cases.
      </p>
      <h3 className={style.heading3}>Hook Overview</h3>
      <p className={style.paragraph}>
        The <code>useForm</code> hook encapsulates the logic for managing form
        inputs, values, and validations. Let's take a closer look at its key
        features and benefits:
      </p>
      <ul className={style.li_container}>
        <li className={style.li}>
          <strong>Customizable Validation:</strong> The hook supports
          integration with the Yup library for validation using schemas. You can
          pass a validation schema to the hook to ensure consistent and accurate
          data entry.
        </li>
        <li className={style.li}>
          <strong>State Management:</strong> The hook efficiently manages the
          form state, whether it's for controlled or uncontrolled components. It
          updates the state in response to user interactions, ensuring a smooth
          user experience.
        </li>
        <li className={style.li}>
          <strong>Dynamic Error Handling:</strong> The hook's error handling
          mechanism automatically displays validation errors in real-time. When
          an input value changes, the hook validates the input and updates the
          error state accordingly.
        </li>
      </ul>
      <h3 className={style.heading3}>Technical Details</h3>
      <p className={style.paragraph}>
        The <code>useForm</code> hook employs a combination of state management
        and validation techniques to achieve its functionality. Here's a brief
        overview of its core components:
      </p>
      <ul className={style.li_container}>
        <li className={style.li}>
          <strong>useState:</strong> The hook utilizes React's{" "}
          <code>useState</code> to manage the form values and errors. The{" "}
          <code>values</code> state tracks the current input values, while the{" "}
          <code>errors</code> state captures any validation errors.
        </li>
        <li className={style.li}>
          <strong>Refs for Uncontrolled Inputs:</strong> To manage uncontrolled
          components, the hook employs refs to reference input elements
          directly. This allows the hook to capture input values without relying
          on controlled state.
        </li>
        <li className={style.li}>
          <strong>Validation with Yup:</strong> The hook leverages the powerful
          Yup library to validate form values against predefined schemas. This
          ensures that data entered by users adheres to specified rules.
        </li>
      </ul>
    </div>
  );
};

export default TechnicalInsights;
