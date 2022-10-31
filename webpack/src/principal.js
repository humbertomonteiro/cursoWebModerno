//const Pessoa = require('./pessoa') //sistema de modulos do comuns js
import Pessoa from "./pessoa" //sistema de modulos do ecma script
import './modulos/moduloA'
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())
