/**
 * Required Keywords : any
 */
module.exports = {
    async send(receiverTransmissionConfig, watcherName, isPassing){
        const axios = require('axios')
        const log = require('./../lib/logger').instance()

        log.info('robot notification', receiverTransmissionConfig, watcherName, isPassing)
        try {
            const text = isPassing ? `"${watcherName}" is up again 🟢` : `"${watcherName}" is down 🔴`;

            const response = await axios({
                method: 'POST',
                url: `${process.env.ROBOT_NOTIFICATION_API}/messages`,
                data: {
                    content: `【通知】${text}`
                }
            })
            log.debug('response', response)
            return response.data
        } catch (error) {
            log.error(error)
            throw 'send robot notification error'
        }
    },

    async ensureSettingsOrExit(){
        const log = require('./../lib/logger').instance()
        log.info(`Confirming robot notification settings ...`)
    }
}
