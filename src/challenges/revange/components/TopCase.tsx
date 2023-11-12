import { CornerButton } from "./CornerButton";
import { CornerCutoutShape } from "./CornerCutoutShape";
import { Image } from "./Image";

export const TopCase = () => {
  return (
    <CornerCutoutShape
      area="div3"
      type="square"
      top="0"
      right="0"
      className="topCase"
    >
      <Image src="/assets/revange/circle.jpg" />
      <CornerButton black={true} />
    </CornerCutoutShape>
  );
};
