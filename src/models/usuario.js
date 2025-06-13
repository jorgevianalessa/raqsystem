const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Está tabela cadastrará os usuários/clientes do do site e administradores do site
const usuario = new Schema ( {
    nome:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        //minlength:[6,'email must be at least 6'],
       //unique:true
    },
    senha:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        required:false
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
       type:Date,
       required:false
   }
})

mongoose.model("usuarios",usuario)