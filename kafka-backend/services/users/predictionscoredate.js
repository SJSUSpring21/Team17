const User = require('../../models/UserModel');
const Prediction = require('../../models/PredictionModel');

const handle_request = async (msg, callback) => {
    console.log("inside predict date service");
    const res = {};
    console.log("--------check service-----",msg)
    User.findById(msg.userId)
        .exec((err,user)=>{
            if(user){
                // console.log("inside user");
                // db.vehicleinformation.find({}).sort({"Pscore":-1}).limit(10)
                Prediction.find({$and:[{ Date: msg.date}]}).sort({"Pscore":1}).limit(10)
                    .exec((err,predict)=>{
                        //console.log(predict)
                        if(predict){
                            console.log("inside predict",predict[0].Pscore);
                            console.log("inside predict",predict[1].Pscore);
                            console.log("inside predict",predict[0].Code);
                            res.data={ 
                            }
                            // const score=predict[0].Pscore;
                            // if(score<0){
                            //     res.data={
                            //         message:"Safe"
                            //     }
                            //     res.status = 200;
                            //     callback(null, res);
                            // }
                            // else if(score===0){
                            //     res.data={
                            //         message:"Moderate"
                            //     }
                            //     res.status = 200;
                            //     callback(null, res);
                            // }
                            // else{
                            //     res.data={
                            //         message:"Unsafe"
                            //     }
                            //     res.status = 200;
                            //     callback(null, res);
                            // }
                        }
                        else {
                            console.log(err);
                            res.status = 201;
                            res.data = {
                                message:"",
                                response:err
                            };
                            callback(null, res);
                          }

                    })
            }
            else{
                console.log(err);
                res.status = 201;
                res.data = {
                    message:"",
                    response:err
                };
                callback(null, res);
            }
        })
};

exports.handle_request = handle_request;
