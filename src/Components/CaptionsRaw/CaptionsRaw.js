import React, { useMemo } from "react";
// import { parse } from "subtitle";
import Captions from "./Captions";

export default function CaptionsRaw({ raw }) {
  const parsed = useMemo(() => raw, [raw]);
  return <Captions captions={
    [
      {
        "start": 0,
        "end": 2000,
        "text": "This is the first two seconds"
      },
      {
        "start": 2001,
        "end": 4000,
        "text": "This is the second two seconds"
      },
      {
        "start": 5000,
        "end": 6000,
        "text": "This is the third caption"
      }
    ]
  } />;
}