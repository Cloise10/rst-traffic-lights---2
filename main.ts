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
// when button A+B is pressed, a blinking red light with a large-to-small "X" sign to represent a stop sign at an intersection
// 
// when button A+B is pressed again, a blinking yellow light with a large-to-small diamond to represent caution or slow down at an intersection
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
        for (let index3 = 0; index3 <= 15; index3++) {
            basic.showNumber(15 - index3)
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
// shake to reset each program
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// sets the variable "blink" (used for button A+B) to 0
let blink = 0
blink = 0
