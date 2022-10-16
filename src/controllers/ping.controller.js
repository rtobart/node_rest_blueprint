import { serviceTest } from '../services/test.js'

const ping = async (req, res) => {
    res.send({msj: 'pong'})
}

const servicesTest = async (req, res) => {
    const test = await serviceTest()
    res.send(test)
}

export {
    ping,
    servicesTest
}