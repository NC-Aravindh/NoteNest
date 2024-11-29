import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchNotes from "./fetchNotes";

const useFetchNote = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNotes(dispatch);
  }, []);
};

export default useFetchNote;
