import {Sequelize} from 'sequelize'
import {config} from 'dotenv'

config()

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: process.env.DB_NAME,
  dialect: 'mysql',
  logging: false,
  });


  async function connectDatabase(){
    try {
      sequelize.authenticate()
      sequelize.sync({ force: false })
      console.log('connected to databese')
      
    } catch (error) {
        console.log('Fail to connect databese', error)
        
    }
  }

  connectDatabase()


