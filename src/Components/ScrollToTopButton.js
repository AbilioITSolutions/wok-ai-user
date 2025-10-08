import React, { useState, useEffect } from 'react';
import { Fab, Fade } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Use multiple methods to detect scroll position for better compatibility
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const shouldShow = scrollTop > 100; // Lower threshold for easier testing

      // Debug log to verify scroll detection is working
      if (shouldShow !== isVisible) {
        console.log('Scroll position:', scrollTop, 'Show button:', shouldShow);
      }

      setIsVisible(shouldShow);
    };

    // Check immediately
    toggleVisibility();

    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    document.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top - handles all scrollable containers
  const scrollToTop = () => {
    console.log('🚀 Scroll to top clicked'); // Debug log
    console.log('📍 Current scroll positions:');
    console.log('  - window.pageYOffset:', window.pageYOffset);
    console.log('  - document.documentElement.scrollTop:', document.documentElement.scrollTop);
    console.log('  - document.body.scrollTop:', document.body.scrollTop);

    // Method 1: Scroll main window/document
    console.log('📜 Method 1: Scrolling main containers...');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    console.log('✅ Main containers scrolled to 0');

    // Method 2: Find and scroll ALL scrollable elements
    const scrollAllElements = () => {
      const allElements = document.querySelectorAll('*');
      const scrollableElements = [];

      console.log('🔍 Method 2: Scanning for scrollable elements...');
      console.log('  - Total elements to check:', allElements.length);

      allElements.forEach(element => {
        // Check if element is scrollable and actually has scrollable content
        const computedStyle = window.getComputedStyle(element);
        const hasOverflow = (
          computedStyle.overflow === 'auto' ||
          computedStyle.overflow === 'scroll' ||
          computedStyle.overflowY === 'auto' ||
          computedStyle.overflowY === 'scroll'
        );

        // Only include if it has scrollable content
        if (hasOverflow && element.scrollHeight > element.clientHeight + 1) {
          scrollableElements.push(element);
        }
      });

      console.log('✅ Found scrollable elements:', scrollableElements.length);

      // Scroll all scrollable elements to top
      scrollableElements.forEach((element, index) => {
        try {
          const oldScrollTop = element.scrollTop;
          element.scrollTop = 0;
          console.log(`  📦 Element ${index + 1}: ${element.tagName}${element.className ? '.' + element.className : ''}${element.id ? '#' + element.id : ''} - Scrolled from ${oldScrollTop} to ${element.scrollTop}`);
        } catch (e) {
          console.log(`  ❌ Failed to scroll element ${index + 1}:`, e.message);
        }
      });

      return scrollableElements;
    };

    // Method 3: Target common scrollable containers by selector
    const targetCommonContainers = () => {
      console.log('🎯 Method 3: Targeting common containers...');
      const selectors = [
        'main',
        '.App',
        '#root',
        '[data-reactroot]',
        '.MuiBox-root',
        '.home-container',
        '.content-container',
        '.scroll-container',
        '.page-container',
        // Material-UI specific selectors
        '[class*="MuiContainer-root"]',
        '[class*="MuiPaper-root"]',
        // Common layout containers
        '.container',
        '.content',
        '.main',
        '.page',
        // Section containers that might be scrollable
        'section',
        'article',
        // React Router containers
        '[class*="router"]',
        '[class*="outlet"]'
      ];

      console.log('  - Selectors to check:', selectors.length);

      selectors.forEach((selector, index) => {
        try {
          const elements = document.querySelectorAll(selector);
          console.log(`  🔎 Selector ${index + 1}: "${selector}" found ${elements.length} elements`);

          elements.forEach((element, elemIndex) => {
            if (element && element.scrollTop !== undefined && element.scrollHeight > element.clientHeight + 1) {
              const oldScrollTop = element.scrollTop;
              element.scrollTop = 0;
              console.log(`    📦 Element ${elemIndex + 1}: ${element.tagName}${element.className ? '.' + element.className : ''}${element.id ? '#' + element.id : ''} - Scrolled from ${oldScrollTop} to ${element.scrollTop}`);
            }
          });
        } catch (e) {
          console.log(`  ⚠️ Selector ${index + 1} "${selector}" failed:`, e.message);
        }
      });
    };

    // Execute all scroll methods
    console.log('⚡ Executing all scroll methods...');
    scrollAllElements();
    targetCommonContainers();

    // Method 4: Final verification and retry
    console.log('🔄 Method 4: Final verification and retry...');
    setTimeout(() => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log('📊 Final scroll positions after delay:');
      console.log('  - window.pageYOffset:', window.pageYOffset);
      console.log('  - document.documentElement.scrollTop:', document.documentElement.scrollTop);
      console.log('  - document.body.scrollTop:', document.body.scrollTop);
      console.log('  - Max scroll value:', currentScroll);

      if (currentScroll > 0) {
        console.log('⚠️ Main scroll still > 0, forcing scroll again...');
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      // Re-scroll all scrollable elements as final check
      console.log('🔄 Re-scanning for any remaining scrollable content...');
      scrollAllElements();

      // Additional check for any remaining scrollable content
      setTimeout(() => {
        console.log('🔍 Final cleanup scan...');
        const elements = document.querySelectorAll('*');
        let remainingScrollCount = 0;

        elements.forEach(element => {
          try {
            if (element.scrollTop > 0) {
              const computedStyle = window.getComputedStyle(element);
              const hasOverflow = computedStyle.overflow === 'auto' || computedStyle.overflow === 'scroll' ||
                                 computedStyle.overflowY === 'auto' || computedStyle.overflowY === 'scroll';

              if (hasOverflow && element.scrollHeight > element.clientHeight + 1) {
                const oldScrollTop = element.scrollTop;
                element.scrollTop = 0;
                remainingScrollCount++;
                console.log(`  🧹 Found remaining scroll: ${element.tagName}${element.className ? '.' + element.className : ''}${element.id ? '#' + element.id : ''} - Scrolled from ${oldScrollTop} to ${element.scrollTop}`);
              }
            }
          } catch (e) {
            // Skip elements that can't be scrolled
          }
        });

        console.log(`✅ Cleanup complete. Fixed ${remainingScrollCount} remaining scrollable elements.`);
        console.log('🎉 Scroll to top operation finished!');
      }, 100);
    }, 50);
  };

  return (
    <Fade in={isVisible} timeout={300}>
      <Fab
        size="small"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
          zIndex: 6000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};

export default ScrollToTopButton;
