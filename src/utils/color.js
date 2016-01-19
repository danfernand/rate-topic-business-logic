// rating from 0 to 1
export default function color(rating) {
  const hue = (rating * 120).toString(10);
  return `hsl(${hue},100%,50%)`;
}
