module.exports = app =>{
    const tasks = app.models.tasks;

    app.get('/tasks', (req, res) =>{
        tasks.findAll({}, (tasks) =>{
            res.json({tasks});
        });
    });
};