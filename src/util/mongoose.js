module.exports = {
  multipleMongoToObj: function (moongoArr) {
    return moongoArr.map((data) => data.toObject());
  },
  mongoToObj: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
