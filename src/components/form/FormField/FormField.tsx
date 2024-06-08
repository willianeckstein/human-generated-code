import React from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
}) => {
  return (
    <div>
      <label>{label}:</label>
      <input type={type} {...register(name)} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormField;

