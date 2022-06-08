const fetch =  require("node-fetch");
const translatte = require('translatte');

translatte('Do you speak Russian?', {to: 'es'}).then(res => {
    console.log(res.text);
}).catch(err => {
    console.error(err);
});


async function traducir(){
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "Hello",
            source: "en",
            target: "es",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(await res.json());
}
