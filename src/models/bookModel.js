import {DataTypes, Model } from 'sequelize'
import {sequelize} from '../config/dbConection'


class Books extends Model {}

Books.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
    },

    gender: {
        type: DataTypes.STRING,
    },

    author: {
        type: DataTypes.STRING,
    }
},

{
    sequelize, // We need to pass the connection instance
    modelName: 'books', // We need to choose the model name
    timestamps: false,
});

export default Books

