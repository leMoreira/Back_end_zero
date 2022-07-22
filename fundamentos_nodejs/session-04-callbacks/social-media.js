const {
withCallbacks:{
    authenticate,
    listPosts,
    getPost
}
} = require('../helpers/social-media')



const firstPost = (username, password, callback) =>{

    authenticate(username, password, (errorAuth, token) =>{
        if(errorAuth){
            callback(errorAuth)
            return
        }

        listPosts(token, (errorList, posts) =>{
                if(errorList){
                    callback(errorList)
                    return
                }

                const firstpostId = posts[0].id // posso trocar o 0 por outro id 
                getPost(token, firstpostId, (errorPost, post)=>{
                    if(errorPost){
                        callback(errorPost)
                        return
                    }

                        // AE! Temos o POSt finalmente

                        callback(undefined, post)


                })


        })



    })

}

firstPost('staart', 'nodelife', (error, post) =>{
    if(error){
    console.log("Deu ruim", error)
    return
    } 

    console.log("Temos o post")
    console.log(post)
})