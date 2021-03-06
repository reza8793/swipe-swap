module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
      // defaultValue: "reza",
    
      allowNull: false,
     
      len: [1]
      
    },

    // userType: {
    //   type: DataTypes.STRING,
        
    //   // allowNull: false,
      
    //     len: [1], 
      
    //   defaultValue: "buyer"
    // },

    // swipePrice: {
    //   type: DataTypes.INTEGER,
    
    //   // allowNull: false,
    //   len: [1],
    //   defaultValue: 1
    // },
    
    studentID: {
      type: DataTypes.INTEGER,
      // defaultValue: 809,
    

      allowNull: false,
      len: [1]
    },

     amountMoney: {
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
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          Student.hasMany(models.Transaction);
        }
      }
  });
  return Student;
};
