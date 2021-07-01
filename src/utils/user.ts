import { User } from "screens/project-list/search-panel";
import { useMount } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";
// 获取用户列表，并返回结果
export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useMount(() => {
    run(client("users"));
  });
  return result;
};
