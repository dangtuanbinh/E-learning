import {useState} from "react";

const useModal = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return {
        modal,
        toggle
    }
}
export default useModal;