#Usando Mqtt com NodeJS
##Exemplo de uso

Este projeto é um exemplo de uso de MQTT com Node.JS utilizando os módulos MqttJS e MoscaJS.

Se você quer saber mais sobre MQTT eu sugiro que veja [este vídeo](https://www.youtube.com/watch?v=qRV8Jusu-go).

###Como rodar o projeto

Abra cada uma das pastas do projeto em uma janela do terminal diferentes (você pode utilizar máquinas virtuais), digite em cada uma delas:

```
    npm install
```

Isso fará com que sejam instaladas todos os pacotes necessários.

Copie o arquivo ```.env.example``` para cada uma das pastas e altere o seu nome para ```.env```.

Neste arquivo digite o número da porta que utilizará no **Broker** e a sua URL de conexão (localhost ou ip da máquina). Atente que a URL deverá começar com ```mqtt://```

Agora execute o comando:

```npm run start```

Primeiramente na pasta broker, depois no subscriber e em seguida na pasta publisher.

Se tudo estiver ok, o exemplo funcionará corretamente.

###O que você encontrará nesse repositório

Este projeto é dividido em três partes:

1. Broker
1. Publisher
1. Subscriber


####*Broker:*

O Broker é o serviço que irá receber a conexão tanto do subscriber quanto do publisher e delegar as mensagens de forma correta. Para sua criação foi utilizado o módulo [Mosca](http://www.mosca.io).

####*Publisher:*

O Publisher deste exemplo simula um termômetro de jardim que pode ser ligado/desligado, e ao ser ligado passa a informar de 3 em 3 segundo a temperatura. A temperatura é apenas um exemplo e está fixa como demonstração.

Como cliente mqtt está sendo usado o módulo [MqttJS](https://github.com/mqttjs/MQTT.js).

####*Subscriber:*

O Subscriber é o controlador, ele irá receber as informações do termômetro(publisher) e poderá ligá-lo ou desligá-lo a distância. Ele simula, por exemplo, um app no celular que permitira esse tipo de interação.

Para servir de exemplo o arquivo possui duas funções temporais que fazem o teste e que simula o ligar do termômetro, o recebimento das medições e o desligar do termômetro.

Como cliente mqtt está sendo usado o módulo [MqttJS](https://github.com/mqttjs/MQTT.js).

###O que falta ser feito

Uma interface gráfica como exemplo para o Subscriber onde efetivamente o usuário possa controlar o Publisher. 

