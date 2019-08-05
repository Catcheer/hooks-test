import React from "react";
import { Modal, Button } from "antd";
import useModal from "../usehooks/useModal";

const CompModal = props => {
  let initValue = {
    visible: true,
    changeModalVisible: () => {}
  };
  const [obj] = useModal(initValue);
  const {changeModalVisible}=obj
  return (
    <React.Fragment>
      {obj.visible ? (
        <Modal
          visible={obj.visible}
          width={600}
          onCancel={()=>{changeModalVisible(false)}}
          onOk={()=>{changeModalVisible(false)}}
        >
          {props.count}
        </Modal>
      ) : (
        <Button onClick={()=>{changeModalVisible(true)}} type="primary">show</Button>
      )}
    </React.Fragment>
  );
};

export default CompModal;
