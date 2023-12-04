import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'

export const mainStore = defineStore(
  'main',
  () => {
    const host = 'http://localhost:8000/api/';

    const doctorId = ref('');

    const setDoctor = (id: string) => {
      doctorId.value = id;
    };

    const userId = ref('');

    const setUser = (id: string) => {
      userId.value = id;
    };

    const dogId = ref('');

    const setDog = (id: string) => {
      dogId.value = id;
    };

    // NORMAL CRUD OPERATIONS
    const get = async (topic: string) => {
      const response = await api.get(host + topic);
      return await response.data;
    };

    const post = async (topic: string, data: object) => {
      const response = await api.post(host + topic, data);
      return response.status;
    };

    const del = async (topic: string, id: string) => {
      const response = await api.delete(host + topic + id);
      return response.status;
    };

    // ADVANCED CRUD OPERATIONS
    const getId = async (topic: string, id: string) => {
      const response = await api.get(host + topic + id);
      return await response.data;
    };

    const put = async (topic: string, id: string, data: object) => {
      const response = await api.put(host + topic + id, data);
      return response.status;
    };

    const notify = (title : string, text: string, icon: string) => Swal.fire({ title, text, icon, confirmButtonText: 'OK' })

    return { userId, setUser, get, post, put, del, getId, notify, dogId, setDog, doctorId, setDoctor, host };
  },
  {
    persist: true,
  }
);
