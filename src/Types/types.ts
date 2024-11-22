import { ReactNode } from "react";

export interface mainChildren {
    children: ReactNode
}

export interface BackgroundGridProps {
    color: string
    cellSize: string | number
    strokeWidth: number | string
    className?: string
    fade?: boolean
  }