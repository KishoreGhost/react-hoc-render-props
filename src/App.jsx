import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";

import Hoc from "./components/HigherOrderCompo/Hoc";
import LikeImageHoc from "./components/HigherOrderCompo/LikeImageHoc";
import LikePostHoc from "./components/HigherOrderCompo/LikePostHoc";

import RenderProps from "./components/RenderProps/RenderProps";
import LikeImageProps from "./components/RenderProps/LikeImageProps";
import LikePostProps from "./components/RenderProps/LikePostProps";

let LikeImgHoc = Hoc(LikeImageHoc);
let LikePostH = Hoc(LikePostHoc);

function App() {
  return (
    <div id="main">
      <h3>Some Blog</h3>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>

      <div className="hoc">
        <h3>Higher Order Components</h3>
        <div className="buttons">
          <LikeImgHoc />
          <LikePostH />
        </div>
      </div>

      <div className="render-props">
        <h3>Render Props</h3>
        <div className="buttons">
          <RenderProps
            render={(count, increment) => {
              return <LikeImageProps count={count} increment={increment} />;
            }}
          />
          <RenderProps
            render={(count, increment) => {
              return <LikePostProps count={count} increment={increment} />;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
