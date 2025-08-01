let Yack = 0
input.onButtonPressed(Button.A, function () {
    Yack += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Yack += -1
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showString("" + (Yack))
})
