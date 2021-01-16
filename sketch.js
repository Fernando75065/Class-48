const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Bodies
const Constraint=Matter.Constraint

var gameState = "start"

function preload(){
bg = loadImage("images/Classroom.jpg")
happyImage1 = loadImage ("images/happyface1.png")
happyImage2 = loadImage ("images/happyface2.png")
happyImage3 = loadImage ("images/happyface2.png")

smileyImage1=loadImage("images/smiley1.png")
smileyImage2=loadImage("images/smiley2.png")
smileyImage3=loadImage("images/smiley3.png")
smileyImage4=loadImage("images/smiley4.png")

sadImage1 = loadImage ("images/sadface1.png")
sadImage2 = loadImage ("images/sadface2.png")
sadImage3 = loadImage ("images/sadface3.png")

playerImage = loadImage ("images/student.png.gif")

schoolBg = loadImage ("images/school.jpg")
play = loadImage ("images/play.png")
howToPlay = loadImage ("images/howtoplay.png")

}

function setup (){
    createCanvas(displayWidth,displayHeight)
     engine = Engine.create()
     world = engine.world

    
     s1 = createSprite(575,625,195,130)
     s1.visible= false

     s2 = createSprite(220,1250,125,220)
     s2.visible= false
     
     s3 = createSprite(300,360,330,40)
     s3.visible= false

     s4 = createSprite(180,620,80,140)
     s4.visible= false

     s5 = createSprite(220,880,100,100)
     s5.visible= false

     s6 = createSprite(600,900,200,60)
     s6.visible= false

     s7 = createSprite(210,1095,100,100)
     s7.visible= false

     s8 = createSprite(900,530,100,150)
     s8.visible= false

     s9 = createSprite(1075,430,250,50)
     s9.visible= false

     s10 = createSprite(915,1145,270,75)
     s10.visible= false

     s11 = createSprite(625,1325,270,100)
     s11.visible= false

     s12 = createSprite(1275,625,440,100)
     s12.visible= false

     s13 = createSprite(1380,1075,300,50)
     s13.visible= false

     s14 = createSprite(1550,1000,100,100)
     s14.visible= false

     s15 = createSprite(1125,150,100,100)
     s15.visible= false

     s16 = createSprite(1800,700,75,350)
     s16.visible= false

     s17 = createSprite(1139,1325,150,100)
     s17.visible= false

     s18 = createSprite(1825,1350,695,75)
     s18.visible= false

     s19 = createSprite(2355,1275,150,200)
     s19.visible= false

     s20 = createSprite(2295,1015,250,50)
     s20.visible= false

     s21 = createSprite(2350,425,150,75)
     s21.visible= false
     
     s22 = createSprite(2375,300,100,300)
     s22.visible= false

     s23 = createSprite(2150,410,150,35)
     s23.visible= false

     s24 = createSprite(700,600,100,100)
     s24.visible= false

     s25 = createSprite(2050,260,120,80)
     s25.visible= false

     s26 = createSprite(2050,120,600,50)
     s26.visible= false

     s27 = createSprite(1850,400,200,100)
     s27.visible= false

     s28 = createSprite(1720,350,100,80)
     s28.visible= false

     s29 = createSprite(1410,130,200,100)
     s29.visible= false

     s30 = createSprite(1120,850,300,90)
     s30.visible= false

     s31 = createSprite(900,130,150,100)
     s31.visible= false

     s32 = createSprite(580,290,50,50)
     s32.visible= false
     
     s33 = createSprite(610,200,60,50)
     s33.visible= false
     
     s34 = createSprite(510,230,100,40)
     s34.visible= false
     
     s35 = createSprite(315,165,50,50)
     s35.visible= false
     
     s36 = createSprite(280,270,50,50)
     s36.visible= false

     player = createSprite(100,100,50,50)
     player.addImage(playerImage)
     player.scale= 0.25

     computer1 = createSprite(1880,240,20,20)
     computer1.addImage(sadImage1)
     computer1.scale =0.25
     computer2 = createSprite(680,140,20,20)
     computer2.addImage(sadImage2)
     computer2.scale=0.5
     computer3 = createSprite(1900,615 ,20,20)
     computer3.addImage(sadImage3)
     computer3.scale=0.5
     

     smiley1 = createSprite(2200,1315)
     smiley1.addImage(smileyImage1)
     smiley1.scale = 0.1

     smiley2 = createSprite(2335,375)
     smiley2.addImage(smileyImage2)
     smiley2.scale = 0.1

     smiley3 = createSprite(1245,130)
     smiley3.addImage(smileyImage3)
     smiley3.scale = 0.1

     smiley4 = createSprite(210,420)
     smiley4.addImage(smileyImage4)
     smiley4.scale = 0.2

     smiley5 = createSprite(900,1300)
     smiley5.addImage(smileyImage1)
     smiley5.scale = 0.1

     smiley6 = createSprite(1540,120)
     smiley6.addImage(smileyImage2)
     smiley6.scale = 0.1

     smiley7 = createSprite(220,970)
     smiley7.addImage(smileyImage3)
     smiley7.scale = 0.1

     smiley8 = createSprite(1485,1010)
     smiley8.addImage(smileyImage4)
     smiley8.scale = 0.2

     smiley9 = createSprite(895,421)
     smiley9.addImage(smileyImage1)
     smiley9.scale = 0.1

     smiley10 = createSprite(2300,845)
     smiley10.addImage(smileyImage2)
     smiley10.scale = 0.1



}


