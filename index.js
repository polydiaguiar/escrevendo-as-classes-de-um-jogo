class heroCharacter {

    constructor (type, heroName, age){
        this.heroName = heroName
        this.age = age
        this.type = type
               
    }

    atacar(){
        
       if (this.type === "mago"){    
        this.ataque = " magia"
        
        } else if (this.type === "guerreiro"){
            this.ataque = " espada"

        } else if (this.type === "monge"){
            this.ataque = " artes maciais"

        } else if (this.type === "ninja"){
            this.ataque = " shuriken"    
        }
       
       

    }
     escrever(){
        console.log(`O ${this.type} atacou usando ${this.ataque}`)

     }


}


let gameResume = new heroCharacter("ninja")
gameResume.atacar()
gameResume.escrever()

