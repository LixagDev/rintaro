"use client"

export function DisableContextMenu() {
    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
}