function draw (){

   

    if(gameState==="start"){
        background(schoolBg)

        fill("black")
        text(mouseX + "," + mouseY,mouseX,mouseY);

        playButton = createSprite(930,670)
        playButton.addImage(play)
        playButton.scale = 0.25
         if (mousePressedOver(playButton)){
             gameState = 'play'
         }
         HowToPlayButton = createSprite(1030,670)
         HowToPlayButton.addImage(howToPlay)
    
         if (mousePressedOver(HowToPlayButton)){

            text("hello",900,500)

         }
         

         player.visible = false
         computer1.visible = false
         computer2.visible=false
         computer3.visible = false
         smiley1.visible=false
         smiley2.visible=false
         smiley3.visible=false
         smiley4.visible=false
         smiley5.visible=false
         smiley6.visible=false
         smiley7.visible=false
         smiley8.visible=false
         smiley9.visible=false
         smiley10.visible=false
    }
    


    if(gameState === "play"){
        background(bg)
        Engine.update(engine)

        fill("black")
        text(mouseX + "," + mouseY,mouseX,mouseY);

        HowToPlayButton.visible=false
        playButton.visible = false
        player.visible = true
        computer1.visible = true
        computer2.visible=true
        computer3.visible = true
        smiley1.visible=true
        smiley2.visible=true
        smiley3.visible=true
        smiley4.visible=true
        smiley5.visible=true
        smiley6.visible=true
        smiley7.visible=true
        smiley8.visible=true
        smiley9.visible=true
        smiley10.visible=true

       

        if (keyDown(UP_ARROW)){
            player.y -= 5
        }
        
        if(keyDown(DOWN_ARROW)){
            player.y+=5
        }
        
        if (keyDown(RIGHT_ARROW)){
            player.x+=5
        }

        if (keyDown(LEFT_ARROW)){
            player.x-=5
        }

        player.collide(s1)
        player.collide(s2)
        player.collide(s3)
        player.collide(s4)
        player.collide(s5)
        player.collide(s6)
        player.collide(s7)
        player.collide(s8)
        player.collide(s9)
        player.collide(s10)
        player.collide(s11)
        player.collide(s12)
        player.collide(s13)
        player.collide(s14)
        player.collide(s15)
        player.collide(s16)
        player.collide(s17)
        player.collide(s18)
        player.collide(s19)
        player.collide(s20)    
        player.collide(s21)  
        player.collide(s22)    
        player.collide(s23)    
        player.collide(s24)    
        player.collide(s25)    
        player.collide(s26)    
        player.collide(s27)    
        player.collide(s28)    
        player.collide(s29)    
        player.collide(s30)    
        player.collide(s31)    
        player.collide(s32)    
        player.collide(s31)
        player.collide(s32)
        player.collide(s33)
        player.collide(s34)
        player.collide(s35)
        player.collide(s36)
        
        computer1.collide(s1)
        computer1.collide(s2)
        computer1.collide(s3)
        computer1.collide(s4)
        computer1.collide(s5)
        computer1.collide(s6)
        computer1.collide(s7)
        computer1.collide(s8)
        computer1.collide(s9)
        computer1.collide(s11)
        computer1.collide(s12)
        computer1.collide(s13)
        computer1.collide(s14)
        computer1.collide(s15)
        computer1.collide(s16)
        computer1.collide(s17)
        computer1.collide(s18)
        computer1.collide(s19)
        computer1.collide(s20)
        computer1.collide(s21)
        computer1.collide(s22)
        computer1.collide(s23)
        computer1.collide(s24)
        computer1.collide(s25)
        computer1.collide(s26)
        computer1.collide(s27)
        computer1.collide(s28)
        computer1.collide(s29)
        computer1.collide(s30)
        computer1.collide(s31)
        computer1.collide(s32)
        computer1.collide(s33)
        computer1.collide(s34)
        computer1.collide(s35)
        computer1.collide(s36)

        computer2.collide(s1)
        computer2.collide(s2)
        computer2.collide(s3)
        computer2.collide(s4)
        computer2.collide(s5)
        computer2.collide(s6)
        computer2.collide(s7)
        computer2.collide(s8)
        computer2.collide(s9)
        computer2.collide(s11)
        computer2.collide(s12)
        computer2.collide(s13)
        computer2.collide(s14)
        computer2.collide(s15)
        computer2.collide(s16)
        computer2.collide(s17)
        computer2.collide(s18)
        computer2.collide(s19)
        computer2.collide(s20)
        computer2.collide(s21)
        computer2.collide(s22)
        computer2.collide(s23)
        computer2.collide(s24)
        computer2.collide(s25)
        computer2.collide(s26)
        computer2.collide(s27)
        computer2.collide(s28)
        computer2.collide(s29)
        computer2.collide(s30)
        computer2.collide(s31)
        computer2.collide(s32)
        computer2.collide(s33)
        computer2.collide(s34)
        computer2.collide(s35)
        computer2.collide(s36)

        computer3.collide(s1)
        computer3.collide(s2)
        computer3.collide(s3)
        computer3.collide(s4)
        computer3.collide(s5)
        computer3.collide(s6)
        computer3.collide(s7)
        computer3.collide(s8)
        computer3.collide(s9)
        computer3.collide(s11)
        computer3.collide(s12)
        computer3.collide(s13)
        computer3.collide(s14)
        computer3.collide(s15)
        computer3.collide(s16)
        computer3.collide(s17)
        computer3.collide(s18)
        computer3.collide(s19)
        computer3.collide(s20)
        computer3.collide(s21)
        computer3.collide(s22)
        computer3.collide(s23)
        computer3.collide(s24)
        computer3.collide(s25)
        computer3.collide(s26)
        computer3.collide(s27)
        computer3.collide(s28)
        computer3.collide(s29)
        computer3.collide(s30)
        computer3.collide(s31)
        computer3.collide(s32)
        computer3.collide(s33)
        computer3.collide(s34)
        computer3.collide(s35)
        computer3.collide(s36)
        
        
    }

    if(gameState === "end"){


    }

    drawSprites()
}

