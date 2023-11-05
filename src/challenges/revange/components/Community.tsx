import { useMediaQuery } from "usehooks-ts";
import { Image } from "./Image";
import { MiddleCutoutShape } from "./MiddleCutoutShape";

export const Community = () => {
  const tablet = useMediaQuery("(max-width: 768px)");
  return (
    <MiddleCutoutShape
      area="div1"
      rotate={tablet ? "0" : "180deg"}
      right={tablet ? "calc(50% - 5px)" : "-2px"}
      translate={tablet ? "50%,-100%" : "0,-50%"}
      top={tablet ? "calc(100% + 2px)" : "50%"}
      noBorder={true}
    >
      <Image src="/assets/revange/plates.jpg" />
    </MiddleCutoutShape>
  );
};
