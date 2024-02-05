setInterval(() => { setColors() }, 500)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

function findRings(){
    return document.getElementsByClassName("progress-ring__svg__stroke")
}
function findIndicators(){
    return document.getElementsByClassName("progress-ring__svg__bar")
}
function findBorders(){
    let children= Array.from(document.getElementsByClassName("evaluation-graphic evaluation-graphic--medium evaluation-graphic--percentage evaluation-list-item__graphic"))
    let i=0;
    let borders = []
    while (i<children.length){
        borders.push(children[i].parentElement)
        i++;
    }
    return borders
}
function setColors(){
    let borders = findBorders()
    let rings=findRings()
    let indicators = findIndicators()
    let i=0;
    let j=0;
    while (i<rings.length){
        if (rings[i].getAttribute("r")=="21.5"){
        color=colors[j%colors.length]
        rings[i].style="stroke: var(--c-"+color+"--200); stroke-width: 5px;"
        indicators[i].style="stroke: var(--c-"+color+"--500); stroke-width: 5px; stroke-linecap: round; stroke-dasharray: 135.088px, 135.088px; stroke-dashoffset:0px;"
        borders[i].className="evaluation-list-item c-"+color+"-combo--100 evaluation-list__item--undefined"
        j++
        }
        i++;
    }
}