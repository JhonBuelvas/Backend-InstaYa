const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const { token } = req.headers;

  if (token) {
    jwt.verify(token, 'secreto', (error, data) => {
      if (error) return res.status(400).json({ mensaje: 'Token invalido' });

      req.user = data;
      next();
    });
  } else {
    res.status(400).json({ mensaje: 'Debes enviar un token' });
  }
};

module.exports = auth;