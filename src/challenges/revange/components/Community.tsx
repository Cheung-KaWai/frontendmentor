import { Image } from "./Image";
import { MiddleCutoutShape } from "./MiddleCutoutShape";

export const Community = () => {
  return (
    <MiddleCutoutShape
      area="div1"
      rotate="180deg"
      right="-2px"
      noBorder={true}
    >
      <Image src="/assets/revange/plates.jpg" />
    </MiddleCutoutShape>
  );
};
