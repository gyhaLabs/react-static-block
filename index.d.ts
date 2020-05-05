import * as React from "react";
import { StaticBlockProps } from "./src/index";

declare class StaticBlock extends React.Component<StaticBlockProps, any> {}
declare module "react-static-block" {}
export { StaticBlockHeader } from "./src/index";
export default StaticBlock;
