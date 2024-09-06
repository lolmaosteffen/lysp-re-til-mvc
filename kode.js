const app = document.getElementById("app");
let color = 'white';
let text = `nå er lyset av`;
let knapptekst = 'av';
showStuff()
function showStuff() {
    app.innerHTML = /*HTML*/`
        <div style="height: 50px; width: 50px; background-color: ${color};"></div>
        <div>${text}</div>
        <div><button onclick="changeStuff()">${knapptekst}</button></div>
        `;
}
function changeStuff() {
    if (color === 'white') {
        color = 'yellow';
        text = `nå er lyset på`;
        knapptekst = 'på';
    } else {
        color = 'white';
        text = `nå er lyset av`;
        knapptekst = 'av';
    }

    showStuff();
}
// function changeStuff() {
//     color = 'yellow'
//     if (color === 'yellow') {
//         text = `nå er lyset på`;
//         knapptekst = 'på';
//     }
//     app.innerHTML = /*HTML*/`
//         <div style="height: 50px; width: 50px; background-color: ${color};"></div>
//         <div>${text}</div>
//         <div><button onclick="changeStuff2()">${knapptekst}</button></div>
//         `;
// }
// function changeStuff2() {
//     color = 'white'
//     if (color === 'white') {
//         text = `nå er lyset av`;
//         knapptekst = 'av';
//     }
//     showStuff()
// }