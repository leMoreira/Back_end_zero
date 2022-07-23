module.exports = app =>{
    app.get('/tasks', (res, req) =>{
        res.json({tasks:[
            { title: 'Fazer compras'},
            { Title: 'Consertar o PC'}
        ]});
    });
};