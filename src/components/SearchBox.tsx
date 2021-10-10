import React, { FC } from "react";
import styled from "styled-components";
import { SearchIcon } from "@primer/octicons-react";
const SearchBoxWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: block;
  transition: all 0.5s ease;

  .icon-search {
    top: 12px;
    left: 12px;
    position: absolute;
  }
`;

const SearchInput = styled.input`
  box-shadow: none;
  margin-left: 0;
  height: 40px !important;
  border-color: transparent;
  background-color: ${({ theme }) => theme.color.black100};
  color: ${({ theme }) => theme.color.black800};
  padding: 10px 10px 10px 34px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  border-radius: 16px;
  transition: all 0.5s ease;
`;

const SearchBox: FC<any> = (props) => {
  return (
    <SearchBoxWrapper>
      <SearchIcon size="small" className="icon-search" />
      <SearchInput {...props} />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
