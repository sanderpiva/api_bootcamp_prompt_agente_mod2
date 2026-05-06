const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required()
});

const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = {
  validateProduct
};