import { Skeleton, Typography } from "@mui/material";
import { useAppDispatch } from "../../Hooks";
import { IPhoto } from "../../Types";

import styles from "./PhotoItem.module.css";

interface PhotoItemProps extends IPhoto {
  loading?: boolean;
}

export default function PhotoItem({
  id,
  title,
  thumbnailUrl,
  url,
  albumId,
  loading = false,
}: PhotoItemProps) {
  const { openModalAction } = useAppDispatch();

  const onClickPhoto = () => {
    if (!loading) {
      openModalAction({ id, title, thumbnailUrl, url, albumId });
    }
  };

  return (
    <div onClick={onClickPhoto} className={styles["photoItem"]}>
      {loading ? (
        <Skeleton variant="rectangular" width={150} height={150} />
      ) : (
        <img src={thumbnailUrl} alt={title} />
      )}
      {loading ? (
        <Skeleton variant="text" width={160} />
      ) : (
        <Typography>{title}</Typography>
      )}
    </div>
  );
}
