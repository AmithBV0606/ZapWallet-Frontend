import React from "react";

function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>

      <input
        placeholder={placeholder || ""}
        className="w-full px-2 py-1 border rounded border-sky-600 outline-none"
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;