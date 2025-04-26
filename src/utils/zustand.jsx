import { create } from 'zustand';
import axios from './axios';

// COMPONENT LIST (kerak bo‘lsa ko‘paytirish mumkin)
import { Profile } from '../Components/Profile';

const componentList = [
  { id: 1, title: 'Profile', component: () => <Profile /> },
  // { id: 2, title: 'SomethingElse', component: <AnotherComponent /> },
];

// 🧩 Component Store
 const useComponents = create((set) => ({
  comp: componentList[0],
  setComp: (index) => {
    if (componentList[index]) {
      set({ comp: componentList[index] });
    }
  },
  getAllComponents: () => componentList,
}));

const id = localStorage.getItem("userId");

const useData = create((set, get) => ({
    data: null,
    getData: () => axios.get(`/users/${id}`).then((response) => {
        set({ data: response.data })
    }).catch((error) => {
        console.log(error);
    }),
    updateUser: async (newData) => {
        try {
            const response = await axios.patch(`/users/${id}`, newData);
            set({ data: response.data });
        } catch (error) {
            console.error(error);
        }
    },
    load: true,
    SetLoading: () => set({ load: true }),
    RemoveLoading: () => set({ load: false }),

}));


export { useData, useComponents };



/*
    for zustand
    create function for get a user data from api
    create a function for update a user data to api

*/
