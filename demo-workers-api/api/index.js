const db = require('../db/db')
const{
    exceptionFieldIsEmpty,
    exceptionFieldNullOrUndefined,
    exceptionFieldValueLessToType
} = require('./error')

const bcrypt = require('bcrypt')

module.exports = app => {

    const cryptograph = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }



    const signUp = async(req, res) => {
        
        const data={
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        try{
            exceptionFieldNullOrUndefined(data.username, 'username is undefined or null')
            exceptionFieldIsEmpty(data.username.trim(), 'username can not be empty')
            exceptionFieldNullOrUndefined(data.email, 'email is undefined or null')
            exceptionFieldIsEmpty(data.email.trim(), 'email can not be empty')
            exceptionFieldNullOrUndefined(data.password, 'password is undefined or null')
            exceptionFieldIsEmpty(data.password.trim(), 'invalid password')
            exceptionFieldValueLessToType(data.password.trim(), 'password must be greather than 4')
          }catch(error){
            return res.status(400)
                      .json({
                        error: error
            })
        }

        const clientAlreadyExist=await knex_I.where('email', data.email)
                                             .from('administrator')
                                             .first()

        if(clientAlreadyExist) return res.status(400)
                                         .json({  msg: 'email already exists' }) 
                                         
        data.password=cryptograph(data.password)

        await knex_I.insert(data)
                    .from('administrator')
                    .then(_=>{
                            res.status(201)
                               .json({
                                msg: 'user created'
                            })
                     }).catch(_=>res.status(500)
                                    .json({
                                        msg: 'sorry, ocurred an error with server' 
                     }))
    }



    const signIn = async(req, res) => {

    }



    const getData = async(req,res) => {
        await db('workeradmin')
                    .select('*')
                    .then(data   => res.status(200).json(data))
                    .catch(err   => res.status(500).json(err) )
    }



    const getDataById = async(req,res) => {
        const { id } = req.params

        await db('workeradmin')
                    .where('id',id)
                    .select(['workername',
                             'workerjob',
                             'workersalary',
                             'workersector'])
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json(err) )
    }



    const getDataByName = async(req,res) => {
        const { workername } = req.params

        await db('workeradmin')
                        .where('workername', workername)
                        .select('*')
                        .then(data => res.status(200).json(data))
                        .catch(err => res.status(500).json(err) )
    }



    const postData = async(req,res) => {
        const { workername, workerjob, workersalary, workersector } = req.body

        if( !workername || !workerjob || !workersalary || !workersector ) return res.status(400).json({msg: "The fields value can't be empty!"})
    
        return await db('workeradmin')
                        .insert({ workername, 
                                  workerjob, 
                                  workersalary, 
                                  workersector })
                        .then(_      => res.status(201).json({msg: 'data inserted with success!'}))
                        .catch(err   => res.status(400).json(err) )
    }



    const putData = async(req,res) => {
        const { id } = req.query
        const { workername, workerjob, workersalary, workersector } = req.body

        if( !workername || !workerjob || !workersalary || !workersector ) return res.status(400).json({msg: "The fields value can't be empty!"})
        
        return await db('workeradmin')
                        .where('id',id)
                        .update({ workername, 
                                  workerjob, 
                                  workersalary, 
                                  workersector })
                        .then(_      => res.status(201).json({msg: 'data updated with success!'}))
                        .catch(err   => res.status(400).json(err) )
    }



    const deleteData = async(req,res) => {
        const { id } = req.query

         return await db('workeradmin')
                        .where('id',id)
                        .delete()
                        .then(_      => res.status(204).json())
                        .catch(err   => res.status(400).json(err) )    
    }

    return {
        signUp,
        signIn,
        getData , 
        getDataById , 
        getDataByName , 
        postData , 
        putData , 
        deleteData 
    }

}