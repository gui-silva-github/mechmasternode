import fs from "fs"
import path from "path"
import { pathFile } from "../util/path.js"
import { v4 as uuidv4 } from "uuid"

const p = path.join(
    pathFile,
    'data',
    'os.json'
)

const AVAILABLE_IMAGES = [
    "/cars/gol.webp",
    "/cars/argo.jpeg",
    "/cars/onix.webp",
    "/cars/hb20.webp",
    "/cars/cronos.webp",
    "/cars/logan.webp",
    "/cars/corolla.jpg",
    "/cars/civic.webp",
    "/cars/voyage.jpeg",
    "/cars/prisma.jpeg",
    "/cars/uno.webp",
    "/cars/fusca.webp",
    "/cars/celta.webp",
    "/cars/ka.webp",
    "/cars/clio.webp",
    "/cars/fox.jpg",
    "/cars/palio.jpg",
    "/cars/classic.jpg",
    "/cars/fiesta.webp",
    "/cars/santana.webp",
    "/cars/bmw.jpeg",
    "/cars/benz.webp",
    "/cars/a4.webp",
    "/cars/volvo.webp",
    "/cars/cayenne.webp",
    "/cars/evoque.jpg",
    "/cars/camaro.jpeg",
    "/cars/mustang.jpeg",
    "/cars/x5.webp",
    "/cars/q7.webp",
];

export const getOSFromFile = cb => {
    fs.readFile(p, (err, fileContent) =>  {
        if (err){
            cb([]);
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

export class OS {
    constructor(id, modelo, marca, cliente, cpf, placa, descricaoOS, precoOS, imagem){
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.cliente = cliente;
        this.cpf = cpf;
        this.placa = placa;
        this.descricaoOS = descricaoOS;
        this.precoOS = precoOS;
        this.imagem = imagem;
    }

    save(){
        getOSFromFile(os => {
            if (this.id){
                const existingIndex = os.findIndex(o => o.id === this.id)
                os[existingIndex] = this;
            } else {
                this.id = uuidv4()
                os.push(this)
            }
            fs.writeFile(p, JSON.stringify(os), err => {
                console.log(err)
            })
        })
    }

    static deleteById(id){
        getOSFromFile(os => {
            const updated = os.filter(o => o.id !== id)
            fs.writeFile(p, JSON.stringify(updated), err => {
                console.log(`OS não foi excluída, devido -> ${err}!`)
            })
        })
    }

    static fetchAll(cb){
        getOSFromFile(cb)
    }

    static findById(id, cb){
        getOSFromFile(os => {
            const item = os.find(o => o.id === id)
            cb(item)
        })
    }

    static getAvailableImages(){
        return AVAILABLE_IMAGES;
    }
}