import type { FunctionComponent } from "react";

type Props = {
  scrollPercentage: number;
};

const HorizontalIndicator: FunctionComponent<Props> = ({
  scrollPercentage,
}) => (
  <div className="fixed top-0 h-2 w-full bg-transparent">
    <div
      className="bg-secondary-foreground h-2"
      style={{
        width: `${scrollPercentage || 0}%`,
      }}
    />
  </div>
);

export default HorizontalIndicator;
