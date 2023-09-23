import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import UserList from "./components/User/UserList";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";
function App() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleError = () => {
    setError(false);
  };

  function handleRemove(id) {
    const newList = userList.filter((item) => item.id !== id);
    setUserList(newList);
  }
  const [userInput, setUserInput] = useState({
    name: "",
    age: 0,
    id: 0.986,
  });
  const [userList, setUserList] = useState([]);
  const handleNameChange = (input) => {
    setUserInput({ ...userInput, name: input });
  };
  const handleAgeChange = (input) => {
    setUserInput({ ...userInput, age: input });
  };

  const handleClick = () => {
    if (userInput.name == "") {
      setErrorMsg("No empty name alowed");

      setError(true);
    } else if (!isNaN(userInput.name)) {
      setErrorMsg('No numbers in "Name" input');

      setError(true);
    } else if (userInput.age < 1) {
      setErrorMsg("No age under or equal 0");

      setError(true);
    } else {
      setUserList((prevState) => {
        return [
          ...prevState,

          { ...userInput, id: Math.round(Math.random() * (999 - 1) + 1) },
        ];
      });
    }

    console.log(userList);
  };

  return (
    <div className="App">
      <Card>
        <Input
          onChange={handleNameChange}
          name={"Name"}
          label={"Name"}
          type={"text"}
        />
        <Input
          onChange={handleAgeChange}
          name={"Age"}
          label={"Age(Years)"}
          type={"number"}
        />
        <Button
          text={"Add user"}
          handleClick={handleClick}
        />
      </Card>
      <Card>
        <UserList
          handleRemove={handleRemove}
          list={userList}
        />
      </Card>
      {error && (
        <ErrorModal
          errorMsg={errorMsg}
          handleError={handleError}
        />
      )}
    </div>
  );
}

export default App;
