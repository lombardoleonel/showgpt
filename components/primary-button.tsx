import { MouseEventHandler, ReactNode } from "react";

export default function PrimaryButton({ children, type, onClick, className }: { children: ReactNode, type: "submit" | "button", onClick?: MouseEventHandler, className?: string }){
    return <button type={type} onClick={onClick} className={`group flex justify-center items-center gap-2 flex-nowrap text-nowrap font-semibold w-full py-2 px-4 bg-black bg-opacity-30 rounded-lg border-2 border-zinc-800 border-opacity-50 hover:bg-white hover:border-white hover:text-black transition-colors duration-500 ${className}`}>
        { children }
    </button>
}