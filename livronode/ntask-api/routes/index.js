module.exports = app =>{
/**
 * @api {get} / API Status
 * @apiGroup Status
 * @apiSuccess {String} status Mensagem de status da API
 * @apiSuccessExample {json} Sucesso
 *  HTTP/1.1 200 ok
 *  {"Status": "nTask API"}
 */
    app.get('/', (res, req) =>{
        // res.json({ status: 'Ntask API'})
    });
};