import * as M from "@map/MapStyle";
import Topbar from "../../components/Topbar/Topbar";

function Map() {
  return (
    <>
      <M.Map>지도</M.Map>
      <Topbar title={"지도"} />
    </>
  );
}

export default Map;
