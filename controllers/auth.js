const { response, request } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req = request, res = response) => {
    const { user, password } = req.body;

    try {
        let usuario = await User.findOne({ user: user });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                message: 'Ya existe ese usuario'
            });
        }

        usuario = new User(req.body);
        console.log(usuario)

        //cifrar contrasena
        const cadenaAleatoria = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, cadenaAleatoria);

        await usuario.save();

        res.status(201).json({
            ok: true,
            user: usuario.user
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
        
    }
};

const loginUser = async (req = request, res = response) => {
    const { user, password } = req.body;

    try {
        const usuario = await User.findOne({ user: user });

        if (!usuario) {
            return res.status(400).json({ 
                ok: false,
                message: 'No existe ese usuario'
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'Contrasena incorrecta'
            })
        }
        res.json({
            ok: true,
            user: usuario.user,
            id: usuario.unique_id
        }); 

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const updateUser = async (req = request, res = response) => {
    const { user } = req.params; // ID del usuario desde los parámetros de la URL
    const updates = req.body; // Objeto con los campos y valores a actualizar

    try {
        // Buscar usuario por ID
        const usuario = await User.findOne({ user: user });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                message: 'Usuario no encontrado'
            });
        }

        // Actualizar dinámicamente los campos
        for (const key in updates) {
            if (updates.hasOwnProperty(key)) {
                usuario[key] = updates[key];

                if(usuario[key] == 'foto'){
                    const buffer = Buffer.from(updates[key], 'base64')
                    usuario[key] = buffer
                }
            }
        }

        // Guardar los cambios
        await usuario.save();

        res.status(200).json({
            ok: true,
            message: 'Usuario actualizado correctamente',
            user: usuario
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getUser = async (req = request, res = response) => {
    const { user } = req.params; // Nombre de usuario desde los parámetros de la URL

    try {
        // Buscar usuario por nombre de usuario
        const usuario = await User.findOne({ user: user });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json({
            ok: true,
            user: usuario
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};


module.exports = {
    loginUser,
    createUser,
    updateUser,
    getUser
}