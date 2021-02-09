module.exports = function (lifetimeExperience){
    var a = 0
    var b = 0
    var c = 200

    var x = 100
    while((x) < lifetimeExperience){		
        a = x
        b = b + 1	
        x = a + b * c
    }
    return b
}