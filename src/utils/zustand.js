import { create } from 'zustand';
import axios from './axios';

const id = localStorage.getItem("userId");

const useData = create((set, get) => ({
    data: null,
    getData: () => axios.get(`/users/${id}`).then((response) => {
        set({ data: response.data })
        // console.log(response.data);
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


export default useData;



/*
    for zustand
    create function for get a user data from api
    create a function for update a user data to api

*/
