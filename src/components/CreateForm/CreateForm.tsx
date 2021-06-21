import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../store/contact/actions';
import { IContact } from '../../store/contact/types';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import Icon from '../Icon';
import Input from '../Input';
import { InputType } from '../Input/types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './CreateForm.module.scss';

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

const CreateForm: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [selectImage, setSelectImage] = useState<ISelectImage>();

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
  };

  const onBackHandler = () => {
    history.push('/');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: ''
    } as FormValues,
    validationSchema: Yup.object({
      name: Yup.string().trim().required(),
      surname: Yup.string().trim(),
      phone: Yup.string().required().min(4).max(12),
      email: Yup.string().email()
    }),
    onSubmit: values => {
      dispatch(addNewContact(values as IContact, selectImage?.file));
      history.push('/');
    }
  });

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
            isSubmit
            disabled={
              !formik.touched.name || !!Object.keys(formik.errors).length
            }
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
      </div>
    </form>
  );
};

export default CreateForm;
