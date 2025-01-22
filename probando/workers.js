let i = 0;

const contador = () => {
    i++;
    postMessage(i);
    setTimeout('contador()', 500);
}

contador();