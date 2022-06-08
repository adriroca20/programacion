const tmi = require('tmi.js');
const fetch =  require("node-fetch");
const translatte = require('translatte');

//OAUTH generator https://twitchapps.com/tmi/#access_token=26q38fxpe6u42hr8zx3j65p7a3t2vf&scope=chat%3Aread+chat%3Aedit+channel%3Amoderate+whispers%3Aread+whispers%3Aedit+channel_editor&token_type=bearer
const client = new tmi.Client({
    identity:{
        username:"adridev_",
        password:"oauth:26q38fxpe6u42hr8zx3j65p7a3t2vf"
    },
	channels: ['adridev_']
});

client.connect().catch(()=>{
    console.log("Error");
});


//Todos los mensajes que aparezcan en el chat los recibe y los imprime por consola
client.on('message', async(channel, userstate, message, self) => {
    if( !message.startsWith('!',0)) return;
    const response = await fetch('https://api.yomomma.info/');
    const nick= userstate["display-name"]
	console.log(nick+" " + message);

    
	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

	if(command === 'chiste') {
        const data = await response.json();
        // translatte(data.joke, {to: 'es'}).then(res => {
        //     client.say(channel, res.text);
        // });
        client.say(channel, data.joke);
	}
    if(command === 'feo') {
		client.say(channel, "Tu si que ere feo " + nick);
	}
});

client.on("connected",(address,port)=>{
    console.log("Cliente conectado a " + address + " puerto: " + port);
})

