module.exports = function(sequelize, DataTypes) {
  var IndividualTransactions = sequelize.define("IndividualTransactions", {
    studentID: {
      type: DataTypes.INTEGER,
      // defaultValue: "reza",
    
      allowNull: false,
     
      len: [1]
      
    },
     transactionAmount: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
      allowNull: false,
      len: [1]
    },

     numSwipesTrans: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      len: [1]
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // When we delete an Author, we'll also delete their Posts "cascade"
          // An Author (foreignKey) is required or a Post can't be made
          Post.belongsTo(models.Student,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    
  });
  return IndividualTransactions;
};