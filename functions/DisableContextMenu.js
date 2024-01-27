"use client"

export default function DisableContextMenu() {
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
}