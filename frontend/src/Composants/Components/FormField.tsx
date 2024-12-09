import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded bg-white text-black"
      />
    </div>
  );
};

export default FormField;
