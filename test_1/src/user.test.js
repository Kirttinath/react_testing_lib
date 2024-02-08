import User from "./User";
import renderer from "react-test-renderer";

test("User test case 1", () => {
  const userDt = renderer.create(<User />).getInstance();
  expect(userDt.userList()).toMatch("User Data List");
});
