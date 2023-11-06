import { CornerButton } from "./CornerButton";
import { CornerCutoutShape } from "./CornerCutoutShape";
import { Image } from "./Image";

export const Product = () => {
  return (
    <CornerCutoutShape
      area="div4"
      type="square"
      top="0"
      right="0"
    >
      <Image src="/assets/revange/plates2.jpg" />
      <CornerButton black={false} />
    </CornerCutoutShape>
  );
};
