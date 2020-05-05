import * as React from "react";
import { StaticBlockProps } from "./src/index";

declare class StaticBlock extends React.Component<StaticBlockProps, any> {}
declare module "static-block" {}
export default StaticBlock;
