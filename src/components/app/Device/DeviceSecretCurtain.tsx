import {
  actionSetIsUserInteracting,
  useSubscribeIsUserInteracting,
} from "../../../state/isUserInteracting.state";
import "./DeviceSecretCurtain.scss";

function DeviceSecretCurtain() {
  const isUserInteracting = useSubscribeIsUserInteracting();
  if (isUserInteracting) return null;

  return (
    <div
      className="DeviceSecretCurtain"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        actionSetIsUserInteracting(true);
      }}
    />
  );
}

export default DeviceSecretCurtain;
