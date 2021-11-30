function lumiere_verte__pieton () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function lumiereblanche () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
input.onButtonPressed(Button.A, function () {
    lumiere = 0
    lumiere_verte__pieton()
    basic.pause(2000)
    orange()
    basic.pause(2000)
    lumiereblanche()
    basic.pause(2000)
    lumiere = 3
})
function orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function lumierejaune () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let lumiere = 0
lumiere_verte__pieton()
basic.forever(function () {
    while (lumiere == 3) {
        lumiere_verte__pieton()
    }
})
