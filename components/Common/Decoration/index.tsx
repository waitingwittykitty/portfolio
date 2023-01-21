import { useMemo } from "react";
import Snowfall from "react-snowfall";

const Decoration = (): JSX.Element => {
  const shouldShowSnow = useMemo(() => {
    const month = (new Date()).getMonth();

    return month < 3 || month > 10;
  }, []);

  return (
    <div>
      {shouldShowSnow && (
        <Snowfall
          color='#dee4fd'
          snowflakeCount={200}
          radius={[0.5, 3]}
          speed={[-0.5, 2]}
          wind={[0.5, 3]}
        />
      )}
    </div>
  );
};

export default Decoration;
