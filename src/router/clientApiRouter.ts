import express from 'express';

const clientApiRouter = express.Router();

clientApiRouter.get('/', (req, res) => {
    console.log('yo create client')
})

export default clientApiRouter;