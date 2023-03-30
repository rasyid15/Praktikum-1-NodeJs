function test() {
    var a = 9
    var b = 45
    console.log(' a awal =  ', a)
    console.log(' b awal = ', b)

    a = a + b
    b = a - b
    a = a - b

    console.log(' a final =  ', a)
    console.log(' b final = ', b)
}
test()