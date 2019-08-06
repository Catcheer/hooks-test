import React from "react";
import { Modal, Button } from "antd";
import useModal from "../usehooks/useModal";

const CompModal = props => {
  let initValue = {
    visible: false,
    setVisible: () => {}
  };
  const [obj] = useModal(initValue);
  const {setVisible}=obj
  return (
    <React.Fragment>
      {obj.visible ? (
        <Modal
          visible={obj.visible}
          width={600}
          onCancel={()=>{setVisible(false)}}
          onOk={()=>{setVisible(false)}}
        >
          {props.count}
        </Modal>
      ) : (
        <Button onClick={()=>{setVisible(true)}} type="primary">show</Button>
      )}
    </React.Fragment>
  );
};

export default CompModal;
