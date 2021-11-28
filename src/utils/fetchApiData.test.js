import { fetchUsers, fetchProjects } from "./fetchApiData";

describe("fetchApiData", () => {
  describe("fetchUsers", () => {
    it("returns users data", async () => {
      const data = await fetchUsers();
      expect(data.length).toBe(3);
    });
  });

  describe("fetchProjects", () => {
    it("returns projects data", async () => {
      const data = await fetchProjects();
      expect(data.length).toBe(3);
    });
  });
});
