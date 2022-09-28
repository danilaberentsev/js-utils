import { store } from 'react-notifications-component';
import {
  AUTHENTICATION_ERROR,
  NO_AUTHENTICATED_USER,
  PROCESS_EXECUTION_ERROR,
  SERVICE_IS_UNAVAILABLE
} from './constants';

export const renderNotification = (config = {}, dismiss = {}) => {
  store.addNotification({
    title: '',
    width: 250,
    message: '',
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animated', 'zoomIn'],
    animationOut: ['animated', 'zoomOut'],
    dismiss: {
      click: false,
      pauseOnHover: true,
      duration: 4000,
      onScreen: true,
      showIcon: true,
      ...dismiss
    },
    ...config
  });
};

export const renderErrors = (errors, duration = 30000) => {
  errors.forEach((err) => {
    if (typeof err === 'string') {
      renderNotification({ message: err, type: 'danger' }, { duration });
    }
  });
};

export const getErrorsArray = (data) => {
  const result = [];

  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'string') {
      result.push(data[key]);
    } else if (data[key] && typeof data[key] === 'object') {
      result.push(...getErrorsArray(data[key]));
    }
  });

  return result;
};

export const getResponseErrors = ({ data = {}, status } = {}, defaultMessage = PROCESS_EXECUTION_ERROR) => {
  const { errors, ERRORS, error, message } = data;

  if (errors && typeof errors === 'object') return getErrorsArray(errors);
  if (ERRORS && typeof ERRORS === 'object') return getErrorsArray(ERRORS);
  if (status >= 400 && message) return [message];
  if (status === 422) return getErrorsArray(data);
  if (status === 404) return [SERVICE_IS_UNAVAILABLE];
  if (status === 401) return [NO_AUTHENTICATED_USER];
  if (status === 403) return [AUTHENTICATION_ERROR];
  if (error) return [error];
  return [defaultMessage];
};

export const renderResponseErrors = ({ data = {}, status } = {}, defaultMessage = PROCESS_EXECUTION_ERROR) => {
  const errors = getResponseErrors({ data, status }, defaultMessage);

  renderErrors(errors);
};

export const renderReduxErrors = (state) => {
  renderResponseErrors({ data: state.data, status: state.responseStatus });
};

export default renderNotification;
