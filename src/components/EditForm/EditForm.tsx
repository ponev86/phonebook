import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAvatar,
  editContact,
  getContactById,
  removeContact
} from '../../store/contact/actions';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import Icon from '../Icon';
import Input from '../Input';
import { InputType } from '../Input/types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './EditForm.module.scss';
import { IContact } from '../../store/contact/types';
import { IState } from '../../store/interfaces';

interface ISelectImage {
  preview?: string;
  file?: File;
}

interface FormValues {
  name: string;
  surname: string;
  phone: string;
  email: string;
  avatar?: string;
}

interface IEditProps {
  contactId: number;
}

const EditForm: React.FC<IEditProps> = ({ contactId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { contactItem, isLoading } = useSelector(
    (state: IState) => state.contactReducer
  );

  useEffect(() => {
    dispatch(getContactById(contactId));
  }, [dispatch, contactId]);

  const [selectImage, setSelectImage] = useState<ISelectImage>({
    preview: contactItem?.avatar,
    file: undefined
  });

  const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      setSelectImage({
        preview: URL.createObjectURL(e.currentTarget.files[0]),
        file: e.currentTarget.files[0]
      });
    }
  };

  const onResetImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectImage({});
    dispatch(clearAvatar(contactId));
  };

  const onBackHandler = () => {
    history.push('/');
  };

  const onRemoveContact = () => {
    dispatch(removeContact(contactId));
    history.push('/');
  };

  const formik = useFormik({
    initialValues: {
      name: contactItem?.name,
      surname: contactItem?.surname,
      phone: contactItem?.phone,
      email: contactItem?.email
    } as FormValues,
    validationSchema: Yup.object({
      name: Yup.string().trim().required(),
      surname: Yup.string().trim(),
      phone: Yup.string().required().min(4).max(12),
      email: Yup.string().email()
    }),
    onSubmit: values => {
      dispatch(editContact(contactId, values as IContact, selectImage?.file));
      history.push('/');
    }
  });

  if (isLoading) return null;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.header}>
        <div className={classNames('container', styles.header__inner)}>
          <Button
            buttonType={ButtonType.UNFILLED}
            className={styles.header__backLink}
            onClick={onBackHandler}
          >
            <Icon name="back" />
          </Button>

          <Button
            buttonType={ButtonType.UNFILLED}
            className={styles.header__applyButton}
            disabled={!!Object.keys(formik.errors).length}
            isSubmit
          >
            <Icon name="apply" />
          </Button>

          <label className={styles.header__imageWrapper} htmlFor="upload">
            {selectImage?.preview ? (
              <>
                <Button
                  buttonType={ButtonType.UNFILLED}
                  className={styles.header__resetImage}
                  onClick={onResetImage}
                >
                  <Icon name="cancel" />
                </Button>
                <img
                  className={styles.header__avatar}
                  src={selectImage.preview}
                  alt=""
                />
              </>
            ) : (
              <div className={styles.header__noPhoto}>
                {formik.values.name?.[0]}
                {formik.values.surname?.[0]}
              </div>
            )}
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={onSelectImage}
              id="upload"
              style={{ display: 'none' }}
            />
            <div className={styles.header__nameAction}>
              {selectImage?.preview ? 'Изменить' : 'Добавить фото'}
            </div>
          </label>
          <div className={styles.header__fields}>
            <Input
              inputType={InputType.INPUT}
              placeholder="Имя"
              isRequired
              isValid={formik.touched.name ? !formik.errors.name : null}
              {...formik.getFieldProps('name')}
            />
          </div>
          <div className={styles.header__fields}>
            <Input
              inputType={InputType.INPUT}
              placeholder="Фамилия"
              isValid={formik.touched.surname ? !formik.errors.surname : null}
              {...formik.getFieldProps('surname')}
            />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={classNames('container', styles.main__inner)}>
          <div>
            <Input
              inputType={InputType.INPUT}
              placeholder="Номер телефона"
              isValid={formik.touched.phone ? !formik.errors.phone : null}
              {...formik.getFieldProps('phone')}
            />
          </div>
          <div>
            <Input
              inputType={InputType.INPUT}
              placeholder="Email"
              isValid={formik.touched.email ? !formik.errors.email : null}
              {...formik.getFieldProps('email')}
            />
          </div>
        </div>
        <div className={styles.remove}>
          <Button
            buttonType={ButtonType.PRIMARY}
            className={styles.remove__button}
            onClick={onRemoveContact}
          >
            Удалить контакт
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
