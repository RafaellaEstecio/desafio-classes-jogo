/*O que de ser utilizado

-variaveis
-operadores
-laços de repetição
-estruturas de decisões
-funçoes
-classes e objetos


## OBJETIVO

Crie uma classe generica que representa 
um heroi de uma aventura e que possua as seguintes 
propriedades:
-nome
-idade
-tipo(ex: guerreiro, mago, monge, ninja)

alem disso, deve ter um metodo chamado atacar que deve
atender os seguintes requisitos:

-exibir a mensagem: "o {tipo} atacou usando {ataque}")
-aonde o {tipo} deve ser concatenando o tipo que esta na
propriedade da classe
-e no {ataque} deve seguir uma descrição diferente conforme
o tipo, seguindo a tabela abaixo:

se mago > no ataque exibir (usou magia)
se Guerreiro > no ataque exibir (usou espada)
se monge > no ataque exibir (usou artes marciais)
se ninja > no ataque exibir (usou shuriken)


## SAIDA

ao final deve se exibir uma mensagem

-"o {tipo} atacou usando {ataque}"
 ex: mago atacou usando magia*/

 class heroiAventura {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade; 
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "string" 
        if(this.tipo === "mago"){
            ataque = "magia"

        } else if (this.tipo==="guerreiro" ) {
            ataque = "espada"
        }
          else if (this.tipo==="monge" ) {
            ataque = "artes marciais"
        }
        else if (this.tipo==="ninja" ) {
            ataque = "shuriken"

        } else{
            console.log("vazio")
        }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`) 
    }
 }

 let heroiWS = new heroiAventura('kiko', 18,'mago');

 heroiWS.atacar()
 
