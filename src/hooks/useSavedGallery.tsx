import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const useSavedGallery = () => {
  const [savedGallery, setSavedGallery] = useLocalStorage("SAVED_GALLERY", []);

  const check = useCallback(
    (data: any) => {
      if (data && savedGallery?.length) {
        const galleryIndex = savedGallery.findIndex(
          (key: { id: number | string }) => key.id === data.id
        );

        return galleryIndex > -1 ? true : false;
      }

      return false;
    },
    [savedGallery]
  );

  const update = useCallback(
    (data: any) => {
      const galleryIndex = savedGallery.findIndex(
        (key: { id: number | string }) => key.id === data.id
      );
      if (galleryIndex > -1) {
        savedGallery.splice(galleryIndex, 1);
        setSavedGallery([...savedGallery]);

        return;
      }
      setSavedGallery([data, ...savedGallery]);
    },
    [savedGallery, setSavedGallery]
  );

  return { check, update, savedGallery };
};

export default useSavedGallery;
