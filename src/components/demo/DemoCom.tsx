import React from 'react';
import {Button} from "antd-mobile";
import {IAppProps} from "./interface";
import "./demo.scss";

export function DemoCom (props: IAppProps) {
    const {text="123"} = props;
  return (
    <div className="abc">
      {text}
      <Button type="primary">primary</Button>
    </div>
  );
}
