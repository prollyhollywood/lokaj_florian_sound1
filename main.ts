while (true) {
    if (input.soundLevel() > 150) {
        light.setAll(light.rgb(0, 255, 255))
    } else {
        light.clear()
    }
    
}
