import * as yup from "yup";

export const formDragonSchema = yup.object().shape({
  name: yup.string().required("O nome do dragão é obrigatório."),
  type: yup.string().required("O tipo do dragão é obrigatório."),
});
