// RESPONSIVE LAYOUT COMPONENT
import { useWindowSize } from "../hooks";
import { LayoutWrapper } from "../styled";

function Layout({ children }) {
  const { width } = useWindowSize()
  return (
    <LayoutWrapper currentWidth={width}>{children}</LayoutWrapper>
  );
}

export default Layout;