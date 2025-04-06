import React from "react";

const PingDot = ({
  top = "0",
  left = "0",
  width = "w-4",
  height = "h-4",
  scale = "scale-[.5]",
  color = "bg-green",
  bColor = "border-green",
}) => {
  const style = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    zIndex: 10,
  };

  return (
    <div style={style}>
      <span className={`relative flex justify-center items-center ${width} ${height}`}>
        {/* Outer Ring */}
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 border-2 ${bColor}`}
        ></span>
        {/* Inner Dot */}
        <span
          className={`absolute inset-0 m-auto rounded-full ${scale} ${color}`}
          style={{ width: "60%", height: "60%" }}
        ></span>
      </span>
    </div>
  );
};

export default PingDot;