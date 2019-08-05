import { useState, useEffect } from "react";

const useModal = obj => {
  let [visible, setVisible] = useState(obj.visible);

  useEffect(()=>{
      console.log(visible)
  },[visible])

  const changeModalVisible = (statue = false) => {
    setVisible(statue);
  };

  return [
    {
      visible,
      changeModalVisible
    }
  ];
};

export default useModal;
