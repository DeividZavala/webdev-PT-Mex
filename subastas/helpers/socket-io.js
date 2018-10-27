const Bid = require("../models/Bid");


exports.update = (obj) => {
    return Bid.findByIdAndUpdate(obj.item, {$set: {leader: obj.user}}, {new:true});
};