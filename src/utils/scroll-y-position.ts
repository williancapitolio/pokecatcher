import { useAppDispatch, useAppSelector } from "../hooks/use-app-redux";

import { shouldNotScroll } from "../features/scrollbar/scrollbar-slice";

export function ScrollYPosition() {
  const { mustScroll, scrollYPosition } = useAppSelector(
    (state) => state.scrollbar
  );

  const dispatch = useAppDispatch();

  function setScrollYPosition() {
    window.scrollTo({ top: scrollYPosition, behavior: "instant" });
  }

  mustScroll &&
    setTimeout(() => {
      setScrollYPosition();
      dispatch(shouldNotScroll());
    }, 10);
}
