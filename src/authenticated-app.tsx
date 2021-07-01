//登录后的页面
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { Row } from "./components/lib";
import { Menu, Dropdown, Button } from "antd";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { useDocumentTitle } from "utils";
export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  //切换浏览器title
  useDocumentTitle("项目列表", false);
  return (
    <Container>
      <Header between={true}>
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
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};
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
