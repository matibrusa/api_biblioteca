const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser
} = require('../controllers/usersController');

// Ruta para obtener la lista de usuarios
router.get('/', getAllUsers);

// Ruta para obtener los detalles de un usuario por su ID
router.get('/:id', getUserById);

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para editar la información de un usuario existente
router.put('/:id', updateUserById);

// Ruta para borrar un usuario por su ID
router.delete('/:id', deleteUser);

// Exportar el enrutador de usuarios
module.exports = router;

