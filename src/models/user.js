const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema= mongoose.Schema ({
    name: {
        type:String,
        require:true
    },
    Middlename: {
        type:String,
        require:true
    },
    Lastname:{
        type: String,
        require: true
    },
    secondlastname: {
        type:String,
        require:true
    },
    ID: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    phone :{
        type: Number,
        require: true
    },
    genero: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }, 
    zip: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require:true
    },
    neighborhood: {
        type: String,
        require: true
    }, 
    
}, { timestamps: true });

  userSchema.pre('save', function (next) {
    const user = this;
    if (this.isModified('Password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.Password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.Password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});
 
userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.Password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
  
module.exports= mongoose.model('user',userSchema);