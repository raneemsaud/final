input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("1 2 3 4 5 6 7 8 9 10")
})
input.onButtonPressed(Button.AB, function () {
    if (90 >= L) {
        basic.showString("Excellent ")
    }
    if (50 >= L) {
        basic.showString("Pass")
    }
    if (50 > L) {
        basic.showString("Fail")
    }
})
input.onButtonPressed(Button.B, function () {
    غير_L += 1
    basic.showNumber(L)
})
let غير_L = 0
let L = 0
basic.showString("رنيم")
