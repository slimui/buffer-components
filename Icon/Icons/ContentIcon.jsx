import React from 'react';
import Icon from '../../Icon';

const ContentIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M0,3.00247329 C0,2.44882258 0.444630861,2 1.00087166,2 L14.9991283,2 C15.5518945,2 16,2.45576096 16,3.00247329 L16,12.9975267 C16,13.5511774 15.5553691,14 14.9991283,14 L1.00087166,14 C0.448105505,14 0,13.544239 0,12.9975267 L0,3.00247329 Z M2,4.50043583 L2,11.4995642 C2,11.7692032 2.22401312,12 2.50034732,12 L13.4996527,12 C13.7709994,12 14,11.7759472 14,11.4995642 L14,4.50043583 C14,4.23079681 13.7759869,4 13.4996527,4 L2.50034732,4 C2.22900057,4 2,4.22405275 2,4.50043583 Z M3,5.74523926 C3,5.60979736 3.11230469,5.5 3.24719238,5.5 L12.7528076,5.5 C12.8893282,5.5 13,5.60752869 13,5.74523926 L13,7.25476074 C13,7.39020264 12.8876953,7.5 12.7528076,7.5 L3.24719238,7.5 C3.1106718,7.5 3,7.39247131 3,7.25476074 L3,5.74523926 Z M3,8.74523926 C3,8.60979736 3.10742188,8.5 3.24884939,8.5 L5.25115061,8.5 C5.38858633,8.5 5.5,8.60752869 5.5,8.74523926 L5.5,10.2547607 C5.5,10.3902026 5.39257812,10.5 5.25115061,10.5 L3.24884939,10.5 C3.11141367,10.5 3,10.3924713 3,10.2547607 L3,8.74523926 Z" />
  </Icon>;

ContentIcon.propTypes = {
  ...Icon.propTypes,
};

export default ContentIcon;