let nrCalled = 0;

const fetchData = async (users) => {
  // Simulate error that the API throws
  if (++nrCalled % 2 === 0) {
    throw new Error();
  }

  const testData = {
    date: "2020-10-20",
    oldValue: "John",
    newValue: "Bruce",
  };

  return Promise.resolve([
    {
      ...testData,
      id: `e28d290a-a2f2-48c2-9001-${Math.random() * 1000000}`,
    },
    {
      ...testData,
      id: `e28d290a-a2f2-48c2-9001-${Math.random() * 1000000}`,
    },
    {
      ...testData,
      id: `e28d290a-a2f2-48c2-9001-${Math.random() * 1000000}`,
    },
  ]);
};

export const fetchUsers = async () => {
  return await fetchData(true);
};

export const fetchProjects = async () => {
  return await fetchData(false);
};
