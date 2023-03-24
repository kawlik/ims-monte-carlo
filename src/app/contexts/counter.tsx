import { createRoot, createSignal } from "solid-js";

export default createRoot(function () {
    const [get, set] = createSignal(0);

    const increment = () => {
        set(prev => prev + 1);
    }

    const decrement = () => {
        set(prev => prev - 1);
    }

    return {
        get,
        increment,
        decrement,
    }
});