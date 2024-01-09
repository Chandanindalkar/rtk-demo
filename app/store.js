const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/user/userSlice');

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // by default the configureStore adds some middleware to the redux store automatically
    // so to the list of default middlewares, we add our logger
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store;