import { memo, VFC } from "react";

import classes from "../../../theme/ScrollDownButton.module.scss";

export const ScrollDownButton: VFC = memo(() => {
  return (
    <>
      <div className={classes.scrollDown}>
        <span>scroll</span>
      </div>
    </>
  );
});
