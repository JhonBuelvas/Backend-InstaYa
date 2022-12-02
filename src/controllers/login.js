const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const login = async (req, res) => {
  const { email, Password } = req.body;

  user.findOne({ email }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: 'Usuario no encontrado' });
    }

    bcrypt.compare(Password, usuario.Password).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, name } = usuario;

        const data = {
          id,
          name,
        };

        const token = jwt.sign(data, 'secreto', {
          expiresIn: 86400 /* 24hs */,
        });

        res.json({
          mensaje: 'Usuario logeado correctamente',
          usuario: {
            id,
            name,
            token,
          },
        });
      } else {
        return res.json({ mensaje: 'Contraseña incorrecta' });
      }
    });
  });
};

module.exports = login;