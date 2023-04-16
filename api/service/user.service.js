const create = require('../../config/db.connection');
module.exports = {
    create: (data, callBack) => {
        console.log("creating table ");

        // create.query(
        //     "create table registration(firstName varchar(255),lastName varchar(255),gender varchar(255),email varchar(255),password varchar(255),number varchar(255))"
        // ),
        create.query(
            "insert into registration(firstName, lastName,gender,email,password,number)values(?,?,?,?,?,?)",
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    // get all user 
    getUsers: callBack => {
        create.query(
            `select firstName,lastName,gender,email,number from registration`, //id remove kiya ho
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    // get user by ID
    getUserByUserId: (id, callBack) => {
        create.query(
            `select id,firstName,lastName,gender,email,number from registration where id =?`
            [id],
            (error, results, fields) => {
                if (error) {
                  return   callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    // update User 
    updateUser: (data,callBack) => {
        create.query(
            `update registration set firstName=?,lastName=?, gender=?,email=?,password=?,number=? where id =?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error,results,fields)=>{
                if(error){
                 return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },

    // delete User
    deleteUser:(data,callBack)=>{
       create.query(
        `delete from registration where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error){
               return callBack(error);
            }
            return callBack( null,results[0]);
        }
       );
    }
};