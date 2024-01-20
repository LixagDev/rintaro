export function DisableContextMenu(){
    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
}

export function TestListener() {
    const shortcut = {k: false, meta: false, ctrl: false};
    window.onkeydown = (e) => {
        if (e.metaKey) shortcut.meta = true;
        if (e.key === 'k') shortcut.k = true;
        if (e.ctrlKey) shortcut.ctrl = true;
        if (shortcut.k === true && (shortcut.meta === true || shortcut.ctrl === true)) return true;

        return false
    }
    window.onkeyup = () => {
        shortcut.k = false;
        shortcut.meta = false;
        shortcut.ctrl = false;
    }
}