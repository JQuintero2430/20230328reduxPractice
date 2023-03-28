import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handledChange = (e) => {
    dispatch(changeEmail(e.target.value));

    return (
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={handledChange}
      />
    );
  };
};
