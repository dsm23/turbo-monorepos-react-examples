import type { FunctionComponent } from "react";

type Props = {
  scrollPercentage: number;
};

const HorizontalIndicator: FunctionComponent<Props> = ({
  scrollPercentage = 0,
}) => (
  <div className="fixed top-0 h-2 w-full bg-transparent">
    <div
      className="h-2 bg-secondary-foreground"
      style={{
        width: `${scrollPercentage}%`,
      }}
    />
  </div>
);

export default HorizontalIndicator;
