import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - E-Book`;
  }, [title]);
  return null;
};
