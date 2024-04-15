import { create } from "zustand";

const useStore = create((set) => ({
  customers: 34,
  isVideoFormEdit: false,
  videoToEditId: null,
  isAudioFormEdit: false,
  isCustomerFormEdit: false,
  isVideoFormCreate: false,
  isAudioFormCreate: false,
  isCustomerFormCreate: false,
  activateVideoFormEdit: () =>
    set((state) => ({ isVideoFormEdit: (state.isVideoFormEdit = true) })),
  activateAudioFormEdit: () =>
    set((state) => ({ isAudioFormEdit: (state.isAudioFormEdit = true) })),
  activateCustomerFormEdit: () =>
    set((state) => ({ isCustomerFormEdit: (state.isCustomerFormEdit = true) })),
  activateVideoFormCreate: () =>
    set((state) => ({ isVideoFormCreate: (state.isVideoFormCreate = true) })),
  activateAudioFormCreate: () =>
    set((state) => ({ isAudioFormCreate: (state.isAudioFormCreate = true) })),
  activateCustomerFormCreate: () =>
    set((state) => ({
      isCustomerFormCreate: (state.isCustomerFormCreate = true),
    })),
  setVideoToEditId: (videoId) =>
    set((state) => ({ videoToEditId: (state.videoToEditId = videoId) })),
}));

export default useStore;
