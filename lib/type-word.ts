"use client";
import { useEffect, useState } from "react";

export const TypingText = () => {
  const typeArray = [
    "Frontend Developer",
    "React & Next.js Developer",
    "Web Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isAdding) {
          if (index >= typeArray[typeIndex].length) {
            setIsAdding(false);
            setTimeout(() => {}, 2000);
            return;
          }
          setIndex((prev) => prev + 1);
        } else {
          if (index === 0) {
            setIsAdding(true);
            setTypeIndex((prev) => (prev + 1) % typeArray.length);
          } else {
            setIndex((prev) => prev - 1);
          }
        }
      },
      isAdding ? 200 : 100
    );

    setText(typeArray[typeIndex].slice(0, index));

    return () => clearTimeout(timeout);
  }, [index, isAdding, typeIndex, typeArray]);

  return text;
};
