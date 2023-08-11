import { useState } from "react";
import style from "./interactive-playground.module.css";
import Form from "components/form";
import { TFormValues } from "types";

const InteractivePlayground = () => {
  const [controlled, setControlled] = useState<boolean>(true);
  const [data, setData] = useState<TFormValues>({});
  return (
    <div className={style.interactive_playground}>
      <button
        onClick={() => {
          setControlled((prev) => !prev);
          setData({});
        }}
        className={style.button}
      >
        {controlled ? "change to uncontrolled" : "change to controlled"}
      </button>
      {Object.keys(data).length !== 0 ? (
        <div className={style.terminal}>
          <div className={style.terminal_header}>
            <div
              className={`${style.terminal_button} ${style.red}`}
              onClick={() => setData({})}
            />
            <div className={`${style.terminal_button} ${style.yellow}`} />
            <div className={`${style.terminal_button} ${style.green}`} />
          </div>
          <div className={style.terminal_content}>
            <pre className={style.terminal_ext}>
              <span className={style.user}>yacn9@ubuntu:</span>
              <span className={style.directory}>~</span>
              <span className={style.prompt}>$</span> ...
              <br />
              data: {"\u007B"}
              <p className={style.json_output}>
                {Object.entries(data).map(([key, value], index) => (
                  <span key={index}>
                    <span className={style.json_key}>{`"${key}"`}</span>:{" "}
                    <span className={style.json_value}>
                      {JSON.stringify(value, null, 2)}
                    </span>
                    <br />
                  </span>
                ))}
              </p>
              {"\u007D "}
              <br />
              <span className={style.user}>yacn9@ubuntu:</span>
              <span className={style.directory}>~</span>
              <span className={style.prompt}>$</span>
              <span className={style.desc}>
                to use form again use red bottom
              </span>
              <br />
            </pre>
          </div>
        </div>
      ) : (
        <Form isControlled={controlled} getData={(value) => setData(value)} />
      )}
    </div>
  );
};

export default InteractivePlayground;
