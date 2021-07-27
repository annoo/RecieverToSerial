radio.onReceivedValue(function (name, value) {
    if (clients.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber)) < 0) {
        clients.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    }
    serial.writeValue("Microbit", clients.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber)))
    serial.writeValue(name, value)
    basic.pause(100)
})
let clients: number[] = []
radio.setGroup(1)
clients = []
basic.forever(function () {
    basic.showNumber(clients.length)
    serial.writeValue("number", clients.length)
})
