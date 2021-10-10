import { css } from "styled-components";

const H28 = css`
  font-size: ${({ theme }) => theme.text.type.H28.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H28.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H28.lineHeight};
`;
const H24 = css`
  font-size: ${({ theme }) => theme.text.type.H24.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H24.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H24.lineHeight};
`;
const H20 = css`
  font-size: ${({ theme }) => theme.text.type.H20.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H20.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H20.lineHeight};
`;
const H16 = css`
  font-size: ${({ theme }) => theme.text.type.H16.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H16.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H16.lineHeight};
`;
const H14 = css`
  font-size: ${({ theme }) => theme.text.type.H14.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H14.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H14.lineHeight};
`;
const H12 = css`
  font-size: ${({ theme }) => theme.text.type.H12.fontSize};
  font-weight: ${({ theme }) => theme.text.type.H12.fontWeight};
  line-height: ${({ theme }) => theme.text.type.H12.lineHeight};
`;
const B16 = css`
  font-size: ${({ theme }) => theme.text.type.B16.fontSize};
  font-weight: ${({ theme }) => theme.text.type.B16.fontWeight};
  line-height: ${({ theme }) => theme.text.type.B16.lineHeight};
`;
const B14 = css`
  font-size: ${({ theme }) => theme.text.type.B14.fontSize};
  font-weight: ${({ theme }) => theme.text.type.B14.fontWeight};
  line-height: ${({ theme }) => theme.text.type.B14.lineHeight};
`;
const B12 = css`
  font-size: ${({ theme }) => theme.text.type.B12.fontSize};
  font-weight: ${({ theme }) => theme.text.type.B12.fontWeight};
  line-height: ${({ theme }) => theme.text.type.B12.lineHeight};
`;
const B10 = css`
  font-size: ${({ theme }) => theme.text.type.B10.fontSize};
  font-weight: ${({ theme }) => theme.text.type.B10.fontWeight};
  line-height: ${({ theme }) => theme.text.type.B10.lineHeight};
`;
const P16 = css`
  font-size: ${({ theme }) => theme.text.type.P16.fontSize};
  font-weight: ${({ theme }) => theme.text.type.P16.fontWeight};
  line-height: ${({ theme }) => theme.text.type.P16.lineHeight};
`;
const P14 = css`
  font-size: ${({ theme }) => theme.text.type.P14.fontSize};
  font-weight: ${({ theme }) => theme.text.type.P14.fontWeight};
  line-height: ${({ theme }) => theme.text.type.P14.lineHeight};
`;
const P12 = css`
  font-size: ${({ theme }) => theme.text.type.P12.fontSize};
  font-weight: ${({ theme }) => theme.text.type.P12.fontWeight};
  line-height: ${({ theme }) => theme.text.type.P12.lineHeight};
`;

export const TextTypes = {
  H28,
  H24,
  H20,
  H16,
  H14,
  H12,
  B16,
  B14,
  B12,
  B10,
  P16,
  P14,
  P12,
};

export type TextTypesKeys = keyof typeof TextTypes
