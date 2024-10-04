const usuarioCtrl =  {}

const Usuario = require("../models/Usuario")

usuarioCtrl.getUsu = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsu = async (req, res) => {
    const {nombre, apellido} = req.body;
    const newUsu = new Usuario({
        nombre: nombre,
        apellido: apellido,
    })
    await newUsu.save();
    res.json({message: "el usuario a sido guardado"})
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
    
}
usuarioCtrl.deleteUsu = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: "usuario a sido eliminado"})
    
}

usuarioCtrl.updateUsu = async (req, res) => {
    const {nombre, apellido} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
    })
    res.json({message: "el usuario a sido actualizado"})
}
module.exports =  usuarioCtrl;