import { ReactNode } from "react";

export default function CardLabel({ children }: { children: ReactNode}){
    return <span className="text-xs text-nowrap bg-black bg-opacity-30 py-1 px-2 rounded-md text-white font-semibold border-2 border-zinc-800 border-opacity-50">
        {children}
    </span>
}