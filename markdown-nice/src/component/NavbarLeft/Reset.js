import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Button, Tooltip, Modal} from "antd";
// import resetIcon from "../icon/reset.svg";

import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import TEMPLATE from "../../template/index";
import SvgIcon from "../../icon";
import "./Reset.css";

@inject("content")
@inject("navbar")
@observer
class Reset extends Component {
  showConfirm = () => {
    Modal.confirm({
      title: "确认重置么?",
      content: "重置后将丢失本地保存的文本和自定义样式",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onOk: () => {
        this.props.content.setContent(TEMPLATE.content);
        this.props.content.setStyle(TEMPLATE.style.normal);
        this.props.content.setCustomStyle(TEMPLATE.style.custom);
        this.props.navbar.setTemplateNum(0);
      },
      onCancel() {},
    });
  };

  render() {
    return (
      <Tooltip placement="bottom" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="重置">
        <Button onClick={this.showConfirm} className="nice-btn-reset">
          <SvgIcon name="reset" className="nice-btn-reset-icon" />
        </Button>
      </Tooltip>
    );
  }
}

export default Reset;
