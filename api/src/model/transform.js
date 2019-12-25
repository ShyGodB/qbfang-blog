module.exports = {
    toObject: {
        transform: function (doc, ret) {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
            delete ret.scope;
            return ret;
        }
    },
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
            delete ret.scope;
        }
    }
};
