import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Switch} from "antd";

@inject("navbar")
@observer
class SyncScroll extends Component {
  handleChange = (key) => {
    this.props.navbar.setSyncScroll(key);
  };

  render() {
    return (
      <div>
        同步滚动：
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          checked={this.props.navbar.isSyncScroll}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SyncScroll;
