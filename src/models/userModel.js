import  { DataTypes, Model } from 'sequelize';
import {sequelize} from '../config/dbConection'

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },

}, 

{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'users', // We need to choose the model name
  timestamps: false
});

export default User