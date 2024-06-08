import * as yup from 'yup';
import { ISignUpFormValues } from './types';

export const validationSchema = yup.object<ISignUpFormValues>().shape({
  fullName: yup.string().required('Campo obrigatório'),
  phone: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  zipCode: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
});

