import type { ResortCardProps } from "../data/data";
export default function ResortCard({ 
  pic, 
  country, 
  location, 
  rating, 
  price, 
}: ResortCardProps) {
  return (
    <div className="ResortCard">
      <img src={pic} alt="" width="140px" />
      <h1>{country}</h1>
      <h2>{location}</h2>
      <p style={{ color: rating >= 4.0 ? "green":"red"}}> {rating} ★ </p>
      <p style={{fontWeight:"lighter"}}> {"$" + price + "/night"}</p>
    </div>
  );
}
