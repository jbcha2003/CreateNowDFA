import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('createnow', 'root', '@NULL', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
