
import { useState, useEffect, useRef, RefObject } from 'react';

const useIntersectionObserver = <T extends HTMLElement,>(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Disconnect after first intersection to avoid re-triggering
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
