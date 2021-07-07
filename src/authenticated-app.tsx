//登录后的页面
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { Row } from "./components/lib";
import { Menu, Dropdown, Button } from "antd";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { useDocumentTitle } from "utils";
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectScreen } from 'screens/project'
export const AuthenticatedApp = () => {
  //切换浏览器title
  useDocumentTitle("项目列表", false);
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={'/projects'} element={<ProjectListScreen />} />
            <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};
const PageHeader = () => {
  const { logout, user } = useAuth();
  return <Header between={true}>
    <HeaderLeft gap={true}>
      <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
      <h3>项目</h3>
      <h3>用户</h3>
    </HeaderLeft>
    <HeaderRight>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={"logout"}>
              <Button onClick={logout} type="link">
                退出登录
            </Button>
            </Menu.Item>
          </Menu>
        }
      >
        <Button onClick={(e) => e.preventDefault()} type="link">
          Hi,{user?.name}
        </Button>
      </Dropdown>
    </HeaderRight>
  </Header>

}
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "header"
    "main";
`;
const Header = styled(Row)`
  grid-area: header;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const Main = styled.main`
  grid-area: main;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
