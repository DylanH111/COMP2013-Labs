import ResortCard from "./ResortCard";
import type { ResortCardProps } from "../data/data";

interface ResortContainerProps {
  listings: ResortCardProps[];
}
export default function ResortContainer({ listings }: ResortContainerProps) {
  return (
    <div className="ResortContainer">
      {listings.map((list) => (
        <ResortCard key={list.id} {...list} />
      ))}
    </div>
  );
}
