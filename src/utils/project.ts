import { Project } from "screens/project-list/list";
import { useEffect } from "react";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { cleanObject } from "utils";
// 获取项目列表，并返回结果
export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return result;
};
