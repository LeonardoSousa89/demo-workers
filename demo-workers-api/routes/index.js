module.exports = app => {
    app.get('/',app.api.index.getData)
    app.get('/:id',app.api.index.getDataById)
    app.get('/search/:workername',app.api.index.getDataByName)
    app.post('/',app.api.index.postData)
    app.post('/signup',app.api.index.postData.signUp)
    app.post('/signin',app.api.index.postData.signIn)
    app.put('/?',app.api.index.putData)
    app.delete('/?',app.api.index.deleteData)
}