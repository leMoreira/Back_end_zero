<<<<<<< HEAD
module.exports = app =>{
    async function start(port){
        try{
            await app.authenticate();
            await app.db.sync();
            if (process.env.NODE_ENV !== 'test'){
                app.listen(port, () =>{
                    console.log(`NTask API - porta ${port}`);
                });
            }
        }catch(err){
            console.log('Erro de conexão com o banco de dados');
            console.error(err);
        }
    }

    start(app.get('port'));
=======



module.exports = app => {
  async function start(port) {
    try {
      await app.db.authenticate();
      await app.db.sync();
      if (process.env.NODE_ENV !== 'test') {
        
        app.listen(port, () => {
          console.log(`NTask API - porta ${port}`);
        });
      }
    } catch (err) {
      console.log('Erro de conexão com banco de dados.');
      console.error(err);
    }
  }

  start(app.get('port'));
>>>>>>> a9bf8e899dd3a809ebc987a4500df6bba9db6fe6
}