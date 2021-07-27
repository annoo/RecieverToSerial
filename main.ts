input.onButtonPressed(Button.A, function () {
    serial.writeValue("number of Microbits", clients.length)
})
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
})
