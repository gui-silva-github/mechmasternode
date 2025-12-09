import { OS } from "../models/os.js"

export const getAddOS = (req, res, next) => {
    res.render('admin/edit-os', {
        pageTitle: 'Adicionar OS',
        path: '/admin/add-os',
        editing: false,
        availableImages: OS.getAvailableImages()
    })
}

export const postAddOS = (req, res, next) => {
    const { modelo, marca, cliente, cpf, placa, descricaoOS, precoOS, imagem } = req.body;

    const os = new OS(null, modelo, marca, cliente, cpf, placa, descricaoOS, precoOS, imagem)
    os.save()
    res.redirect('/')
}

export const getAllOS = (req, res, next) => {
    OS.fetchAll(os => {
        res.render('admin/os', {
            pageTitle: 'Admin OS',
            path: '/admin/os',
            os
        })
    })
}

export const getEditOS = (req, res, next) => {
    const id = req.params.id
    OS.findById(id, osItem => {
        if (!osItem) return res.redirect("/");
        res.render('admin/edit-os', {
            pageTitle: 'Editar OS',
            path: '/admin/edit-os',
            editing: true,
            os: osItem,
            availableImages: OS.getAvailableImages(),
        })
    })
}

export const postEditOS = (req, res, next) => {
    const { id, modelo, marca, cliente, cpf, placa, descricaoOS, precoOS, imagem } = req.body;

    const editOS = new OS(id, modelo, marca, cliente, cpf, placa, descricaoOS, precoOS, imagem)
    editOS.save()
    res.redirect('/admin/os')    
}

export const postDeleteOS = (req, res, next) => {
    const { id } = req.body
    OS.deleteById(id)
    res.redirect('/admin/os')
}

