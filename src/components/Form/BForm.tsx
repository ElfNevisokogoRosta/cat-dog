import React, { FormEvent, useState } from "react";
import { FormProps, Input } from "../../utils/types";
import BInput from "./BInput";

const BForm: React.FC<FormProps<Input>> = ({ inputs, onSubmit, className, buttons }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const inputChangeHandler = (value:string, field: string)=>{
      const data = {[field]: value}
      setFormData((formData)=>{return {...formData, ...data}})
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData)
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={className}>
        {inputs.map((i) => (
          <BInput key={i.name} input={i} onInputChange={inputChangeHandler}/>
        ))}
          {buttons}
      </div>
    </form>
  );
};

export default BForm;
