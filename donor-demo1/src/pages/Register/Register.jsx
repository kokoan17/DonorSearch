import React, { useState } from "react";
import styles from "./Register.module.css";
import Layout from "../../components/Layout/Layout";

import classNames from "class-names";

import { Link } from "react-router-dom";

const Register = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <Layout>
      <div className={styles.main_info}>
        <div className={styles.choose}>
          <div
            className={classNames(styles.choose_item, {
              [styles.active]: activeItem === 0,
            })}
            onClick={() => handleItemClick(0)}
          >
            <p>Клиника</p>
          </div>
          <div
            className={classNames(styles.choose_item, {
              [styles.active]: activeItem === 1,
            })}
            onClick={() => handleItemClick(1)}
          >
            <p>Частный владелец</p>
          </div>
        </div>
        <div className={styles.enter_data}>
            {activeItem === 1 ? (<div className={styles.enter_data_name}>
            <p>ФИО</p>
            <input type="text" placeholder="Введите ФИО" />
          </div>) : (<div className={styles.enter_data_name}>
            <p>Название</p>
            <input type="text" placeholder="Введите название клиники" />
          </div>)}
          <div className={styles.enter_data_mail}>
            <p>Почта</p>
            <input type="text" placeholder="Введите электронную почту" />
          </div>
          <div className={styles.enter_data_password}>
            <p>Пароль</p>
            <input type="text" placeholder="Введите пароль" />
          </div>
        </div>
        <div className={styles.forgot_password}>
          <p>
            Уже есть аккаунт? <Link to="/auth"><span>Войти</span></Link>
          </p>
        </div>
        <div className={styles.enter}>
          <Link>
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
