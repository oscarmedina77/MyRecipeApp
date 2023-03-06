import { Header } from "../../Elements/Header/Header";
import s from "./ErrorPage.styles";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <s.Wrapper>
        <s.Title>Oops!</s.Title>
        <s.Information>Sorry, an unexpected error has occurred.</s.Information>
        {isRouteErrorResponse(error) ? (
          <s.Information>
            {error.status}&nbsp;
            {error.statusText}
          </s.Information>
        ) : (
          <s.Information>{"Unknown error"}</s.Information>
        )}
      </s.Wrapper>
    </>
  );
};
