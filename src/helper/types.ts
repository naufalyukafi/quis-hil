import React from "react"

interface IContainerLayout {
    children: React.ReactNode
}

interface IButton {
    type: string,
    title: React.ReactNode,
    onClick: () => void
}

interface ICard {
    title: string
}

export type {
    IContainerLayout,
    IButton,
    ICard
}