import { Button, Modal, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import styles from "./ModalPhoto.module.css";

export default function ModalPhoto() {
  const { closeModalAction, deletePhotoAction } = useAppDispatch();
  const { openModal, activePhoto } = useAppSelector((state) => state.App);

  const onClickDeletePhoto = () => {
    if (activePhoto?.id) {
      deletePhotoAction(activePhoto.id);
    }
  };

  return (
    <Modal open={openModal} onClose={closeModalAction}>
      <div className={styles["modal"]}>
        <img
          src={activePhoto?.url}
          alt={activePhoto?.title}
          className={styles["img"]}
        />
        <Typography>{activePhoto?.title}</Typography>
        <Button onClick={onClickDeletePhoto}>delete photo</Button>
      </div>
    </Modal>
  );
}
