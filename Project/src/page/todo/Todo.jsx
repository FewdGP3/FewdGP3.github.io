import React from "react";
import styles from "./Todo.module.css";
function Todo() {
  return (
    <div className={styles.userpage}>
      <div className={styles.status}>
        <div className={styles.dates}>
          <div className={styles.date}>
            <h1>17 JULY 2021</h1>
          </div>
        </div>
        <div id="calendar"></div>

        <hr />
        <div className={styles.container}>
          <form id="data-form">
            <div className={styles.addTask}>
              <input
                type="text"
                className={styles.textb}
                id="enterAdd"
                placeholder="Add New Task"
              />
              <button type="button">ADD</button>
            </div>
          </form>

          <ol className={styles.notCompleted}>
            <h3>Not Completed</h3>
          </ol>

          <ol className={styles.complete}>
            <h3>Completed Tasks</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Todo;
