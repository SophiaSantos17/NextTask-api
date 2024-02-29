// função exportada que recebe um esquema de validação como argumento
export function validationSchemaMiddleware(schema) {
  // retorna uma função de middleware que será executada nas requisições
  return (req, res, next) => {
      // valida os dados do corpo da requisição usando o esquema fornecido
      const { error } = schema.validate(req.body, { abortEarly: false });

      if (error) {
          // mapeia os detalhes dos erros e os armazena em um array
          const errors = error.details.map((detail) => detail.message);
          // retorna uma resposta com status 422 (Unprocessable Entity) e os erros de validação
          return res.status(422).send(errors);
      }
      // se não houver erro de validação, chama o próximo middleware na cadeia
      next();
  };
}