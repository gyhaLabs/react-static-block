import * as React from "react";
import { useStyles } from "./static-block.styles";

export enum StaticBlockHeader {
    ThreeRows = "three-rows",
    TwoRows = "two-rows",
}

export interface StaticBlockProps {
    headerStyle: StaticBlockHeader.ThreeRows | StaticBlockHeader.TwoRows;
    title: string;
    subTitle: string;
    additional: string;
}

const StaticBlock: React.SFC<StaticBlockProps> = (props) => {
    const classes = useStyles();
    let header = null;
    switch (props.headerStyle) {
        case StaticBlockHeader.ThreeRows:
            header = (
                <div className={classes.header}>
                    <p>{props.title}</p>
                    <p>{props.subTitle}</p>
                    <p>{props.additional}</p>
                </div>
            );
            break;
        case StaticBlockHeader.TwoRows:
            header = (
                <div className={classes.header}>
                    <p>{props.title}</p>
                    <p>
                        <span>{props.subTitle}</span>
                        <span>{props.additional}</span>
                    </p>
                </div>
            );
            break;
        default:
            header = (
                <div className={classes.header}>
                    <p>{props.title}</p>
                    <p>{props.subTitle}</p>
                    <p>{props.additional}</p>
                </div>
            );
    }

    return (
        <div className={classes.component}>
            {header}
            <div className={classes.content}>{"Content"}</div>
        </div>
    );
};

export default StaticBlock;
