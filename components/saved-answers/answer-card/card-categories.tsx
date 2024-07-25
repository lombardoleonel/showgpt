import CategoryIcon from "@/components/icons/category-icon";
import CardLabel from "./card-label";

export default function CardCategories({ categories }: { categories: string | string[]}){
    return <div className="flex items-center gap-2">
        <CategoryIcon className="w-3 h-3"/>
        <div className="flex gap-2">
            {
                Array.isArray(categories) && categories.length
                    ? categories.map(category => <CardLabel>{category}</CardLabel>)
                    : <CardLabel>{categories}</CardLabel>
            }
        </div>
    </div>
}