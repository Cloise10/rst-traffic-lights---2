// P0 - Green
// P1 - Yellow
// P2 - Red
// 
// when button A is pressed, the sequence green-yellow-red is shown with the additional left arrow after a few seconds when the green light is on and an "x" sign to represent "do not walk" during a red light
input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    }
})
input.onButtonPressed(Button.AB, function () {
    blink += 1
    if (blink == 1) {
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.showIcon(IconNames.No)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.pause(100)
        }
        basic.clearScreen()
    } else if (blink == 2) {
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showIcon(IconNames.Diamond)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(100)
        }
        basic.clearScreen()
    } else {
        blink = 0
    }
})
// P0 - Green
// P1 - Yellow
// P2 - Red
// 
// when button B is pressed, the sequence green-yellow-red is shown with a countdown of 15 seconds during a green light and an "x" sign to represent "do not walk" during a red light
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        for (let index = 0; index <= 15; index++) {
            basic.showNumber(15 - index)
            basic.pause(1000)
            basic.clearScreen()
        }
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let blink = 0
blink = 0
