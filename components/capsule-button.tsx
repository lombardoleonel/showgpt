import { ReactNode } from "react";

export default function CapsuleButton({ children, onClick, styledCondition }: { children: ReactNode, onClick: () => void, styledCondition?: boolean }){
    return <button type="button" onClick={onClick} className={`text-xs sm:text-sm font-bold py-2 px-4 rounded-full border-2 transition-colors duration-300 ${ (styledCondition || false) ? "bg-white border-white text-black" : "border-white border-opacity-25 hover:border-opacity-100"}`}>
        { children }
    </button>
}