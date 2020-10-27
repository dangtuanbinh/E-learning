import { Container } from "@material-ui/core";
import React from "react";
import style from "./style";
import teacher1 from "../../Assets/img/team-1-370x406.jpg";
import teacher2 from "../../Assets/img/team-2-370x406.jpg";
import teacher3 from "../../Assets/img/team-3-370x406.jpg";

export default function index() {
  const classes = style();
  return (
    <section className={classes.OurTeachers}>
      <Container fixed>
        <div div className={classes.title}>
          <div className={classes.line}></div>
          <h6 className={classes.h6title}>
            OUR TEACHERS
          </h6>
        </div>

        <div className={classes.OurTeachersWrapper}>
          <div className={classes.OurTeachersItem}>
            <img src={teacher1} alt="teacher1" />
            <div className={classes.OurTeachersItemDetailText}>
              <h5>Sam Lee</h5>
              <p>Business Strategy Teacher</p>
            </div>
          </div>

          <div className={classes.OurTeachersItem}>
            <img src={teacher2} alt="teacher2" />
            <div className={classes.OurTeachersItemDetailText}>
              <h5>Peter Wilson</h5>
              <p>HR Management Teacher</p>
            </div>
          </div>

          <div className={classes.OurTeachersItem}>
            <img src={teacher3} alt="teacher3" />
            <div className={classes.OurTeachersItemDetailText}>
              <h5>Jill Sanders</h5>
              <p>Brand Strategy Teacher</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
