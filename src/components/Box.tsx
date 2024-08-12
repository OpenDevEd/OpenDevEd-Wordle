import { motion } from "framer-motion";

export default function Box({
  row,
  column,
  strings,
  string,
  colors,
}: {
  row: number;
  column: number;
  strings: string[];
  string: string;
  colors: string[][];
}) {
  let char = "";
  if (strings.length === row) {
    char = string[column];
  } else if (strings.length > row) {
    char = strings[row][column];
  }
  let chosenColor = (colors[row] && colors[row][column]) ?? "transparent";
  
  return (
    <motion.div 
    initial={{ translateX: 0 }}
    animate={{ translateX: strings.length === row ? 25 : 0, transition: { duration: 0.25, delay: 0.15, bounce: 0.25 } }}
    className="md:size-[4.5rem] size-12 border border-neutral-400 flex items-center justify-center font-bold text-2xl text-neutral-300 uppercase text-center" style = {{ backgroundColor: chosenColor }}>
      {char}
    </motion.div>
  );
}
