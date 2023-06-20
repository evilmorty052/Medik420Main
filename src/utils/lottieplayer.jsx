import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer({width, height, src}) {
    return (
        <Player
  autoplay
  loop
  src={src}
  style={{ width: width, height:height}}
>
  <Controls visible={false}  />
</Player>
        )
}