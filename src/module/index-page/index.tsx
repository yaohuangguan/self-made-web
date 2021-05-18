
import React, {useContext} from "react";
import { Button } from "antd";
import ProjectLayout from "../../layout/home";
import { ContextCenter} from '../../context/context'
function IndexPage(props) {
    console.log(`props`, props)
    const context = useContext(ContextCenter);
    console.log(`context`, context)
  return (
    <ProjectLayout >
      <Button>你好</Button>
    </ProjectLayout>
  );
}

export default IndexPage;
