import {Sequelize} from 'sequelize'
import {config} from 'dotenv'

config()

/* //Conexão com db local
export const sequelize = new Sequelize('db_crud_myfirstapp', 'root', '202817', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//}) */

//Conexão com bd na nuvem
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
      sequelize.sync({ force: true })
      console.log('connected to databese')
      
    } catch (error) {
        console.log('Fail to connect databese', error)
        
    }
  }

  connectDatabase()


