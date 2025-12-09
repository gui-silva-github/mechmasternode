export const get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Página não Encontrada', path: '/404' })
}