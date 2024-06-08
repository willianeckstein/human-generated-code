'use client';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpFormValues } from './types';
import FormField from '../FormField';
import FormSelect from '../FormSelect';
import type { FormSelectOption } from '../FormSelect';
import { validationSchema } from './utils';

const genderSelectOptions: Array<FormSelectOption> = [
  { value: 'male', label: 'masculino' },
  { value: 'female', label: 'Feminino' },
];

const SignUpForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ISignUpFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label='Nome Completo'
        name='fullName'
        register={register}
        error={errors.fullName}
      />
      <FormSelect
        label='Sexo'
        name='gender'
        options={genderSelectOptions}
        register={register}
      />
      <FormField
        label='Telefone'
        name='phone'
        register={register}
        error={errors.phone}
      />
      <FormField
        label='E-mail'
        name='email'
        register={register}
        error={errors.email}
      />
      <FormField label='Rua' name='street' register={register} />
      <FormField label='Número' name='number' register={register} />
      <FormField label='Complemento' name='complement' register={register} />
      <FormField
        label='CEP'
        name='zipCode'
        register={register}
        error={errors.zipCode}
      />
      <FormField label='Bairro' name='neighborhood' register={register} />
      <FormField label='Cidade' name='city' register={register} />
      <FormField label='Estado' name='state' register={register} />
      <button type='submit'>Cadastrar</button>
    </form>
  );
};

export default SignUpForm;

