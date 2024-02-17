import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

import classNames from "class-names";

import { Link } from "react-router-dom";

import styles from "./Auth.module.css";

const Auth = () => {
  const [activeItem, setActiveItem] = useState(0);

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
            <p>Войти</p>
          </div>
          <Link to="/auth/register"
            className={classNames(styles.choose_item, {
              [styles.active]: activeItem === 1,
            })}
            onClick={() => handleItemClick(1)}
          >
            <p>Зарегистрироваться</p>
          </Link>
        </div>
        
        <div className={styles.enter_data}>
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
          <p>Забыли пароль?</p>
        </div>
        <div className={styles.enter}>
          <Link>
            <button>Войти</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
