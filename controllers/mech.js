import { OS } from "../models/os.js";

export const getIndex = (req, res, next) => {
    OS.fetchAll(os => {
        res.render('os/index', {
            pageTitle: 'Ordens de Serviço',
            path: '/',
            os
        })
    })
}

export const getOS = (req, res, next) => {
    const id = req.params.id
    OS.findById(id, osItem => {
        if (!osItem) return res.redirect("/");
        res.render('os/detail', {
            pageTitle: 'Detalhes da OS',
            os: osItem,
            path: '/os'
        })
    })
}