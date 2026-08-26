
import { useState, useEffect, useRef, RefObject } from 'react';

const useIntersectionObserver = <T extends HTMLElement,>(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(true);
  const ref = useRef<T>(null);

  const threshold = options.threshold;
  const root = options.root;
  const rootMargin = options.rootMargin;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, { threshold, root, rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;

