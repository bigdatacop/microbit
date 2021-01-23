basic.showIcon(IconNames.Heart)
basic.forever(function () {
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(100, 40)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(40, 100)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1000)
})
