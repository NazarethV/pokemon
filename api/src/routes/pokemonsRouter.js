const { Router } = require('express')

const { getPokemons } = require('../handlers/getPokemons')
const { getPokemonID } = require('../handlers/getPokemonID')
const { postPokemon } = require('../handlers/postPokemon')

const pokemonsRouter = Router();
//Ya viene con '/pokemons' de index.js  --> routes

//Ruta para traer driver por ID
pokemonsRouter.get('/:id', getPokemonID) // '/pokemons/?id'

//Ruta para traer todos los pokemones
pokemonsRouter.get('/', getPokemons) // '/pokemons'

//Ruta para traer pokemon por Nombre
pokemonsRouter.get('/name?="..." ', getPokemons) // "/drivers/name?='...' "

//Ruta para crear pokemon
pokemonsRouter.post('/', postPokemon) // '/pokemons'


module.exports = pokemonsRouter;
