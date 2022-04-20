import { ref } from "vue";
import openSocket from "socket.io-client";

export function useSocketIo() {
    return openSocket('http://127.0.0.1:5000/');
}

export function useSocketName(socket) {
    const name = ref("");

    socket.on("name", serverName => {
        name.value = serverName;
    });

    function setDisplayName(value) {
        socket.emit("my_event", value);
    }

    return [name, setDisplayName];
}
