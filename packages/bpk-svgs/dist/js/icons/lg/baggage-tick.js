import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M6 6.5V5.455c0-.384.11-.85.457-1.228C7.312 3.29 9.297 2 12 2c2.693 0 4.547 1.279 5.445 2.159.393.384.555.891.555 1.356V6.5a.5.5 0 0 0 .5.5h.532C20.12 7 21 7.933 21 9.083V18c0 1.5-1.5 3-3 3H6c-1.5 0-3-1.5-3-3V9.083C3 7.933 3.881 7 4.968 7H5.5a.5.5 0 0 0 .5-.5zm10 0v-.528a.899.899 0 0 0-.323-.71A5.854 5.854 0 0 0 12 4c-1.704 0-2.997.676-3.694 1.233A.863.863 0 0 0 8 5.917V6.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zm-.293 6.207a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" /></svg>);