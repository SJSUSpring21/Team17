const User = require('../../models/UserModel');
const Prediction = require('../../models/PredictionModel');

const handle_request = async (msg, callback) => {
    console.log("inside predict service");
    const res = {};
    console.log("--------check service-----",msg)
    User.findById(msg.userId)
        .exec((err,user)=>{
            if(user){
                // console.log("inside user");
                Prediction.find({$and:[{Country:msg.country},{ Date: msg.date}]})
                    .exec((err,predict)=>{
                        //console.log(predict)
                        if(predict){
                            console.log("inside predict",predict[0].Pscore);
                            const score=predict[0].Pscore;
                            if(score<0){
                                res.data={
                                    message:"Safe"
                                }
                                res.status = 200;
                                callback(null, res);
                            }
                            else if(score===0){
                                res.data={
                                    message:"Moderate"
                                }
                                res.status = 200;
                                callback(null, res);
                            }
                            else{
                                res.data={
                                    message:"Unsafe"
                                }
                                res.status = 200;
                                callback(null, res);
                            }


                        }
                    })
            }
        })
//   try {
//     const oldUser = await User.findOne({ email: msg.email });
//     if (!oldUser) {
//       res.status = 404;
//       callback(null, res);
//     } else {
//       const filter = ({ email: msg.email });
//       const update = {
//         name: msg.name ? msg.name : oldUser.name,
//         email: msg.email ? msg.email : oldUser.email,
//         phone: msg.phone ? msg.phone : oldUser.phone,
//         currency: msg.currency ? msg.currency : oldUser.currency,
//         language: msg.language ? msg.language : oldUser.language,
//         timezone: msg.timezone ? msg.timezone : oldUser.timezone,
//       };
//       const updatedUser = await User.findOneAndUpdate(filter, update, {
//         new: true,
//         useFindAndModify: true,
//       });
//       res.data = {
//         name: updatedUser.name,
//         email: updatedUser.email,
//         phone: updatedUser.phone,
//         language: updatedUser.language,
//         currency: updatedUser.currency,
//         timezone: updatedUser.timezone,
//         image: updatedUser.image,
//         _id: updatedUser._id,
//       };
//       res.status = 200;
//       callback(null, res);
//     }
//   } catch (e) {
//     res.status = 500;
//     callback(null, 'error');
//   }
};

exports.handle_request = handle_request;
