import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState, useEffect } from "react";
import { cleanObject } from "../../utils/index";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  //获取项目列表
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
    return () => {
      //   cleanup
    };
  }, [param]);
  //获取用户列表
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
    return () => {
      //   cleanup
    };
  }, []);
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};
