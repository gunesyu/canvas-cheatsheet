function drawC1() {
    const c1 = document.querySelector('#c1')
    c1.width = 800
    const ctx = c1.getContext('2d')

    ctx.fillStyle = 'green'
    ctx.fillRect(20, 20, 100, 100)
    ctx.strokeStyle = "rgba(0,0,255,.9)"
    ctx.lineWidth = 5
    ctx.strokeRect(20,20,100,100)
}

function drawC2() {
    const c2 = document.querySelector('#c2')
    c2.width = 800
    const ctx = c2.getContext('2d')

    for (let i = 0; i < 10; i++) {
        ctx.beginPath()
        ctx.lineWidth = i + 1
        ctx.moveTo(25, 25+i*15)
        ctx.lineTo(475, 25+i*15)
        ctx.stroke()
    }
}

function drawC3() {
    const c3 = document.querySelector('#c3')
    c3.width = 800
    const ctx = c3.getContext('2d')

    for (let i = 0; i < 10; i++) {
        ctx.beginPath()
        ctx.lineWidth = i + 1
        ctx.moveTo(25, 25+i*15)
        ctx.lineTo(175, 25+i*15)
        ctx.stroke()
    }

    ctx.save()

    ctx.strokeStyle = "rgba(0,0,255,.9)"
    for (let i = 0; i < 10; i++) {
        ctx.beginPath()
        ctx.lineWidth = i + 1
        ctx.moveTo(200, 25+i*15)
        ctx.lineTo(350, 25+i*15)
        ctx.stroke()
    }

    ctx.restore()

    for (let i = 0; i < 10; i++) {
        ctx.beginPath()
        ctx.lineWidth = i + 1
        ctx.moveTo(375, 25+i*15)
        ctx.lineTo(525, 25+i*15)
        ctx.stroke()
    }

}

