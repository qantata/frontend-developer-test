import api from "../lib/api";

const fetchData = async (users) => {
  let result;
  if (users) {
    result = await api.getUsersDiff();
  } else {
    result = await api.getProjectsDiff();
  }

  const formattedResult = result.data.map((u) => {
    const date = new Date(u.timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return {
      id: u.id,
      date: `${year}-${month}-${day}`,
      oldValue: u.diff[0].oldValue,
      newValue: u.diff[0].newValue,
    };
  });

  return formattedResult;
};

export const fetchUsers = async () => {
  return await fetchData(true);
};

export const fetchProjects = async () => {
  return await fetchData(false);
};
