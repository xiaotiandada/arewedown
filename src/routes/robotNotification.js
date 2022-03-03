module.exports = express => {

    /**
     * Tests slack integration by sending a message to the target user / channel, then deleting it. 
     */
    express.get('/robotNotification/test/:target', async (req, res)=>{
        const robotNotification = require('./../lib/robotNotification')
        try {
            const result = await robotNotification.send(req.params.target, 'robotNotification integrtion test', true)
            res.json( { message : 'robotNotification integration test passed.', result: result })
        }catch(ex){
            res.status(500)
            res.json({
                message : 'Sending a message to robotNotification target failed with error : ',
                ex
            })
        }
    })

}