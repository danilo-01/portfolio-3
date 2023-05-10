const disablePageScroll = (disable: boolean) => {
  if (disable) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

export default disablePageScroll;
