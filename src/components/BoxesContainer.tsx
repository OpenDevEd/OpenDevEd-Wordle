import Box from "./Box";
import { motion } from "framer-motion";

export default function BoxesContainer({
  strings,
  string,
  colors,
}: {
  strings: string[];
  string: string;
  colors: string[][];
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
    className="grid grid-cols-5 grid-rows-6 gap-2">
      {Array(6)
        .fill(0)
        .map((_, row) =>
          Array(5)
            .fill(0)
            .map((_, column) => (
              <Box
                key={row * 5 + column}
                row={row}
                column={column}
                strings={strings}
                string={string}
                colors={colors}
              />
            ))
        )}
    </motion.div>
  );
}
