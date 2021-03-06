const ImagePopup = ({onClose, card}) => {
  const onCloseClick = () => {
    onClose()
  }
  return (
    <div className={`popup popup_img ${card.isOpen ? 'popup_visiable' : null}`}>
      <div className="popup__container">
        <div className="popup__img-container">
          <img
            src={card.element.link}
            alt={card.element.name}
            className="popup__img"
          />
        </div>
        <p className="popup__text">{card.element.name}</p>
        <button className="popup__close popup__close_img page-link" onClick={onCloseClick}></button>
      </div>
    </div>
  );
};

export default ImagePopup;
