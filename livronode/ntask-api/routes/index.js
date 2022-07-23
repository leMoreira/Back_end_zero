module.exports = app =>{
    app.get('/', (res, req) =>{
        res.json({ status: 'Ntask API'})
    });
};