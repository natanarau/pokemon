import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { theme } from 'styled-tools';

type GlobalStylesProps = {
  //
};

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
::-webkit-scrollbar {
  width: 6px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
::-webkit-scrollbar-track {
  background: #666;
  border: 0 #fff;
}
::-webkit-scrollbar-thumb {
  background: #777777;
  border: 0 #fff;
}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: "Montserrat", sans-serif;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html, body{
    font-size: 14px;
    background-color: #f6f8fc;
  }
  .mobile-menu-drawer {
    .ant-drawer-content-wrapper{
      width: 100% !important;
    }
    .ant-drawer-content{
      background-color: ${theme('colors.petroleum.100')} !important;
    }
    .ant-drawer-header{
      padding: 0 !important;
    }
    .ant-drawer-body{
      display: flex;
      align-items: center;
    }
    .ant-drawer-close{
      position: absolute;
      right: 0;
      top: 12px;
      color: #fff !important;
      font-size: 5vh !important;
    }
  }

.cashback-drawer .ant-drawer-content {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(70, 203, 209);
  background: linear-gradient(
    0deg,
    rgba(70, 203, 209, 1) 0%,
    rgba(70, 203, 209, 1) 0%,
    rgba(194, 254, 149, 1) 100%
  );
}

.callCenterModal .ant-modal-content{
  border-radius: 45px;
}

.modal-help-from-filters-manager{
  width: 40rem !important;
  .ant-modal-content{
    border-radius: 45px;
  }
}
.modal-help-from-rescue-method{
  width: 60rem !important;
  .ant-modal-content{
    border-radius: 45px;
  }
}
.ant-spin{
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-spin-dot-item{
  background-color: #fff;
}

.ant-modal-content{
  margin: 30px 10px !important;
}

a{
  color: ${theme('colors.gray.700')};
}

a:hover {
  color: ${theme('colors.gray.700')};
}

ul{
  margin: 0;
}

.ant-carousel .carousel-mobile .slick-dots-bottom{
  bottom: -2rem;
  margin-bottom: 0;
}

  @media (max-width: ${theme('breakpoints.xl')}) {

  }
  @media (max-width: ${theme('breakpoints.lg')}) {
    html, body{
      font-size: 14px;
    }
    .modal-help-from-rescue-method{
      width: 80% !important;
    }
    .modal-help-from-filters-manager{
      width: 60% !important;
    }
  }
  @media (max-width: ${theme('breakpoints.md')}) {
    .modal-help-from-rescue-method, .modal-help-from-filters-manager{
      width: 100% !important;
    }
  }
  @media (max-width: ${theme('breakpoints.sm')}) {
    html, body{
      font-size: 13px;
    }
  }
  @media (max-width: ${theme('breakpoints.xs')}) {
    html, body{
      font-size: 13px;
    }
  }
`;

export default GlobalStyles;
