import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FormSelectOption } from './types';

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<FormSelectOption>;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  register,
  name,
  options,
  error,
}) => {
  return (
    <div>
      <label>{label}:</label>
      <select {...register(name)}>
        <option value=''>Selecione</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormSelect;

