import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDelay = 1500,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentWord) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="inline-flex items-center min-w-[20px]">
      <span>{text}</span>
      <span className="animate-blink ml-[2px] w-[2px] bg-emerald-500 h-[1.2em]" />
    </span>
  );
}
