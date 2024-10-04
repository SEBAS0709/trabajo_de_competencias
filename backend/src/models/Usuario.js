const {Schema, model} = require("mongoose")

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
})
module.exports = model("Usuario", usuarioSchema)

