import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import s from "./ProgressBar.module.css";
import type { ProgressBarProps } from "./types";

function ProgressBar({ progress, current, total }: ProgressBarProps) {
  return (
    <Box className={s.progressWrapper}>
      <Box className={s.progressBarContainer}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={s.progressFill}
        >
          <Typography className={s.progressText}>
            {`${current} / ${total}`}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

export default ProgressBar;