import { useState } from "react";
import style from "./interactive-playground.module.css";
import Form from "components/form";

const InteractivePlayground = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isControlled, setIsControlled] = useState<boolean>(true);
  return (
    <div className={style.interactive_playground}>
      {submitted ? (
        <>s</>
      ) : (
        <Form
          isControlled={isControlled}
          getData={(data) => console.log(data)}
        />
      )}
    </div>
  );
};

export default InteractivePlayground;
