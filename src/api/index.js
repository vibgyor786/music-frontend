import axios from "axios";
// const baseURL = "http://localhost:4000/";
const baseURL = "https://music-backend-psi.vercel.app/";

export const validateUser = async (token) => {
  console.log(token)
  try {
    
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        Authorization: "Bearer " + token,
        // 'Access-Control-Allow-Origin': "Authorization",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllArtist = async () => {
  try {
    const res = await axios.get(`${baseURL}api/artists/getAll`, {headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }},);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}api/users/getUsers`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }});
    return res.data;
  } catch (error) {
    return null;
  }
};

export const removeUser = async (userId) => {
  try {
    const res = axios.delete(`${baseURL}api/users/delete/${userId}`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }});
    return res;
  } catch (error) {
    return null;
  }
};

export const getAllSongs = async () => {
  try {
    const res = await axios.get(`${baseURL}api/songs/getAll`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }});
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllAlbums = async () => {
  try {
    const res = await axios.get(`${baseURL}api/albums/getAll`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }});
    return res.data;
  } catch (error) {
    return null;
  }
};

export const changingUserRole = async (userId, role) => {
  try {
    const res = axios.put(`${baseURL}api/users/updateRole/${userId}`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }}, {
      data: { role: role },
    });
    return res;
  } catch (error) {
    return null;
  }
};

export const saveNewArtist = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/artists/save`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }}, { ...data });
    return (await res).data.artist;
  } catch (error) {
    return null;
  }
};

export const saveNewAlbum = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/albums/save`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }}, { ...data });
    return (await res).data.album;
  } catch (error) {
    return null;
  }
};

export const saveNewSong = async (data) => {
  console.log(data)
  try {
    const res = axios.post(`${baseURL}api/songs/save`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }} ,{ ...data });
    return (await res).data.song;
  } catch (error) {
    return null;
  }
};

export const deleteSongById = async (id) => {
  try {
    const res = axios.delete(`${baseURL}api/songs/delete/${id}`,{headers: {
      // Authorization: "Bearer " + token,
      // 'Access-Control-Allow-Origin': "Authorization",
      "Content-Type": "application/json",
    }});
    return res;
  } catch (error) {
    return null;
  }
};
