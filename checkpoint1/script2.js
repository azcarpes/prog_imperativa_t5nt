function microondas(opcao, tempo) {
    let opcao1 = "pipoca";
    let opcao2 = "macarrão";
    let opcao3 = "carne";
    let opcao4 = "feijão";
    let opcao5 = "brigadeiro";

    if (opcao == opcao1 && tempo >= 10 && tempo <20) {
        console.log("Pipoca pronta, bom apetite!");

    } else if ((opcao == opcao2 || opcao == opcao5) && tempo >= 8 && tempo < 16) {
        console.log(opcao + " pronto, bom apetite!");
    
    } else if (opcao == opcao3 && tempo >= 15 && tempo <30) {
        console.log("Carne pronta, bom apetite");

    } else if (opcao == opcao4 && tempo >= 12 && tempo < 24) {
        console.log("Feijão pronto, bom apetite!");

    } else if (opcao == opcao1 && tempo < 10) {
        console.log("Tempo insuficiente, vai comer milho cru!");

    } else if ((opcao == opcao2 || opcao == opcao5) && tempo < 8) {
        console.log("Tempo insuficiente, "+opcao+ " cru até que é gostoso, aproveite!");

    } else if (opcao == opcao3 && tempo < 15) {
        console.log("Tempo insuficiente, a carne está crua, mas tem quem goste, aproveite!");

    } else if (opcao == opcao4 && tempo < 12) {
        console.log("Tempo insuficiente, o feijão está cru, vai quebrar os dentes!");
        
    } else if (opcao == opcao1 && tempo >= 20 && tempo <30) {
        console.log("Tempo demais, sua pipoca queimou!");

    } else if ((opcao == opcao2 || opcao == opcao5) && tempo >=16 && tempo < 24) {
        console.log("Tempo demais, seu "+opcao+ " queimou!");

    } else if (opcao == opcao3 && tempo >=30 && tempo < 45) {
        console.log("Tempo demais, sua carne queimou!");

    } else if (opcao == opcao4 && tempo >=24 && tempo < 36) {
        console.log("Tempo demais, seu feijão queimou!");

    } else if (opcao == opcao1 && tempo >= 30) {
        console.log("KABOOOOOMMMM!!! Parabéns, hora de comprar outro microondas");
    
    } else if ((opcao == opcao2 || opcao == opcao5) && tempo >= 24) {
        console.log("KABOOOOOMMMM!!! Parabéns, hora de comprar outro microondas");

    } else if (opcao == opcao3 && tempo >= 45) {
        console.log("KABOOOOOMMMM!!! Parabéns, hora de comprar outro microondas");

    } else if (opcao == opcao4 && tempo >= 36) {
        console.log("KABOOOOOMMMM!!! Parabéns, hora de comprar outro microondas");
    
    } else {
        console.log("Prato inexistente");
    }

}



microondas("pipoca", 14);