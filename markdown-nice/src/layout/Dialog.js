import React, {Component} from "react";
import ImageDialog from "../component/Dialog/ImageDialog";
import LinkDialog from "../component/Dialog/LinkDialog";
import AboutDialog from "../component/Dialog/AboutDialog";
import VersionDialog from "../component/Dialog/VersionDialog";
import FormDialog from "../component/Dialog/FormDialog";
import SettingDialog from "../component/Dialog/SettingDialog";

class Dialog extends Component {
  render() {
    return (
      <div>
        <ImageDialog />
        <LinkDialog />
        <AboutDialog />
        <VersionDialog />
        <FormDialog />
        <SettingDialog />
      </div>
    );
  }
}

export default Dialog;
