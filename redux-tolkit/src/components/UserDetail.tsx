import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import Chance from "chance";
import {useDispatch} from "react-redux";
import { addUser } from "../store/slice/UserSlice";

const chance = Chance()

const userDetail: React.FC = () => {
  const fakeUserData = () =>{
    console.log(chance.name({middle: true}));
    return chance.name({middle: true});
}  

  const dispatch = useDispatch()

  const addNewUser = (payload: string) =>{
    console.log(payload)
    dispatch(addUser(payload))
  };

  return (
    <>
      <div>
        <button onClick={()=> addNewUser(fakeUserData())}>Add user</button>
        <br />
        <ul>
          <li>Hii</li>
          <li>Hello</li>
        </ul>
      </div>
      <div>
        <DeleteAllUser />
      </div>
    </>
  );
};

export default userDetail;