function drawC4() {
    const c4 = document.querySelector('#c4')
    c4.width = 800
    const ctx = c4.getContext('2d')

    ctx.beginPath()
    ctx.arc(50, 50, 25, 0, 0.5 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(150, 50, 25, 0, Math.PI, true)
    ctx.stroke()


    ctx.beginPath()
    ctx.arc(250, 50, 25, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
}

function drawC5() {
    const c5 = document.querySelector('#c5')
    c5.width = 800
    const ctx = c5.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(50, 200)
    ctx.bezierCurveTo(50, 100, 200, 100, 200, 150)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(250, 200)
    ctx.quadraticCurveTo(250, 50, 400, 150)
    ctx.stroke()
}

function drawC6() {
    const c6 = document.querySelector('#c6')
    c6.width = 800
    const ctx = c6.getContext('2d')

    let str = "Some text"
    ctx.font = "25px Georgia"
    ctx.fillText(str, 25, 60)

    ctx.fillStyle = "blue"
    ctx.strokeStyle = "red"
    ctx.fillText(str, 25, 100)
    ctx.strokeText(str, 25, 100)

    let textW = ctx.measureText(str)
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.moveTo(25, 110)
    ctx.lineTo(25 + Math.round(textW.width), 110)
    ctx.stroke()
}

function drawC7() {
    const c7 = document.querySelector('#c7')
    c7.width = 800
    const ctx = c7.getContext('2d')

    let str = "Drawing text shadow"
    ctx.fillStyle = "green"
    ctx.shadowColor = "rgba(0, 100, 100, 0.5)"
    ctx.shadowOffsetX = 5
    ctx.shadowOffsetY = 5
    ctx.shadowBlur = 4
    ctx.font = "25pt Georgia"
    ctx.fillText(str, 25, 50)
}

function drawC8() {
    const c8 = document.querySelector('#c8')
    c8.width = 800
    const ctx = c8.getContext('2d')

    const expImg = document.getElementById('exp_img')
    ctx.drawImage(expImg, 0, 0, 100, 100)
    ctx.drawImage(expImg, 0, 0, 250, 250, 110, 0, 90, 90)


    const expVid = document.getElementById('exp_vid')
    function drawVidFrame() {
        ctx.drawImage(expVid, 300, 0, 260, 260)
        requestAnimationFrame(drawVidFrame)
    }
    drawVidFrame()
}

function drawC9() {
    const c9 = document.querySelector('#c9')
    c9.width = 800
    const ctx = c9.getContext('2d')

    const expImg = document.getElementById('exp_img')
    ctx.drawImage(expImg, 0, 0, c9.width/2, c9.height)


    ctx.arc(3 * ctx.canvas.width / 4, ctx.canvas.height / 2, 50, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(expImg, c9.width/2, 0, c9.width/2, c9.height)
}

function drawC10() {
    const c10 = document.querySelector('#c10')
    c10.width = 800
    const ctx = c10.getContext('2d')

    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)

    let radian = Math.PI / 180 * 10
    for(let degrees = 0; degrees < 360; degrees += 10) {
        ctx.rotate(radian)
        ctx.beginPath()
        ctx.moveTo(-50, 0)
        ctx.lineTo(50, 0)
        ctx.stroke()
    }
}

function drawC11() {
    const c11 = document.querySelector('#c11')
    c11.width = 520
    c11.height = 260
    const ctx = c11.getContext('2d')

    const expImg = document.getElementById('exp_img_2')
    ctx.drawImage(expImg, 0, 0, 260, 260)

    let row = 0
    let imgData = ctx.getImageData(0, 0, 260, 260)
    let pixels = imgData.data

    while (row < 259) {
        let thisRowBytes = row * 260 * 4
        for (let j = 0; j < 260 * 4; j+= 4) {
            pixels[thisRowBytes + j] = 255 - pixels[thisRowBytes + j]
            pixels[thisRowBytes + j + 1] = 255 - pixels[thisRowBytes + j + 1]
            pixels[thisRowBytes + j + 2] = 255 - pixels[thisRowBytes + j + 2]
        }
        row++
    }
    ctx.putImageData(imgData, 0, 0)

    ctx.drawImage(expImg, 260, 0, 260, 260)
    ctx.putImageData(imgData, 260, 0, 0, 0, 260, 120)
}

function drawC12() {
    const c12 = document.querySelector('#c12')
    c12.width = 500
    c12.height = 300
    const ctx = c12.getContext('2d')

    let bc12 = null
    let bctx = null

    let flakeArray = []
    let flakeTimer = null
    let maxFlakes = null

    function Flake() {
        this.x = Math.round(Math.random() * ctx.canvas.width)
        this.y = -10
        this.drift = Math.random()
        this.speed = Math.round(Math.random() * 3) + 1
        this.width = Math.random() * 3 + 2
        this.height = this.width
    }

    function init() {

        bc12 = document.createElement('canvas')
        bctx = bc12.getContext('2d')
        bctx.canvas.width = ctx.canvas.width
        bctx.canvas.height = ctx.canvas.height

        bctx.beginPath()
        bctx.fillStyle = "black"
        bctx.fillRect(0, 0, c12.width, c12.height)
        bctx.arc(c12.width / 2, c12.height / 2,  c12.height / 2, 0, 2 * Math.PI)
        bctx.clip()

        flakeTimer = setInterval(addFlake, 200)

        draw()

        requestAnimationFrame(animate)
    }

    function addFlake() {
        flakeArray[flakeArray.length] = new Flake()
        if(flakeArray.length == maxFlakes) {
            clearInterval(flakeTimer)
        }
    }

    function blank() {
        bctx.fillStyle = "#330033"
        bctx.fillRect(0, 0, bctx.canvas.width, bctx.canvas.height)
    }

    function animate() {
        blank()
        update()
        draw()
        requestAnimationFrame(animate)
    }

    function update(){
        for(let i = 0; i < flakeArray.length; i++) {
            if (flakeArray[i].y < ctx.canvas.height) {
                flakeArray[i].y += flakeArray[i].speed
                if (flakeArray[i].y > ctx.canvas.height)
                    flakeArray[i].y = -5
                flakeArray[i].x += flakeArray[i].drift
                if (flakeArray[i].x > ctx.canvas.width)
                    flakeArray[i].x = 0
            }
        }
    }

    function draw() {
        ctx.save()

        for(let i = 0; i < flakeArray.length; i++) {
            bctx.fillStyle = "white"
            bctx.fillRect(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height)
        }

        ctx.drawImage(bc12, 0, 0, bc12.width, bc12.height)

        ctx.restore()
    }

    init()
}
