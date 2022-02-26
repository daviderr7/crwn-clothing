import {
  converCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispath) => {
    const collectionRef = firestore.collection("collections");
    dispath(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap =
        converCollectionsSnapshotToMap(snapshot);
        dispath(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispath(fetchCollectionsFailure(error.message)));
  };
};
