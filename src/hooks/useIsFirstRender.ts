// https://stackoverflow.com/a/63776262

import { useEffect, useRef } from "react";

const useIsFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

export { useIsFirstRender };
