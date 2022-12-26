require('dotenv').config();

const { createApp } = require('./app')
const appDataSource = require('./api/models/dataSource')

const startServer = async() => {
    const app = createApp();
    const PORT = process.env.PORT
    
        await appDataSource.initialize()
            .then(() => {
            console.log("Data Source has been initialized")
        })
            .catch((err) => {
            console.error('Failed to initialize Data Source', err)
            appDataSource.destroy();
        })
    try{
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`)})
    } catch (err) {
        console.log(err);
    }
}

startServer();