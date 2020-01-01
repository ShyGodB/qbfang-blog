const mongoose = require('mongoose')

const mongodb = {
    url: '127.0.0.1:27017',
    database: 'blog',
    user: '',
    password: ''
};

module.exports = {
    connect() {
        mongoose.set('useFindAndModify', false)
        return mongoose.connect(
            `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.url}/` + mongodb.database,
            {
                useNewUrlParser: true,
                autoIndex: true,
                // autoReconnect: true,
                useUnifiedTopology: true,
                poolSize: 5
            }
        ).catch(err => {
            console.log('mongodb连接错误: ', err);
            process.exit()
        })
    }
}
