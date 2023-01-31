import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

const Decoration = (): JSX.Element => {
  const [shouldShowSnow, setShouldShowSnow] = useState(false);

  useEffect(() => {
    const month = (new Date()).getMonth();

    setShouldShowSnow(month < 3 || month > 10);
  }, []);

  return (
    <div>
      {shouldShowSnow && (
        <Snowfall
          color="#dee4fd"
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
