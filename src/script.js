// Lista de características
const list = document.querySelector(".list");

const personality =
[
    "Empática: se preocupa com os outros e procura ajudar quando possível, independente da índole da pessoa",
    
    "Inteligente: fala sobre diversos temas e fatos interessantes, desde Marx até Orcas, cinema, televisão e temas que demonstram seu total alinhamento aos seus interesses de carreira;",

    "Paciente e compreensiva: não trata as pessoas de forma ruim de forma alguma, tenta entender o lado da outra pessoa;",

    "Carinhosa: faz questão de tratar bem os próximos e avaliar se está sendo boa para essas pessoas, como todo o afeto que ganhei durante esse ano de relacionamento: as cartas, o chamego, os presentes, e outros;",

    "E muitas outras coisas que é até difícil escrever..."

];

let iterator = 0;

const listButton = document.querySelector("button");
const htmlContainer = document.querySelector(".second-container");
listButton.addEventListener('click', showList);

function showList() {
    
    if(iterator < personality.length){

        listButton.textContent = "Aperte Mais!";
        if(iterator == personality.length-1) {
            const finalMessage = document.createElement("div");
            finalMessage.textContent = "Eu te Amo!";
            finalMessage.classList.add("button");
            listButton.remove();
            list.remove();
            htmlContainer.appendChild(finalMessage);
            htmlContainer.appendChild(list);
        }

        const listItem = document.createElement("li");
        const listContent = document.createElement("span");

        listContent.textContent = personality[iterator];
        listContent.style.fontSize = "20px";
        listItem.style.marginTop = "20px";
        listItem.style.marginBottom = "20px";
        
        listItem.appendChild(listContent);
        list.appendChild(listItem);
        iterator++;
    }
}