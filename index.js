const os = require("os");

console.log(os.userInfo()); //Info dell'user corrente
console.log(os.uptime()); //Da quanto tempo il computer è acceso
console.log(os.version());
console.log(os.arch());

console.log("\n\n\n");

const prova = {
    nome: os.type(),
    release: os.release(),
    memoria: os.totalmem(),
    disponibile: os.freemem(),
};

console.log(prova);

const path = require("path");
console.log("\n\nSEPARATORE:", path.sep);

//join ci permette di unire
//questo path è relativo --> si parte dalla posizione attuale
const percorsoFile = path.join("./cartella", "sottocartella", "prova.txt");
console.log(percorsoFile);

//Basename -->nome del file e basta

console.log(path.basename(percorsoFile));

//resolve --> ci permette di creare percorsi assoluti
const percorsoAssoluto = path.resolve(
    //Percorso assoluto da Users fino a prova.txt
    __dirname,
    "cartella",
    "sottocartella",
    "prova.txt"
);

console.log(percorsoAssoluto);
