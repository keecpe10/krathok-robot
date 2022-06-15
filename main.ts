let kp = 0.09
let kd = 2.3
KrathokRobot.InitStart()
KrathokRobot.ButtonWaite(LineRobotButton.A)
basic.showIcon(IconNames.Surprised)
KrathokRobot.SaveValueSensors()
KrathokRobot.ButtonWaite(LineRobotButton.B)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    KrathokRobot.FollowerLine(800, kp, kd)
})
