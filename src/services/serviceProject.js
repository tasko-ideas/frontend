import axios from "axios";

export default async function setProject(form) {
  await axios
    .post(
      "https://tasko-developer-03u6-dev.fl0.io/api/project/create",
      {
        name: form.getFieldValue("proyecto"),
        description: form.getFieldValue("tareaDesc"),
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZGY5MzcxOGZjNjVjOWVhMGJiNGQxNyIsImZ1bGxuYW1lIjoiR3VzdGF2byBGcmluZyIsImVtYWlsIjoiZ3VzdGF2b0BmcmluZy5jb20iLCJwYXNzd29yZCI6IiIsInByb2ZpbGVJbWFnZVVSTCI6IiIsInByb2plY3RzIjpbXSwidGFza3MiOltdLCJhY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDgtMThUMTU6NTE6MTMuMTkwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDgtMjFUMTE6MzM6MDAuMzk2WiIsIl9fdiI6NiwicGFzc3dvcmRDaGVjayI6IiQyYiQxMCRraFRteU9HQWl0dmRKa0t0OS51L2x1a3QyMzVpeXBTbEVSUlNVMTdOSE1kY2o4QmV4NmMvLiJ9LCJpYXQiOjE2OTI2MTkwNDgsImV4cCI6MTY5MjYyMjY0OH0.s1GU3RvD8ept6qhhVn-aQdhboKrUgBFJ1ho9oAXWgvE`,
        },
      }
    )
    .then((response) => {
      return response.JSON();
    })
    .catch((error) => console.log(error));
}
