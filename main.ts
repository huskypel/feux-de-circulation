pins.digitalWritePin(DigitalPin.P16, 1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
