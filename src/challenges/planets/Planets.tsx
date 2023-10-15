import { ActiveButton, Button } from "./components/Buttons";
import { colors } from "./lib/design";

export default function Website() {
  return (
    <div>
      <Button
        number={1}
        text="test"
      />
      <ActiveButton
        theme={{ background: colors.darkOrange }}
        number={1}
        text="test"
      />
    </div>
  );
}
