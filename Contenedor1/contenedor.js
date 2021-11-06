
const { options } = require("./options/mysql.js")
const knex = require("knex")(options)

class producto {
    constructor(Knex) {
        this.Knex=Knex
    }

crear(){
        knex.schema.createTable("productos", table => {
        table.increments("id")
        table.string("name")
        table.integer("price")
    })
        .then(() => console.log("table created"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });

        knex.from("producto").del()
        .then(() => console.log("All producto deleted"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy()
        })
    }
ingresar(){
        const { options } = require("./options/mysql.js")
        const knex = require("knex")(options)
        const cars = [
            { name: "globo", price: 1000 },
            { name: "escuadra", price: 1000 },
            { name: "regla", price: 1000 },
       
        ]
        //Seleccionamos la tabla de autos e insertamos 5 filas con el método insert
        knex("producto").insert(producto)
            .then(() => console.log("data inserted"))
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                knex.destroy()
            })
        }
      borrar(){
        knex.from("cars").del()
    .then(() => console.log("All cars deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })
}

}