import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface ScrollFadeContainerProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}
const ScrollFadeContainer = ({
  children,
  width = 200,
}: ScrollFadeContainerProps) => {
  const scrollRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current as any;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setShowTop(scrollLeft > 0);
    setShowBottom(scrollLeft + clientWidth < scrollWidth);


  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current as any;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <Box position="relative" height={'100%'} width={'100%'}>
      {/* Scrollable content */}
      <Box
        ref={scrollRef}
        sx={{
          //   overflowY: 'auto',
          //   overflowX: 'hidden',
          overflowY: 'hidden',
          overflowX: 'auto',
          width: '100%',
          height: 'fit-content', // ✅ keep this here
          boxSizing: 'border-box',
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}
      >
        <Box sx={{ minHeight: '100%', minWidth:'100%' }}>{children}</Box>
      </Box>

      {/* Top/Bottom Fades */}
      {showTop && (
        <Box
          sx={{
            position: 'absolute',
            top:0,
            left: 0,
            width: 100,
            height: '100%',
            background: 'linear-gradient(to right, #ffffff, transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
      {showBottom && (
        <Box
          sx={{
            position: 'absolute',
            top:0,
            right: 0,
            width: 100,
            height: '100%',
            background: 'linear-gradient(to left, #ffffff, transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
    </Box>
  );
};

export default ScrollFadeContainer;
