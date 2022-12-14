import React, { memo } from "react";
import CaptionTime from "./CaptionTime";
import CaptionText from "./CaptionText";

export default memo(function Caption({ start, end = undefined, format, text}) {
  return (
    <li className="caption">
        <CaptionTime start={start} end={end} format={format} />
        <CaptionText text={text} />
    </li>
  );
});