import {Sequelize} from 'sequelize'


export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
  });


  async function connectDatabase(){
    try {
      await sequelize.authenticate()
      await sequelize.sync({ force: false })
      console.log('connected to databese')
      
    } catch (error) {
        console.log('Fail to connect databese', error)
        
    }
  }

  connectDatabase()


