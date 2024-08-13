import { cn } from "@/lib/utils";
import { Icon, LucideIcon } from "lucide-react";

type Props = {
    active?: boolean;
    icon: LucideIcon
}

const NavButton = ({ active, icon: Icon }: Props) => {
    return (
        <button className={cn(
            "p-2 px-3 rounded-lg",
            active && "bg-sky-500/40"
        )}>
            <Icon className="text-neutral-800" />
        </button>
    )
}

export default NavButton