import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('createnow', 'root', '@Jchbkc@22330', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;