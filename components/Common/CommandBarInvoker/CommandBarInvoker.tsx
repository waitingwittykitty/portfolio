import cx from "classnames";
import { useKBar } from "kbar";

import { CommandIcon } from "@/components/Shared/Icons";

const CommandBarInvoker = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <button
      className={cx(
        "fixed right-8 bottom-8 rounded-md p-1 transition duration-1000",
        "hover:shadow-commandButton focus:outline-none ease-boop",
        "focus-visible:shadow-commandButton transition-transform hover:rotate-90",
      )}
      onClick={() => query.toggle()}
      aria-label="Command Bar"
    >
      <CommandIcon />
    </button>
  );
};

export default CommandBarInvoker;
