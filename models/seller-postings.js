module.exports = function(sequelize, DataTypes) {
  var SellerPostings = sequelize.define("SellerPostings", {
    studentID: {
      type: DataTypes.INTEGER,
      // defaultValue: "reza",
    
      allowNull: false,
     
      len: [1]
      
    },
     sellPrice: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
      // allowNull: false,
      len: [1]
    },

     numSwipes: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      // allowNull: false,
      len: [1]
    }
    
  });
  return SellerPostings;
};
