import useCopy from "@react-hook/copy";
import { ClipboardIcon } from "./Icons";

// input with copy button

function InputCopy({ text }) {
  const { copied, copy, reset } = useCopy(text);

  return (
    <div className="flex center">
      <input value={text} disabled />
      <button
        className="center"
        style={{
          width: "20px",
          height: "20px",
          padding: "5px",
          display: "flex",
        }}
        onClick={copy}
      >
        {copied === false ? (
          <div
            style={{
              gap: "10px",
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <ClipboardIcon />
          </div>
        ) : (
          "Copied"
        )}
      </button>
    </div>
  );
}

export default InputCopy;
