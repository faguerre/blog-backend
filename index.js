const app = require('./app');
const repository = require('./repository/repository');
(async () => {
    try {
        await repository.initRepository();
        await app.initApp();
    } catch (err) {
        console.log(`Error initializing server: ${err}`);
        process.exit(1);
    }
})();